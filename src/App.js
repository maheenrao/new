import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Footer from "./Footer"
import Product from "./Product";
import CheckoutProduct from "./CheckoutProduct";

function App() {
  return (
    <div className="app">
      <Router>
  
        <Switch>

        <Route path="/product">
        <Product/>
        </Route>
       
        <Route path="/checkout">
        <Header />
            <Checkout/>
          </Route>
          <Route path="/checkoutproduct">
          
        <Header/>
            <CheckoutProduct/>

          </Route>

        
          <Route path="/">
            <Header/>
            <Home />
          </Route>
          <Footer/>
        </Switch>
      </Router>
      <Footer/>
    </div>
    
  );
}
export default App;
