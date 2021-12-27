import { gql, makeVar } from '@apollo/client';

const GET_PRODUCTS = gql`
  query ProductsQuery($keyword: String, $page: Int) {
    products(keyword: $keyword, page: $page) {
      id
      name
      image
      price
      category
      brand
      rating
      numReviews
    }
    productsCount(keyword: $keyword)
  }
`;
const GET_USERS = gql`
  query UsersQuery($page: Int) {
    users(page: $page) {
      id
      firstName
      lastName
      email
      isAdmin
    }
    usersCount
  }
`;
const GET_ORDERS = gql`
  query OrdersQuery($page: Int) {
    orders(page: $page) {
      id
      user {
        firstName
        lastName
      }
      totalPrice
      isPaid
      paidAt
      isDelivered
      deliveredAt
      createdAt
    }
    ordersCount
  }
`;
const GET_PRODUCT = gql`
  query ProductQuery($id: ID!) {
    getProduct(id: $id) {
      id
      name
      image
      brand
      category
      description
      price
      countInStock
      rating
      numReviews
      reviews {
        id
        user {
          firstName
          lastName
        }
        rating
        comment
        createdAt
      }
    }
  }
`;
const GET_ORDER_AND_PAYPAL_ID = gql`
  query OrderQuery($id: ID!) {
    getOrder(id: $id) {
      id
      user {
        id
        firstName
        lastName
        email
      }
      orderItems {
        name
        qty
        price
        image
        product
      }
      shippingAddress {
        address
        city
        postalCode
        country
      }
      paymentMethod
      stripe {
        id
        client_secret
      }
      subtotalPrice
      taxPrice
      shippingPrice
      totalPrice
      isPaid
      paidAt
      isDelivered
      deliveredAt
    }
    getPaypalClientId {
      id
    }
  }
`;
const GET_USER_ORDERS = gql`
  query UserOrdersQuery($id: ID!, $page: Int) {
    getUserOrders(id: $id, page: $page) {
      id
      totalPrice
      isPaid
      paidAt
      isDelivered
      deliveredAt
      createdAt
    }
    userOrdersCount(id: $id)
  }
`;
const GET_USER = gql`
  query UserQuery($id: ID!) {
    getUser(id: $id) {
      firstName
      lastName
      email
      isAdmin
    }
  }
`;

const REGISTER_USER = gql`
  mutation register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerUserInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      firstName
      lastName
      email
      isAdmin
      token
    }
  }
`;
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      isAdmin
      token
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $oldPassword: String!
    $newPassword: String
    $confirmNewPassword: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      oldPassword: $oldPassword
      newPassword: $newPassword
      confirmNewPassword: $confirmNewPassword
    ) {
      id
      firstName
      lastName
      email
      isAdmin
      token
    }
  }
`;
const USER_PROFILE_UPDATE = gql`
  mutation userProfileUpdate(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $isAdmin: Boolean!
  ) {
    userProfileUpdate(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      isAdmin: $isAdmin
    ) {
      id
      firstName
      lastName
      email
      isAdmin
    }
  }
`;
const PRODUCT_UPDATE = gql`
  mutation updateProduct(
    $id: ID!
    $name: String!
    $image: String!
    $brand: String!
    $category: String!
    $description: String!
    $price: Float!
    $countInStock: Int!
  ) {
    updateProduct(
      id: $id
      name: $name
      image: $image
      brand: $brand
      category: $category
      description: $description
      price: $price
      countInStock: $countInStock
    ) {
      id
    }
  }
`;
const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;
const PAYMENT_UPDATE = gql`
  mutation paymentUpdate($orderId: ID!) # $id: String!
  # $status: String!
  # $date: String!
  # $email_address: String!
  {
    paymentUpdate(orderId: $orderId) # id: $id
    # status: $status
    # date: $date
    # email_address: $email_address
    {
      paymentResult {
        id
        status
        date
        email_address
      }
    }
  }
`;
const DELIVERED_UPDATE = gql`
  mutation deliveredUpdate($id: ID!) {
    deliveredUpdate(id: $id)
  }
`;
const CREATE_ORDER = gql`
  mutation createOrder(
    $orderItems: [OrderItemInput]!
    $shippingAddress: ShippingAddressInput!
    $paymentMethod: String!
    $subtotalPrice: Float!
    $taxPrice: Float!
    $shippingPrice: Float!
    $totalPrice: Float!
  ) {
    createOrder(
      orderItems: $orderItems
      shippingAddress: $shippingAddress
      paymentMethod: $paymentMethod
      subtotalPrice: $subtotalPrice
      taxPrice: $taxPrice
      shippingPrice: $shippingPrice
      totalPrice: $totalPrice
    ) {
      id
    }
  }
`;
const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $image: String!
    $brand: String!
    $category: String!
    $description: String!
    $price: Float!
    $countInStock: Int!
  ) {
    createProduct(
      name: $name
      image: $image
      brand: $brand
      category: $category
      description: $description
      price: $price
      countInStock: $countInStock
    ) {
      id
    }
  }
`;

const CREATE_PRODUCT_REVIEW = gql`
  mutation createProductReview($id: ID!, $rating: Int!, $comment: String) {
    createProductReview(id: $id, rating: $rating, comment: $comment)
  }
`;

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const cartItemsVar = makeVar(
  localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
);

const addToCart = (id, data, qty) => {
  const cart = cartItemsVar();
  const productExist = cart.find((p) => p.id === id);

  if (productExist) {
    return cart.map((p) => (p.id === productExist.id ? { id, data, qty } : p));
  } else {
    return [...cart, { id, data, qty }];
  }
};
const shippingInfoVar = makeVar(
  localStorage.getItem('shippingInfo')
    ? JSON.parse(localStorage.getItem('shippingInfo'))
    : []
);
const paymentInfoVar = makeVar(
  localStorage.getItem('paymentInfo')
    ? JSON.parse(localStorage.getItem('paymentInfo'))
    : []
);
const searchVar = makeVar();

const clearLocalStorage = () => {
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingInfo');
  localStorage.removeItem('paymentInfo');
};

export {
  GET_PRODUCTS,
  GET_USERS,
  GET_ORDERS,
  GET_PRODUCT,
  GET_ORDER_AND_PAYPAL_ID,
  GET_USER_ORDERS,
  GET_USER,
  GET_CART_ITEMS,
  REGISTER_USER,
  LOGIN_USER,
  UPDATE_USER,
  USER_PROFILE_UPDATE,
  PRODUCT_UPDATE,
  DELETE_USER,
  DELETE_PRODUCT,
  PAYMENT_UPDATE,
  DELIVERED_UPDATE,
  CREATE_ORDER,
  CREATE_PRODUCT,
  CREATE_PRODUCT_REVIEW,
  cartItemsVar,
  shippingInfoVar,
  paymentInfoVar,
  searchVar,
  addToCart,
  clearLocalStorage,
};
