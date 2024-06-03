// ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl[0]}
        alt={product.title}
        className="product-image"
      />
    </div>
  );
};

export default ProductCard;
