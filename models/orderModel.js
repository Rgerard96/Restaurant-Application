import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    orderItems: [
      {
        name: String,
        qty: Number,
        image: String,
        price: Number,
        product: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },
    paymentMethod: String,
    stripe: {
      id: String,
      client_secret: String,
    },
    paymentResult: {
      id: String,
      status: String,
      date: String,
      email_address: String,
    },
    subtotalPrice: { type: Number, default: 0.0 },
    taxPrice: { type: Number, default: 0.0 },
    shippingPrice: { type: Number, default: 0.0 },
    totalPrice: { type: Number, default: 0.0 },
    isPaid: { type: Boolean, default: false },
    paidAt: Date,
    isDelivered: { type: Boolean, default: false },
    deliveredAt: Date,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order
  ? mongoose.models.Order
  : mongoose.model('Order', orderSchema);

export default Order;
