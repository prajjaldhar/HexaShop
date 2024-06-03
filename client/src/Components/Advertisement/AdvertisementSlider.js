// Advertisement.js
import React from "react";
import Slider from "react-slick";
import AdvertisementItem from "./AdvertisementItem";
import AdvertisementData from "./AdvertisementData";
import "./Advertisement.css";

const Advertisement = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Set the number of slides to show
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    arrows: false,
  };

  return (
    <div className="ag-format-container">
      <Slider {...settings}>
        {AdvertisementData.map((advertisement, index) => (
          <AdvertisementItem key={index} {...advertisement} />
        ))}
      </Slider>
    </div>
  );
};

export default Advertisement;
