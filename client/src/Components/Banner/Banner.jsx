// App.js
import React from "react";
import Slider from "react-slick";
import bannerdata from "./bannerdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from "./BannerSlider";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const App = () => {
  return (
    <div>
      <Slider {...settings}>
        {bannerdata.map((item, index) => (
          <div key={index}>
            <BannerSlider imgsrc={item.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
