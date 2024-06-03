import React, { useState } from "react";
import "./ProductAddCart.css";
import productsdata from "./ProductCardsData";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../redux/features/cartSlice";

const ProductAddCart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [goToCart, setGoToCart] = useState(false);

  const handleAddtoCart = (id) => {
    const isAlreadyAdded = cartItems.some((item) => item.id === id);

    if (!isAlreadyAdded) {
      // Find the product with the given ID
      const productToAdd = productsdata.find((product) => product.id === id);
      // Dispatch action to add the product to the cart
      dispatch(setCart([...cartItems, productToAdd]));
      setGoToCart(true);
    }
  };

  return (
    <div className="container">
      <h1 className="fs-3 text-light mb-5 mt-5">OnePlus 12 5G Smartphone</h1>

      <div className="Smart-Phones d-flex justify-content-lg-start flex-wrap">
        {productsdata.map((data, index) => (
          <div key={data.id}>
            <div className="Smart-phone m-2">
              <div className="SP-image" style={{ background: "none" }}>
                <img src={data.imageUrl} alt="nothing" />
                <button className="Sp-wish">
                  <i className="fa-regular fa-heart text-light" />
                </button>
              </div>
              <h2 className="fs-6 bg-transparent text-start mt-3 text-light">
                {data.title}
              </h2>
              <h2 className="fs-5 text-start bg-transparent text-light">
                {data.oldPrice}
              </h2>
              <div className="d-flex justify-content-center bg-transparent align-items-center">
                <button
                  className={`mt-2 border-1 border-light bg-transparent rounded p-2 ps-3 pe-3 text-light fw-light ${
                    cartItems.some((item) => item.id === data.id)
                      ? "d-none"
                      : ""
                  }`}
                  onClick={() => handleAddtoCart(data.id)}
                >
                  Add to Cart
                </button>
                <button
                  className={`mt-2 border-1 border-light bg-transparent rounded p-2 ps-3 pe-3 text-light fw-light ${
                    cartItems.some((item) => item.id === data.id)
                      ? ""
                      : "d-none"
                  }`}
                  onClick={() => setGoToCart(true)}
                >
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="SP-banner container d-flex flex-column align-item-center">
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923778/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/AA_gmx58h.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923794/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/B1_mzzaxk.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705995134/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Revised%20A%2B/B2_cyxyef.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705999424/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Revised%20A%2B/B3_jfmsvs.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923787/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/C1_osamfy.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923851/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/C2_efwum6.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923839/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/C3_ffeakr.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923803/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/D1_wwi00a.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923798/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/D2_uoi53x.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923809/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/D3_gshjyr.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705995141/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Revised%20A%2B/E1_diu0cx.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923831/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/E2_itee6b.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705923847/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Oneplus%2012/A%2BContent/Desktop/E3_melam6.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705995149/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Revised%20A%2B/F1_lgevqr.png?tr=w-1024"
          alt
        />
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705995163/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Oneplus/Revised%20A%2B/F2_aljwq2.png?tr=w-1024"
          alt
        />
      </div>
    </div>
  );
};

export default ProductAddCart;
