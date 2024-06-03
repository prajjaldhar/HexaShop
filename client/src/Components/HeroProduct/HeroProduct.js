// HeroProduct.js

import React from "react";
import { productData } from "./productData";
import HeroProductCard from "./HeroProductCard";
import "./HeroProduct.css";

const HeroProduct = () => {
  const headerStyle = {
    color: "#F5F5DC", // Cream color
    marginBottom: "-8rem",
  };

  return (
    <div className="container mt-5">
      <h2 style={headerStyle}>Productive Purchase</h2>
      <div className="text-center mt-3">
        <HeroProductCard
          leftImage={productData.leftImage}
          rightImages={productData.rightImages}
        />
      </div>
    </div>
  );
};

export default HeroProduct;
