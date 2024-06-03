// AdvertisementItem.js
import React from "react";

const AdvertisementItem = ({ title,  imageUrl1, imageUrl2, color }) => {
  return (
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div
          className="ag-courses-item_bg"
          style={{ backgroundColor: color }}
        ></div>
        <div className="ag-courses-item_title">{title}</div>
        <div className="ag-courses-item_date-box">
          <img
            src={imageUrl1}
            alt="Advertisement"
            className="ag-courses-item_image"
          />
          <img
            src={imageUrl2}
            alt="Advertisement"
            className="ag-courses-item_image"
          />
        </div>
      </a>
    </div>
  );
};

export default AdvertisementItem;
