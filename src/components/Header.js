// src/Header.js
import React, { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../context/AuthContext";
import "../views/Home/style.css";
import logo from "../views/Home/img/logo.png";
function Header() {
  const { setShowPopup, setPopupType } = useContext(AuthContext);
  // const access_token = localStorage.getItem("access_token") ?? token;
  const handleButtonClick = (type) => {
    setShowPopup(true);
    setPopupType(type);
  };
  return (
    <header className="header">
      <>
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Tab  */}
      <div className="tab">
        <ul className="home">
          <li>
            <a href="/" onClick={() => ('HOME')}>HOME</a>
          </li>
          <li>
            <a href="/" onClick={() => ('MYSIGIL')}>MYSIGIL</a>
          </li>
          <li>
            <a href="/" onClick={() => ('COMMUNITY')}>COMMUNITY</a>
          </li>
          <li>
            <a href="/" onClick={() => ('PLANS')}>PLANS</a>
          </li>
        </ul>
      </div>

      {/* Button */}

      <div className="Btn-Header">
        <Button className="btn1" onClick={() => handleButtonClick("login")}>LOG IN </Button>
        <Button className="btn2" onClick={() => handleButtonClick("register")}>SIGN UP</Button>
      </div>
</>
    </header>
  );
}

export default Header;
