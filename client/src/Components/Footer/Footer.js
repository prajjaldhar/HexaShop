import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container mt-5">
      <footer
        className="py-5 text-white"
        style={{ backgroundColor: "#4f4e4e !important" }}
      >
        <div className="row text-white">
          <div className="col-6 col-md-2 mb-3 border-end pe-3 px-5">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              {/* Add additional links */}
              <li className="nav-item mb-2 ">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About Croma
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Help And Support
                </a>
              </li>
              {/* ... (add more links) */}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 border-end pe-3 px-5">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              {/* Add additional links */}
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About Croma
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Help And Support
                </a>
              </li>
              {/* ... (add more links) */}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 border-end pe-3 px-5">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              {/* Add additional links */}
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About Croma
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Help And Support
                </a>
              </li>
              {/* ... (add more links) */}
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Vertical Line */}

        {/* Horizontal Line */}
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">{/* ... (unchanged code) */}</ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
