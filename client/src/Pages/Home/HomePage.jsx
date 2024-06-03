import React, { useEffect, useState } from "react";
import "../../App.css";
import HeadBar from "../../Components/Header/HeadBar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Advertisement from "../../Components/Advertisement/AdvertisementSlider.js";
import ProductList from "../../Components/Product/ProductList.js";
import ProductcomList from "../../Components/Product_Component/ProductcomList.js";
import ProductCardSlider from "../../Components/ProductSlider/ProductCardSlider.js";
import dataMap1 from "../../utils/dataMap1.js";
import dataMap2 from "../../utils/dataMap2.js";
import dataMap3 from "../../utils/dataMap3.js";
import dataMap4 from "../../utils/dataMap4.js";
import dataMap5 from "../../utils/dataMap5.js";
import dataMap6 from "../../utils/dataMap6.js";
import dataMap7 from "../../utils/dataMap7.js";
import dataMap8 from "../../utils/dataMap8.js";
import HeroProduct from "../../Components/HeroProduct/HeroProduct.js";
import BrandComponent from "../../Components/BrandCircle/BrandComp.js";
import ProductCardsDesc from "../../Components/ProductCards/ProductCardsDesc.jsx";
import Footer from "../../Components/Footer/Footer.js";
import axios from "axios";
import BankAdvertisement from "../../Components/BankAdvertisement/BankAdvertisement.jsx";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming your backend API is running at
        const response = await axios.get(
          "http://localhost:8000/products/allproducts"
        );
        const data = response.data;
        // Assuming your API response is an array of products
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, e.g., set an error state or show an error message
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <HeadBar />
      <Banner />
      <BankAdvertisement />
      <BrandComponent />
      <Advertisement />
      <ProductList
        products={data.slice(0, 16)}
        title1={"Featured Products"}
        title2={"Popular Products"}
        dataFileName={"dataMap10"}
      />
      <ProductcomList
        data={dataMap1}
        title={"New at Croma"}
        dataFileName={"dataMap1"}
      />
      <ProductCardSlider
        data={dataMap2}
        title={"Exclusive Products"}
        dataFileName={"dataMap2"}
      />
      <ProductcomList
        data={dataMap3}
        title={"Apple in Croma"}
        dataFileName={"dataMap3"}
      />
      <ProductCardSlider
        data={dataMap4}
        title={"Popular Products"}
        dataFileName={"dataMap4"}
      />
      <ProductcomList
        data={dataMap6}
        title={"Exclusive in Croma"}
        dataFileName={"dataMap6"}
      />
      <ProductCardSlider
        data={dataMap5}
        title={"Top Products"}
        dataFileName={"dataMap5"}
      />
      <HeroProduct />
      <BrandComponent />
      <ProductList
        products={data.slice(16, 32)}
        title1={"Laptops"}
        title2={"Exclusive Laptops"}
        dataFileName={"dataMap9"}
      />
      <ProductCardsDesc />
      <ProductcomList
        data={dataMap7}
        title={"Croma Exclusive"}
        dataFileName={"dataMap7"}
      />
      <ProductCardSlider
        data={dataMap8}
        title={"Branded Products"}
        dataFileName={"dataMap8"}
      />

      <Footer />
    </div>
  );
};

export default HomePage;
