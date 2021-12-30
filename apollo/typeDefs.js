import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Product {
    id: ID!
    user: User
    name: String!
    image: String!
    brand: String!
    category: String!
    description: String!
    price: Float!
    reviews: [Review]
    rating: Float
    countInStock: Int!
    numReviews: Int
  }

  type User {
    id: ID
    name: String
    email: String
    isAdmin: Boolean
    token: String
  }

  type Review {
    id: ID!
    user: User!
    rating: Int!
    comment: String
    createdAt: String
  }

  type Order {
    id: ID!
    user: User!
    orderItems: [OrderItem]!
    shippingAddress: ShippingAddress!
    paymentMethod: String!
    stripe: Stripe
    paymentResult: PaymentResult
    subtotalPrice: Float!
    taxPrice: Float!
    shippingPrice: Float!
    totalPrice: Float!
    isPaid: Boolean!
    paidAt: String
    isDelivered: Boolean!
    deliveredAt: String
    createdAt: String
  }

  type OrderItem {
    name: String!
    qty: Int!
    price: Float!
    image: String!
    product: ID!
  }

  type ShippingAddress {
    address: String!
    city: String!
    postalCode: String!
    country: String!
  }
  type PaymentResult {
    id: String!
    status: String!
    date: String!
    email_address: String!
  }

  type Stripe {
    id: String
    client_secret: String
  }

  type PaypalClientId {
    id: String
  }

  input RegisterUserInput {
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input ShippingAddressInput {
    address: String!
    city: String!
    postalCode: String!
    country: String!
  }

  input OrderItemInput {
    name: String!
    qty: Int!
    price: Float!
    image: String!
    product: ID!
  }

  type Query {
    products(keyword: String, page: Int): [Product]
    productsCount(keyword: String): Int
    users(page: Int): [User]
    usersCount: Int
    orders(page: Int): [Order]
    ordersCount: Int
    getProduct(id: ID!): Product
    getOrder(id: ID!): Order
    getUser(id: ID!): User
    getPaypalClientId: PaypalClientId
    getUserOrders(id: ID!, page: Int): [Order]
    userOrdersCount(id: ID!): Int
  }

  type Mutation {
    register(registerUserInput: RegisterUserInput): User
    login(email: String!, password: String!): User
    updateUser(
      name: String!
      email: String!
      oldPassword: String!
      newPassword: String
      confirmNewPassword: String
    ): User
    updateProduct(
      id: ID!
      name: String!
      image: String!
      brand: String!
      category: String!
      description: String!
      price: Float!
      countInStock: Int!
    ): Product
    userProfileUpdate(
      id: ID!
      name: String!
      email: String!
      isAdmin: Boolean!
    ): User
    deleteUser(id: ID!): String
    deleteProduct(id: ID!): String
    createOrder(
      orderItems: [OrderItemInput]!
      shippingAddress: ShippingAddressInput!
      paymentMethod: String!
      subtotalPrice: Float!
      taxPrice: Float!
      shippingPrice: Float!
      totalPrice: Float!
    ): Order
    paymentUpdate(
      orderId: ID!
    ): Order
    deliveredUpdate(id: ID!): String
    createProduct(
      name: String!
      image: String!
      brand: String!
      category: String!
      description: String!
      price: Float!
      countInStock: Int!
    ): Product
    createProductReview(id: ID!, rating: Int!, comment: String): String
  }
`;

export default typeDefs;
