import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Create a separate CSS file for your component styles
import { Link } from "react-router-dom";

const ProductcomList = ({ data, title, dataFileName }) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
  };
  const headerStyle = {
    color: "#F5F5DC", // Cream color
    marginBottom: "1.5rem", // Adjust margin as needed
  };

  return (
    <div className="container mt-4 my-component-container">
      <h2 style={headerStyle}>{title}</h2>
      {/* Add a class for styling */}
      {data.map((group) => (
        <div key={group.id} className="mb-4">
          <div className="row mb-4">
            {group.cards.slice(0, 2).map((card) => (
              <div key={card.id} className="col-md-6">
                <Link to={`/mobiledisplay`}>
                  <img
                    src={card.imageUrl}
                    alt={`Card ${card.id}`}
                    className="img-fluid"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductcomList;
