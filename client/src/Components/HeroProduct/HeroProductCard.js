// ProductCard.js

import React from "react";
import "./HeroProduct.css";

const HeroProductCard = ({ leftImage, rightImages }) => {
  return (
    <div className="product-card-container">
      <div className="left-container">
        <img src={leftImage} alt="Left Product" width="200" height="400" />
      </div>
      <div className="right-container">
        {rightImages.map((image, index) => (
          <div key={index} className="right-card">
            <img
              src={image}
              alt={`Right Product ${index + 1}`}
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroProductCard;
