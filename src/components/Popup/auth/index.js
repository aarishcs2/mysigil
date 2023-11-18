// src/AuthPopup.js
import { Icon } from "@iconify/react";
import { Anchor, Button, Checkbox, Input } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { accountLogin, accountRegister } from "../../../api";
import Account from "../../../assets/Images/account.png";
import Login from "../../../assets/Images/login.png";
import { emailRegex } from "../../../constant/common";
import { AuthContext } from "../../../context/AuthContext";
import "./styles.css";
const { Link } = Anchor;

const AuthPopup = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const { popupType, setPopupType, setShowPopup, setToken } =
    useContext(AuthContext);
  const [email, setEmail] = useState();
  const [name, setName] = useState("");
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

  // const handleAnchorClick = (e, link) => {
  //   e.preventDefault();
  //   if (link.title === "Register") {
  //     setPopupType("register");
  //   } else if (link.title === "Login") {
  //     setPopupType("login");
  //   }
  // };

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
          const data = { email, password ,username: name};
          if(name.length === 0){
            toast("Enter valid user name");
            setLoading(false);
          }
          else{
            const response = await accountRegister(data);
            if (response?.data?.token) {
              toast("Account Registered");
              localStorage.setItem("access_token", response?.data?.token);
              setToken(true);
              setLoading(false);
              navigate("/dashboard");
            } else {
              toast(response?.data?.message);
              setLoading(false);
            }
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
        <div className="row p-2 pe-4">
          <div className="col-md-6 right-side px-5 py-3">
            <div className="order-1">
              <div className="w-100 ">
                {" "}
                <h2 className="main-heading m-0">SIGIL</h2>
              </div>
              <h5 className="sub-heading ">
                {" "}
                {popupType === "register"
                  ? "Start Your 14 Days FREE Trial"
                  : "Log in to your Account"}
              </h5>
              <p className="sub-para m-0 ">
                {popupType === "register"
                  ? "No credit card required. No commitment. No fine print."
                  : "Welcome back! Select method to log in:"}
              </p>
            </div>
            <div className={popupType === "login" ? "order-4" : "order-2"}>
              {popupType === "register" && (
                <Input
                  className="input login-input"
                  type="text"
                  placeholder="Your Name"
                  onChange={(event) => setName(event.target.value)}
                />
              )}
              <Input
                className="input login-input"
                type="email"
                placeholder="Your Work Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input.Password
                className="input login-input"
                placeholder="Choose Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              {popupType === "login" && (
                <div className="d-flex justify-content-between w-100 mt-2">
                  <div>
                    <Checkbox onChange={onChange}>
                      <p className="sub-para m-auto">Remember me?</p>
                    </Checkbox>
                  </div>
                  <div className="forgot-text">Forgot Password?</div>
                </div>
              )}
              <Button
                type="primary"
                className="button-login mb-2"
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
                  "Start"
                ) : (
                  "Login"
                )}
              </Button>
            </div>
            <div className="w-100 order-3 py-4 text-center position-relative">
              <div className=" bottom-line"></div>
              <span className="or mb-0">
                {" "}
                {popupType === "register" ? "Or" : "or continue with email"}
              </span>
            </div>
            <div className={popupType === "login" ? "order-2" : "order-4"}>
              {popupType === "register" && (
                <p className="sub-para m-auto text-center ">
                  Make sure you signup with work email only
                </p>
              )}
              <Button
                type="primary"
                className="login-google my-2 "
                onClick={handleSubmit}
                block
                disabled={loading}
              >
                <Icon icon="flat-color-icons:google" />
                {popupType === "register"
                  ? " Sign up with Google"
                  : "Sign in with Google"}
              </Button>
              {popupType === "register" && (
                <p className="sub-para m-auto mt-1 ">
                  By signing up you agree with{" "}
                  <Link to="" className="u-line">
                    Terms
                  </Link>{" "}
                  of use and &nbsp;
                  <Link to="" className="u-line">
                    {" "}
                    Privacy Policy
                  </Link>
                </p>
              )}{" "}
            </div>
            <p className="sub-para m-auto mt-1 order-5">
              {popupType === "register" ? (
                <>
                  Already have an account?{" "}
                  <span className="u-blue" onClick={()=> setPopupType("login")}>
                    Login{" "}
                  </span>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <span className="u-blue" onClick={()=> setPopupType("register")}> Create an account</span>
                </>
              )}
            </p>
          </div>
          <div className="col-md-6 left-side ">
            <img
              src={popupType === "register" ? Account : Login}
              className="login-img"
              alt="here"
            ></img>
            <h2 className="login-heading mb-2 mt-3">
              {" "}
              {popupType === "register"
                ? "Welcome to Sigil"
                : "Convert your Dead Email Signatures into Revenue Channel"}
            </h2>
            <p className="login-para">
              {" "}
              {popupType === "register"
                ? "  Instant, Effortless, and Impactful"
                : "Effortlessly set up your team's signatures.Quick, automated, and straightforward."}
            </p>
          </div>
        </div>
        {/* <div className="tabs" style={{ paddingBottom: "16px" }}>
       
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
        </div> */}
        {/* <Flex gap="small" wrap="wrap" style={{ height: "100%" }}>
          <GoogleLoginButton />
          <div style={{ width: "100%", textAlign: "center" }}>
            {" "}
         
            <div>or</div>
          </div>
        </Flex> */}
        {/* <Input
          className="input"
          type="email"
          placeholder="john.doe@companyname.com"
          onChange={(event) => setEmail(event.target.value)}
        /> */}
        {/* <Input.Password
          className="input"
          placeholder="6 characters minimum"
          onChange={(event) => setPassword(event.target.value)}
        /> */}
        {/* <Flex direction="column" gap="small" style={{ width: "100%" }}>
          {" "}
          
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
              ? "Already have an account? Login "
              : "Don't have an account? Sign Up"}
          </Button>
        </Flex> */}
      </div>
    </div>
  );
};

export default AuthPopup;
