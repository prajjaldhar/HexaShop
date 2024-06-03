import React from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCards from "./ProductCards.js";

const ProductCardSlider = ({ data, title, dataFileName }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
  };

  const headerStyle = {
    color: "#F5F5DC", // Cream color
    marginBottom: "1.5rem", // Adjust margin as needed
  };

  return (
    <div className="container mt-5">
      <h2 style={headerStyle}>{title}</h2>
      <Slider {...settings}>
        {data.map((product) => (
          <div key={product.id}>
            <ProductCards dataFileName={dataFileName} {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCardSlider;
