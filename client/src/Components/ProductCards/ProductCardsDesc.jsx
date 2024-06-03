import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Create a CSS file for additional styling
import products from "./ProductCardsData";
import "./ProductCardDesc.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  description,
  oldPrice,
  price,
  rating,
  imageUrl,
  dataFileName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncateDescription = (text, limit) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  return (
    <Card
      className={`product-cards ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        <Link to={`/product/${dataFileName}-${id}`}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body className="card-body">
            <Card.Title className={isHovered ? "hidden" : ""}>
              {title}
            </Card.Title>
            <Card.Text
              className={`truncated-text ${isHovered ? "hidden" : ""}`}
            >
              {truncateDescription(description, 30)}
            </Card.Text>
            <Card.Text
              className={`complete-description ${isHovered ? "" : "hidden"}`}
            >
              {description}
            </Card.Text>
            <div className={`price ${isHovered ? "hidden" : ""}`}>
              <span className="old-price">${oldPrice}</span>
              <span className="new-price">${price}</span>
            </div>
            <div className={`rating ${isHovered ? "hidden" : ""}`}>
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index + 1 <= rating ? "star filled" : "star"}
                >
                  {index + 1 <= rating ? "★" : "⋆"}
                </span>
              ))}
            </div>
          </Card.Body>
        </Link>
      </div>
    </Card>
  );
};

const ProductCardsDesc = () => {
  const headerStyle = {
    color: "#F5F5DC", // Cream color
    marginBottom: "1.5rem", // Adjust margin as needed
  };

  return (
    <Container>
      <h2 className="mt-3 mb-3" style={headerStyle}>
        Products
      </h2>
      <Row className="justify-content-center" style={{ marginBottom: "2rem" }}>
        {products.map((product, index) => (
          <Col md={3} key={index}>
            <ProductCard dataFileName={"ProductCardsData"} {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCardsDesc;
