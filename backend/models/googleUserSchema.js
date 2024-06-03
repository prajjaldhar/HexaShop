const mongoose = require("mongoose");

const googleUserSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: { type: String },
  email: { type: String, required: true },
});

const User = mongoose.model("GoogleUser", googleUserSchema);

module.exports = User;
