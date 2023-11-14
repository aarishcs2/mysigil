// src/Header.js
import React, { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../context/AuthContext";
import "../style/style.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const { setShowPopup, setPopupType, token } = useContext(AuthContext);
  const access_token = localStorage.getItem("access_token") ?? token;
  const navigate = useNavigate();
  const handleButtonClick = (type) => {
    setShowPopup(true);
    setPopupType(type);
  };
  return (
    <header className="header">
      <>
        {/* logo */}
        <div className="logo">
          <img src={''} alt="logo" />
        </div>

        {/* Tab */}
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
          {!access_token ? (
            <>
              <Button className="btn1" onClick={() => handleButtonClick("login")}>LOG IN </Button>
              <Button className="btn2" onClick={() => handleButtonClick("register")}>SIGN UP</Button>
            </>
          ) : (
            <Button type="primary" onClick={() => navigate("/dashboard")}>
              Go to workspace
            </Button>
          )}
        </div>
      </>
    </header>
  );
}

export default Header;
