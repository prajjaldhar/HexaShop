import React from "react";
import HeadBar from "../../Components/Header/HeadBar";
import Footer from "../../Components/Footer/Footer";
import ProductAddCart from "../../Components/ProductAddCart/ProductAddCart";

const MobileDisplay = () => {
  return (
    <>
      <HeadBar />
      <div className="mt-5">
        <div className="Smart-Catagory container">
          <h5 className="pt-5 fs-6 text-light">
            Crome <i className="fa-solid fa-greater-than" /> OnePlus 12 5G
            Smartphone
          </h5>
          <ProductAddCart />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MobileDisplay;
