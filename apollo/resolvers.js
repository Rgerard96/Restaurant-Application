import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import Order from '../models/orderModel.js';
import { UserInputError } from 'apollo-server-micro';
import {
  UserRegisterValidator,
  UserLoginValidator,
  UserUpdateValidator,
  UserProfileUpdateValidator,
} from '../utils/UserValidator.js';
import { UpdateProductValidator } from '../utils/ProductValidator.js';
import { checkAuth } from '../utils/checkAuth.js';
import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_51JMBzLC6rZSeyB2KE5DhPahUyPz7k4XUFB5ug8PvLF52ONwov2A5kcFrjNkMyXPfg07zlP6uCIuJcJzEAZQXl3lv0043Y9FqU9'
);

// JWT Secret key
const SECRET_KEY = process.env.SECRET_KEY;

// PayPal Client ID
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;

// Generate Auth Token for User
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    SECRET_KEY,
    { expiresIn: '30d' }
  );
};

// Initiate Resolver

const resolvers = {
  Query: {
    // Get All Products - Pagination 8
    async products(_, { keyword, page }) {
      try {
        const pageSize = 8;
        const key = keyword
          ? {
              name: {
                $regex: keyword,
                $options: 'ix',
              },
            }
          : {};
        const products = Product.find(key);
        products.limit(pageSize).skip(pageSize * (page - 1));

        return products;
      } catch (error) {
        throw new Error(error);
      }
    },
    async productsCount(_, { keyword }) {
      try {
        const key = keyword
          ? {
              name: {
                $regex: keyword,
                $options: 'ix',
              },
            }
          : {};
        const products = Product.find(key);
        return (await products).length;
      } catch (error) {
        throw new Error(error);
      }
    },
    async users(_, { page }) {
      try {
        const pageSize = 8;
        const users = User.find();
        users.limit(pageSize).skip(pageSize * (page - 1));
        return users;
      } catch (error) {
        throw new Error(error);
      }
    },
    async usersCount() {
      try {
        const usersCount = User.find().countDocuments();
        return usersCount;
      } catch (error) {
        throw new Error(error);
      }
    },
    async orders(_, { page }) {
      try {
        const pageSize = 8;
        const orders = Order.find()
          .populate('user')
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        return orders;
      } catch (error) {
        throw new Error(error);
      }
    },
    async ordersCount() {
      try {
        const ordersCount = Order.find().populate('user').countDocuments();
        return ordersCount;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getProduct(_, { id }) {
      try {
        const getProduct = Product.findById(id)
          .populate('user')
          .populate({ path: 'reviews', populate: 'user' });
        return getProduct;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getOrder(_, { id }) {
      try {
        const getOrder = Order.findById(id).populate('user');
        return getOrder;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getUser(_, { id }) {
      try {
        const getUser = User.findById(id);
        return getUser;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getPaypalClientId() {
      try {
        const paypalClientId = PAYPAL_CLIENT_ID.toString();

        return {
          id: paypalClientId,
        };
      } catch (error) {
        throw new Error(error);
      }
    },
    async getUserOrders(_, { id, page }) {
      try {
        const pageSize = 8;
        const orders = Order.find({ user: id });
        orders.limit(pageSize).skip(pageSize * (page - 1));
        return orders;
      } catch (error) {
        throw new Error(error);
      }
    },
    async userOrdersCount(_, { id }) {
      try {
        const ordersCount = Order.find({ user: id }).countDocuments();
        return ordersCount;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async register(
      _,
      {
        registerUserInput: {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        },
      }
    ) {
      // TODO Validate user input
      const { errors, valid } = UserRegisterValidator(
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError('Errors', {
          errors,
        });
      }
      // TODO Check if user exist
      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError('This email already exist', {
          errors: {
            user: 'This email already exist',
          },
        });
      }
      // TODO Hash user password
      password = await bcryptjs.hash(password, 10);

      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
    async login(_, { email, password }) {
      // TODO Validate user input
      const { errors, valid } = UserLoginValidator(email, password);
      if (!valid) {
        throw new UserInputError('Errors', {
          errors,
        });
      }
      // TODO Check if user exist
      const user = await User.findOne({ email });
      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', {
          errors,
        });
      }
      // TODO Check if user password is correct
      const match = await bcryptjs.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong credentials';
        throw new UserInputError('Wrong credentials', {
          errors,
        });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async updateUser(
      _,
      {
        firstName,
        lastName,
        email,
        oldPassword,
        newPassword,
        confirmNewPassword,
      },
      context
    ) {
      const user = checkAuth(context);
      // TODO Validate user input
      const { errors, valid } = UserUpdateValidator(
        firstName,
        lastName,
        email,
        oldPassword,
        newPassword,
        confirmNewPassword
      );
      if (!valid) {
        throw new UserInputError('Errors', {
          errors,
        });
      }

      // TODO Check if user exist
      const existingUser = await User.findById(user.id);
      if (existingUser) {
        const match = await bcryptjs.compare(
          oldPassword,
          existingUser.password
        );
        if (!match) {
          errors.general = 'Old password is not correct';
          throw new UserInputError('Old password is not correct', {
            errors,
          });
        } else {
          existingUser.firstName = firstName;
          existingUser.lastName = lastName;
          existingUser.email = email;
          if (newPassword) {
            newPassword = await bcryptjs.hash(newPassword, 10);
            existingUser.password = newPassword;
          }
        }
      } else {
        errors.general = 'User not found';
        throw new UserInputError('User not found', {
          errors,
        });
      }

      const res = await existingUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
    async userProfileUpdate(
      _,
      { id, firstName, lastName, email, isAdmin },
      context
    ) {
      const userAdmin = checkAuth(context);
      // TODO Validate user input
      const { errors, valid } = UserProfileUpdateValidator(
        firstName,
        lastName,
        email
      );
      if (!valid) {
        throw new UserInputError('Errors', {
          errors,
        });
      }

      // TODO Check if user exist
      const existingUser = await User.findById(id);
      if (existingUser && userAdmin.isAdmin) {
        if (!userAdmin.isAdmin) {
          errors.general = 'Not an admin';
          throw new UserInputError('Not an admin', {
            errors,
          });
        } else {
          existingUser.firstName = firstName;
          existingUser.lastName = lastName;
          existingUser.email = email;
          existingUser.isAdmin = isAdmin;
        }
      } else {
        errors.general = 'User not found';
        throw new UserInputError('User not found', {
          errors,
        });
      }

      const res = await existingUser.save();

      return {
        ...res._doc,
        id: res._id,
      };
    },
    async updateProduct(
      _,
      { id, name, image, brand, category, description, price, countInStock },
      context
    ) {
      const userAdmin = checkAuth(context);
      // TODO Validate user input
      const { errors, valid } = UpdateProductValidator(
        name,
        image,
        brand,
        category,
        description,
        price,
        countInStock
      );
      if (!valid) {
        throw new UserInputError('Errors', {
          errors,
        });
      }

      // TODO Check if product exist
      const existingProduct = await Product.findById(id);
      if (existingProduct && userAdmin.isAdmin) {
        if (!userAdmin.isAdmin) {
          errors.general = 'Not an admin';
          throw new UserInputError('Not an admin', {
            errors,
          });
        } else {
          existingProduct.name = name;
          existingProduct.brand = brand;
          existingProduct.category = category;
          existingProduct.description = description;
          existingProduct.price = price;
          existingProduct.countInStock = countInStock;
        }
      } else {
        errors.general = 'Product not found';
        throw new UserInputError('Product not found', {
          errors,
        });
      }

      const res = await existingProduct.save();

      return {
        ...res._doc,
        id: res._id,
      };
    },
    async deleteUser(_, { id }, context) {
      const userAdmin = checkAuth(context);

      // TODO Check if user exist
      const existingUser = await User.findById(id);
      if (existingUser && userAdmin.isAdmin) {
        existingUser.remove();
      }

      return 'User deleted succesfully';
    },
    async deleteProduct(_, { id }, context) {
      const userAdmin = checkAuth(context);

      // TODO Check if product exist
      const existingProduct = await Product.findById(id);
      if (existingProduct && userAdmin.isAdmin) {
        existingProduct.remove();
      }

      return 'Product deleted succesfully';
    },
    async createOrder(
      _,
      {
        orderItems,
        shippingAddress,
        paymentMethod,
        subtotalPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      },
      context
    ) {
      const user = checkAuth(context);

      const amount = totalPrice.toFixed(2).split('.').join('');
      let stripeData;
      console.log(amount);

      if (paymentMethod === 'iDeal') {
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: 'eur',
          payment_method_types: ['ideal'],
        });

        stripeData = {
          id: paymentIntent.id,
          client_secret: paymentIntent.client_secret,
        };
      }

      const newOrder = new Order({
        user: user.id,
        orderItems,
        shippingAddress,
        paymentMethod,
        stripe: stripeData,
        subtotalPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const order = await newOrder.save();

      return {
        ...order._doc,
        id: order._id,
      };
    },
    async createProduct(
      _,
      { name, image, brand, category, description, price, countInStock },
      context
    ) {
      const userAdmin = checkAuth(context);
      // TODO Validate user input
      const { errors, valid } = UpdateProductValidator(
        name,
        image,
        brand,
        category,
        description,
        price,
        countInStock
      );
      if (!valid) {
        throw new UserInputError('Errors', {
          errors,
        });
      }

      const newProduct = new Product({
        user: userAdmin.id,
        name,
        image,
        brand,
        category,
        description,
        price,
        countInStock,
      });

      const product = await newProduct.save();

      return {
        ...product._doc,
        id: product._id,
      };
    },
    async paymentUpdate(_, { orderId }) {
      const order = await Order.findById(orderId);

      const paymentIntent = await stripe.paymentIntents.retrieve(
        order.stripe.id
      );

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        order.isPaid = true;
        console.log(paymentIntent);
      } else {
        console.log(paymentIntent);
      }

      // if (order) {
      //   (order.isPaid = true),
      //     (order.paidAt = new Date().toISOString()),
      //     (order.paymentResult = {
      //       id,
      //       status,
      //       date,
      //       email_address,
      //     });
      // }

      await order.save();

      return 'Payment was processed succesfully';
    },
    async deliveredUpdate(_, { id }) {
      const order = await Order.findById(id);

      if (order) {
        (order.isDelivered = true),
          (order.deliveredAt = new Date().toISOString());
      }

      await order.save();

      return 'Delivery was processed succesfully';
    },
    async createProductReview(_, { id, rating, comment }, context) {
      const user = checkAuth(context);
      const product = await Product.findById(id);

      if (product) {
        const alreadyReviewed = product.reviews.find(
          (r) => r.user.toString() === user.id.toString()
        );

        if (alreadyReviewed) {
          throw new Error('Product already reviewed');
        } else {
          const review = {
            user: user.id,
            rating,
            comment,
          };

          product.reviews.push(review);
          product.numReviews = product.reviews.length;
          product.rating =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            product.reviews.length;
        }
      } else {
        throw new Error('Product not found');
      }

      await product.save();

      return 'Review added';
    },
  },
};

export default resolvers;
