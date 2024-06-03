const express = require("express");
const {
  loginController,
  logoutController,
  registerController,
  authController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authmiddlewares");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getuserdata", authMiddleware, authController);

module.exports = router;

