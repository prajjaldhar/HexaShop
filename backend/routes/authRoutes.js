const express = require("express");
const passport = require("../passport-setup");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/login/success", (req, res) => {
  console.log(req.user);
  if (req.user) {
    res
      .status(200)
      .json({ message: "User logged in successfully!", user: req.user });
  } else {
    res.status(403).json({ error: "No user found." });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({ error: true, message: "Log in failure" });
});

router.get("/google", authController.googleAuth);

router.get(
  "/google/callback",
  authController.googleAuthCallback,
  (req, res) => {
    if (req.user) {
      // Redirect to localhost:3000 with user data as query parameters
      res.redirect(`http://localhost:3000/`);
    } else {
      // Call the login failed route handler directly
      res.redirect(`/login/failed`);
    }
  }
);

module.exports = router;
