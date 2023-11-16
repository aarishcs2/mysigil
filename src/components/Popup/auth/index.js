// src/AuthPopup.js
import React, { useContext, useState } from "react";
import "./styles.css";
import { Button, Anchor, Flex, Input } from "antd";
import { AuthContext } from "../../../context/AuthContext";
import GoogleLoginButton from "../../GoogleLoginButton";
import { accountLogin, accountRegister } from "../../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import { emailRegex } from "../../../constant/common";

const { Link } = Anchor;

const AuthPopup = () => {
  const { popupType, setPopupType, setShowPopup, setToken } =
    useContext(AuthContext);
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
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

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!emailRegex.test(email)) {
        toast("Enter valid email address");
        setLoading(false);
      } else if (password.length < 6) {
        toast("Enter valid password");
        setLoading(false);
      } else {
        const data = { email, password };
        if (popupType === "login") {
          const response = await accountLogin(data);
          if (response?.data?.token) {
            toast("Account Logged");
            localStorage.setItem("access_token", response?.data?.token);
            setToken(true);
            setLoading(false);
            navigate("/dashboard");
          } else {
            toast(response?.data?.message);
            setLoading(false);
          }
        } else {
          const response = await accountRegister(data);
          if (response?.data?.status) {
            toast("Account Registered");
            setLoading(false);
            setPopupType("login");
          } else {
            toast(response?.data?.message);
            setLoading(false);
          }
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="popup">
        <div className="tabs" style={{ paddingBottom: "16px" }}>
          {/* Adjusted this line */}
          <Anchor
            affix={false}
            onClick={handleAnchorClick}
            style={{ width: "100%" }}
          >
            <Flex justify="space-around" style={{ width: "100%" }}>
              <Link
                to="#register"
                title="Register"
                className={popupType === "register" ? "active" : ""}
                style={{ width: "50%", textAlign: "center" }}
              />
              <Link
                to="#login"
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
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input.Password
          className="input"
          placeholder="6 characters minimum"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Flex direction="column" gap="small" style={{ width: "100%" }}>
          {" "}
          {/* Adjusted this line */}
          <Button
            type="primary"
            className="button primary"
            onClick={handleSubmit}
            block
            disabled={loading}
          >
            {loading ? (
              <BeatLoader
                color={"#fff"}
                loading={loading}
                cssOverride={override}
                size={16}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : popupType === "register" ? (
              "Register"
            ) : (
              "Login"
            )}
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
