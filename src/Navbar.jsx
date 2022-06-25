import React from "react";
import './Navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { Route, Routes} from 'react-router-dom';
import { Login } from './Login.jsx';

export function Navbar(){
    return (

       
 
    <div className="header">
    {/* <Link to="/"> */}
      <img
        className="header__logo"
        alt=""
      />
    {/* </Link> */}

    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchIcon className="header__searchIcon" />
    </div>

     
    <div className="header__nav">

    <Link to="/login"> 
      <div className="header__option">
        <span className="header__optionOne">Hello Business Owner</span>
        <span className="header__optionTwo">Sign In</span>
      </div>
    </Link>


      <div className="header__option">
        <span className="header__optionOne">Returns</span>
        <span className="header__optionTwo"> & Orders</span>
      </div>

      <div className="header__option">
        <span className="header__optionOne">Your</span>
        <span className="header__optionTwo">Prime</span>
      </div>

      <div className="header__option">
        <span className="header__optionThree"></span>
      </div>
      {/* <Link to="/checkout"> */}
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionTwo header__basketCount">
            {/* {basket?.length} */}
          </span>
        </div>
      {/* </Link> */}
    </div>
  </div>

    );
}