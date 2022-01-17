import React from "react";
import "./Home.css";
import Product from "./Product";
import n  from "./images/n.jpg"
import ale from "./pics/bba/foundation/02-ivory.jpg"
import al from "./pics/bba/foundation/04-cool-natural.jpg"
import a from "./pics/bba/foundation/06-beige.jpg"
import q from "./pics/bba/foundation/07-warm-beige.jpg"
import r from "./pics/bba/foundation/07-warm-beige.jpg"
import l from "./pics/bba/foundation/04-cool-natural.jpg"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={n}
          alt=""
        />
   <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image={a}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image={q}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={al}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={l}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={ale}
          />
        </div>

        <div className="home__row">
          <Product
          image={r}
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Home;