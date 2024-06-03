const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./connections/db");
const passport = require("passport");
const cookieSession = require("cookie-session");
const authRoutes = require("./routes/authRoutes");
const passportSetup = require("./passport-setup");
const session = require("express-session");

const app = express();
dotenv.config();

//PORT
const PORT = process.env.PORT || 8080 || 6000 || 7000;

// Establish the MongoDB connection
connectDB();

// Middleware to parse JSON request bodies
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true, // You may need to set this if you're using cookies or authorization headers
  })
);
app.use(express.json());
app.use(morgan("dev"));
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["prajjal"],
//     maxAge: 24 * 60 * 60 * 100,
//   })
// );

// Initialize session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "asjdbajsdjasd31231jb",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Use the product routes
app.use("/products", require("./routes/Productroutes"));
app.use("/users", require("./routes/UserRoutes"));
app.use("/auth", authRoutes);

// Logout route
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.status(500).send("Error logging out");
    }
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Error logging out");
      }
      res.redirect("http://localhost:3000/login"); // Redirect to the login page
    });
  });
});

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to express",
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(
    `Server is Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
