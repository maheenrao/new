import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {ReactNavbar} from "overlay-navbar"
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { useStateValue } from "./StateProvider";

function Header() {  
  const [{ basket, user }, dispatch] = useStateValue();
  
  <h1>AIM STORE</h1>

  return (
   
    <div className="header">
       <ReactNavbar 
       burgerColorHove= "#eb4034"
 text1="AIM STORE"
  logoWidth="20vmax"
  navColor1="white"
  logoHoverSize="10px"
  logoHoverColor= "#eb4034"
  link1Text="Home"
  link2Text="Products"
  link3Text= "Contact"
  link4Text= "About"
  link1Url= "/"
  link2Url="/products"
  link3Url= "/contact"
  link4Url="/about"
  link1Size= "1.3vmax"
  link1Color ="rgba(35, 35, 35,0.8)"
  nav1justifyContent="flex-end"
  nav2justifyContent="flex-end"
  nav3justifyContent="flex-start"
  nav4justifyContent="flex-start"
  link1ColorHover= "#eb4034"
  link1Margin="1vmax"
  profileIconUrl="/login"
  profileIconColor="rgba(35, 35, 35,0.8)"
  searchIconColor="rgba(35, 35, 35,0.8)"
  cartIconColor="rgba(35, 35, 35,0.8)"
  profileIconColorHover="#eb4034"
  searchIconColorHover="#eb4034"
  cartIconColorHover="#eb4034"
  cartIconMargin= "1vmax"/>
        <img
          className="header__logo"
          src=""
        />
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* <SearchIcon className="header__searchIcon" /> */}
      </div>

      <div className="header__nav"> 
       
     
           
          {/* <div className={"button"}>
            <span className="header__optionLineOne">Orders</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
         */}
          {/* <div className="button">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div> */}
          <Link to="/checkout">
          <div className="button">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
   </div>
  );
}
export default Header;
