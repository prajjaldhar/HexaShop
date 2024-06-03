import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductCards.css"; // Create a separate CSS file
import { Link } from "react-router-dom";

const ProductCards = ({ id, name, image, dataFileName }) => {
  return (
    <div className="col-md-3 mb-3 m-4">
      <div className="card glassmorphism-card" style={{ width: "16rem" }}>
        <Link to={`/product/${dataFileName}-${id}`}>
          <img src={image} className="card-img-top" alt={`Product ${id}`} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;
