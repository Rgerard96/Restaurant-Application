import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User
  ? mongoose.models.User
  : mongoose.model('User', userSchema);

export default User;
