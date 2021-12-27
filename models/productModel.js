import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    rating: Number,
    comment: String,
  },
  {
    timestamps: true,
  }
);
const productSchema = mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    name: String,
    image: String,
    brand: String,
    category: String,
    description: String,
    price: { type: Number, default: 0 },
    reviews: [reviewSchema],
    rating: { type: Number, default: 0 },
    countInStock: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product
  ? mongoose.models.Product
  : mongoose.model('Product', productSchema);

export default Product;
