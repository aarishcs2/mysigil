// src/AuthPopup.js
import { Anchor, Button, Input } from "antd";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../api";
import { AuthContext } from "../../context/AuthContext";
import "./styles.css";
import { emailRegex } from "../../constant/common";
import { toast } from "react-toastify";
const { Link } = Anchor;

const ForgotPassword = () => {
  const { popupType, setPopupType, setShowPopup, setToken } =
    useContext(AuthContext);
  setShowPopup(true);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      // <-- Use classList.contains instead of className
      handleClosePopup();
    }
  };

  const handleForgotPassword = async () => {
    if (!emailRegex.test(email)) {
      toast.error("Enter valid Email");
    } else {
      const response = await forgotPassword({ email });
      if (response.status === 200) {
        navigate("/mail-checking");
      }
    }
  };
  return (
    <div className="overlay forgot-popup" onClick={handleOverlayClick}>
      <div className="popup-small p-5 ">
        <h5 className="sub-heading text-center ">Forgot Password?</h5>
        <p className="sub-para m-0 text-center">
          Enter your email to receive your reset password link.
        </p>
        <Input
          type="text"
          className="login-input mt-3"
          placeholder="Your Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="d-flex">
          <Button
            type="primary"
            className="login-google my-2 w-100 me-2"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            className="button-login my-2 w-100 "
            onClick={handleForgotPassword}
          >
            Send Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
