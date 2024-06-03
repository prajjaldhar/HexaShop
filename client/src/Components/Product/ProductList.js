// ProductList.js
import React from "react";
import ProductCard from "./ProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductStyle.css";
import { Link } from "react-router-dom";

const ProductList = ({ products, title1, title2, dataFileName }) => {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="product-list-container">
      <div className="product-category">
        <h1>{title1}</h1>
        <div className="product-container">
          {groupedProducts["featured"] &&
            groupedProducts["featured"].map((product) => (
              <Link to={`/product/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            ))}
        </div>
      </div>
      <div className="product-category">
        <h1>{title2}</h1>
        <div className="product-container">
          {groupedProducts["popular"] &&
            groupedProducts["popular"].map((product) => (
              <Link to={`/product/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
