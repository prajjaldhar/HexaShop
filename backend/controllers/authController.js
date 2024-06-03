// controllers/authController.js

const passport = require("passport");

exports.googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

exports.googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "/login/failed",
  
});
