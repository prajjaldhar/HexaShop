// BrandComponent.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandData } from "./BrandData";
import "./brandcricle.css";

const BrandComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 6, // Adjust the number of slides to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container" style={{ marginTop: "-6rem" }}>
      <Slider {...settings}>
        {BrandData.map((brand, index) => (
          <div key={index} className="mb-4">
            <div className="rounded-circle overflow-hidden mx-auto brand-circle">
              <img
                src={brand.image}
                alt={`Brand ${index + 1}`}
                className="img-fluid"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandComp;
