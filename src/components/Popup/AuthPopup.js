// src/AuthPopup.js
import React, { useContext } from "react";
import "./AuthPopup.css";
import { Button, Anchor, Flex, Input } from "antd";
import { AuthContext } from "../../context/AuthContext";
import GoogleLoginButton from "../GoogleLoginButton";

const { Link } = Anchor;

const AuthPopup = ({updateToken}) => {
  const { popupType, setPopupType, setShowPopup } = useContext(AuthContext);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      // <-- Use classList.contains instead of className
      handleClosePopup();
    }
  };

  const handleAnchorClick = (e, link) => {
    e.preventDefault();
    if (link.title === "Register") {
      setPopupType("register");
    } else if (link.title === "Login") {
      setPopupType("login");
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="popup">
        <div className="tabs" style={{ paddingBottom: "16px" }}>
          {" "}
          {/* Adjusted this line */}
          <Anchor
            affix={false}
            onClick={handleAnchorClick}
            style={{ width: "100%" }}
          >
            <Flex justify="space-around" style={{ width: "100%" }}>
              <Link
                href="#register"
                title="Register"
                className={popupType === "register" ? "active" : ""}
                style={{ width: "50%", textAlign: "center" }}
              />
              <Link
                href="#login"
                title="Login"
                className={popupType === "login" ? "active" : ""}
                style={{ width: "50%", textAlign: "center" }}
              />
            </Flex>
          </Anchor>
        </div>
        <Flex gap="small" wrap="wrap" style={{ height: "100%" }}>
          <GoogleLoginButton />
          <div style={{ width: "100%", textAlign: "center" }}>
            {" "}
            {/* Adjusted this line */}
            <div>or</div>
          </div>
        </Flex>
        <Input
          className="input"
          type="email"
          placeholder="john.doe@companyname.com"
        />
        <Input.Password className="input" placeholder="6 characters minimum" />
        <Flex direction="column" gap="small" style={{ width: "100%" }}>
          {" "}
          {/* Adjusted this line */}
          <Button
            type="primary"
            className="button primary"
            block // <-- Add this prop to make the button full-width
          >
            {popupType === "register" ? "Register" : "Login"}
          </Button>
          <Button
            type="primary"
            onClick={() =>
              setPopupType(popupType === "register" ? "login" : "register")
            }
            block // <-- Add this prop to make the button full-width
          >
            {popupType === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default AuthPopup;
