import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/spynLogo.png";
import "./header.css";
function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-part-left">
        <img src={Logo} className="logo" />
      </div>
      <div className="header-middle">
        <Link to="/booking">მოედნები</Link>
        <div className="demos">
          <p className="demoSports">Tennis Club</p>
          <p className="demoSports">Tennis Academy</p>
          <p className="demoSports">Tennis Courses</p>
        </div>
        <a href="#">კორტის დაჯავშნა</a>
        <a href="#">ახალი დამატებული</a>
        <a href="#">ონლაინ მაღაზია</a>
        <a href="#">შესვლა</a>
      </div>
      <div className="header-part-right">
        <span className="bookdemo-wrapper">
          <Link to="/createBooking" className="bookdemo"></Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
