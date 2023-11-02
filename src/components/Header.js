// src/Header.js
import React, { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../context/AuthContext";
import '../style/style.css'
function Header() {
  const { setShowPopup, setPopupType } = useContext(AuthContext);

  const handleButtonClick = (type) => {
    setShowPopup(true);
    setPopupType(type);
  };
  return (
    <header>
      <div className="logo">Scribe.</div>
      <div className="buttons">
        <Button type="link" onClick={() => handleButtonClick("login")}>
          Login
        </Button>
        <Button type="primary" onClick={() => handleButtonClick("register")}>
          Sign up
        </Button>
      </div>
    </header>
  );
}

export default Header;
