import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

const Login = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const registerEventListener = () => {
    setIsLogin(false);
  };

  const googleAuth = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };

  const loginEventListener = () => {
    setIsLogin(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/users/register",
        formData
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success(
          "User Registered Successfully!!! Please Login to Continue!"
        );
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }

    // Reset the form data
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleSubmitSignin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/users/login",
        formData
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        try {
          const res = await axios.post(
            "http://localhost:8000/users/getuserdata",
            { token: localStorage.getItem("token") },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (res.data.data.isAdmin) {
            navigate("/admin");
          } else if (!res.data.data.isAdmin) {
            navigate("/");
          } else {
            navigate("/login");
          }
        } catch (error) {
          localStorage.clear();
          alert("Sorry");
          console.log(error);
        }
      } else {
        alert(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    // Reset the form data
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="Login-body">
      <ToastContainer />
      <div
        className={`login-container ${
          isLogin ? "login-container" : "login-container active"
        }`}
        id="login-container"
      >
        <div className="form-container sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon" onClick={googleAuth}>
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSubmitSignin}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className={`${isLogin ? "toggle" : "toggle active"}`}>
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button
                className="hidden"
                id="login"
                onClick={loginEventListener}
              >
                Sign In
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all site features</p>
              <button
                className="hidden"
                id="register"
                onClick={registerEventListener}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
