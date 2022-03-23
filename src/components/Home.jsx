// Modules Import
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { v4 as uuid } from "uuid";

// Files Import
import Product from "./Product";
import Footer from "./Footer";

// Styles Import
import "../Styles/Home.css";

function Home() {
  const unique_id = uuid();

  const images = [
    { url: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    },
    { url: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/610RCu7M6KL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61E5kXacANL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/618B1HnAxLL._SX3000_.jpg" },
  ];

  return (
    <div className="home" id="home">
      <div className="home__container">
        <SimpleImageSlider
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          height={400}
          width={"100%"}
          style={{ zIndex: "-1" }}
        />
        <div className="home__row">
          <Product
            id={unique_id}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id={unique_id}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={unique_id}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id={unique_id}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id={unique_id}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={unique_id}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={unique_id}
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={294}
            rating={5}
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UL320_.jpg"
          />
          <Product
            id={unique_id}
            title="Apple iPhone 12 Pro Max, 512GB, Pacific Blue - Unlocked (Renewed Premium)"
            price={1089}
            rating={3}
            image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX679_.jpg"
          />
          <Product
            id={unique_id}
            title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Gray"
            price={2499}
            rating={3}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SX466_.jpg"
          />
          <Product
            id={unique_id}
            title="SAMSUNG Galaxy Buds Pro, Bluetooth Earbuds, True Wireless, Noise Cancelling, Charging Case, Quality Sound, Water Resistant, Phantom Black (US Version)"
            price={129.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31DhF-MYS-L._AC_SR400,600_.jpg"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
