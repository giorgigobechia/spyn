import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/spynLogo.png";
import { AiOutlineMenu } from "react-icons/ai";
import "./header.css";
import { Button, Drawer } from "antd";

function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
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
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="sider-content">
          <div className="sider-content-text">
            <Link to="/booking">მოედნები</Link>
            <a href="#">კორტის დაჯავშნა</a>
            <a href="#">ახალი დამატებული</a>
            <a href="#">ონლაინ მაღაზია</a>
            <Link to="/createBooking">სტადიონის დამატება</Link>
          </div>
          <div className="sider-content-buttons">
            <button className="sider-sign-up">რეგისტრაცია</button>
            <button className="sider-sign-in">შესვლა</button>
          </div>
        </div>
      </Drawer>
      <div className="header-part-right">
        <span className="bookdemo-wrapper">
          <Link to="/createBooking" className="bookdemo"></Link>
        </span>
      </div>
      <Button type="primary" onClick={showDrawer} className="open-sider">
        <AiOutlineMenu />
      </Button>
    </div>
  );
}

export default Header;
