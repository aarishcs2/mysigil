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
    <header>
      <div className="logo">Scribe.</div>
      {!access_token ? (
        <div className="buttons">
          <Button type="link" onClick={() => handleButtonClick("login")}>
            Login
          </Button>
          <Button type="primary" onClick={() => handleButtonClick("register")}>
            Sign up
          </Button>
        </div>
      ) : (
        <div className="buttons">
          <Button type="primary" onClick={() => navigate("/dashboard")}>
            Go to workspace
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
