// BannerSlider.js
import React from "react";
import "./Banner.css";


const BannerSlider = ({ imgsrc }) => {
  return (
    <div className="banner">
      <img src={imgsrc} alt="Banner" className="banner-image" />
    </div>
  );
};

export default BannerSlider;

