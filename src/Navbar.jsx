import React from "react";
import './Navbar.css';
import { LoginBTN } from './LoginBTN';

export function Navbar(){
    return (

       
 
    <div className="header">
    {/* <Link to="/"> */}
      
    {/* </Link> */}

    <div className="header__search">
      <input className="header__searchInput" type="text" placeholder="White your City..."/>
    
    </div>

     
    <div className="header__nav">
    <LoginBTN /> 


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
       
          <span className="header__optionTwo header__basketCount">
            {/* {basket?.length} */}
          </span>
        </div>
      {/* </Link> */}
    </div>
  </div>

    );
}


