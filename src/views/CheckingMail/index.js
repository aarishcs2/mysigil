// src/AuthPopup.js
import { Icon } from "@iconify/react";
import { Anchor, Button, Checkbox, Input } from "antd";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./styles.css";
import { NavLink } from "react-router-dom";
const { Link } = Anchor;

const MailChecking = () => {
  const { popupType, setPopupType, setShowPopup, setToken } =
    useContext(AuthContext);
  setShowPopup(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      // <-- Use classList.contains instead of className
      handleClosePopup();
    }
  };

  return (
    <div className="overlay check-mail" onClick={handleOverlayClick}>
      <div className="popup-small p-5 ">
        <h5 className="sub-heading text-center ">Check Your Mail</h5>
        <p className="sub-para m-0 text-center mt-2">
          We have sent Password Reset Instruction to your email.
        </p>

        <div className="d-flex mt-2">
          <Button type="primary" className="button-login my-2 w-100 ">
            <NavLink
              to="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
            >
              Open Email App
            </NavLink>
          </Button>
        </div>
        <p className="sub-para m-0 text-center">
          <span className="forgot-text" onClick={() => setPopupType("login")}>
            <NavLink to="/"> Sign in</NavLink>{" "}
          </span>
          , I will confirm latter.
        </p>
      </div>
    </div>
  );
};

export default MailChecking;
