import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../../redux/features/userSlice";
import "./Header.css";

function HeaderBar() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    dispatch(setUser({}));
    // Use navigate to redirect to the login page
    axios.get("/logout");
    navigate("/login");
  };

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="#!">Logo</a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="navbar-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Services</a>
              <ul className="navbar-dropdown">
                <li>
                  <a href="#!">Sass</a>
                </li>
                <li>
                  <a href="#!">Less</a>
                </li>
                <li>
                  <a href="#!">Stylus</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" onClick={handlelogout}>
                Logout
              </a>
            </li>
            <li>
              <a href="#!">Category</a>
              <ul className="navbar-dropdown">
                <li>
                  <a href="#!">Sass</a>
                </li>
                <li>
                  <a href="#!">Less</a>
                </li>
                <li>
                  <a href="#!">Stylus</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">{user?.username}</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default HeaderBar;
