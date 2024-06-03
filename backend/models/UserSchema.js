const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  reviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reviews", // Replace "Review" with the actual name of the reviews model
  },
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orders", // Replace "Order" with the actual name of the orders model
  },
  otp: {
    type: String,
  },
  otpExpiration: {
    type: Date,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
