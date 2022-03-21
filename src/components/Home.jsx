// Modules Import
import React from "react";
import { v4 as uuid } from "uuid";

// Files Import
import Product from "./Product";

// Styles Import
import "../Styles/Home.css";

export default function Home() {
  const unique_id = uuid();
  const unique_id1 = unique_id.slice(0, 8);
  const unique_id2 = unique_id.slice(8, 16);
  const unique_id3 = unique_id.slice(16, 24);
  const unique_id4 = unique_id.slice(24, 32);
  const unique_id5 = unique_id.slice(25, 36);
  const unique_id6 = unique_id.slice(27, 39);
  const unique_id7 = unique_id.slice(30, 40);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Background"
        />
        <div className="home__row">
          <Product
            id={unique_id}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            key={unique_id1}
          />
          <Product
            id={unique_id1}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            key={unique_id2}
          />
        </div>

        <div className="home__row">
          <Product
            id={unique_id2}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            key={unique_id3}
          />
          <Product
            id={unique_id3}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            key={unique_id4}
          />
          <Product
            id={unique_id5}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            key={unique_id6}
          />
        </div>

        <div className="home__row">
          <Product
            id={unique_id6}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            key={unique_id7}
          />
        </div>
      </div>
    </div>
  );
}
