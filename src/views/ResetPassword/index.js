// src/AuthPopup.js
import { Anchor, Button, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword, verifyToken } from "../../api";
import { AuthContext } from "../../context/AuthContext";
import "./styles.css";

const { Link } = Anchor;
const ResetPassword = () => {
  const { popupType, setPopupType, setShowPopup, setToken } =
  useContext(AuthContext);
  setShowPopup(true);
  let { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [userId, setUserId] = useState("");

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      // <-- Use classList.contains instead of className
      handleClosePopup();
    }
  };

  useEffect(() => {
    const getDataFromToken = async () => {
      const user = await verifyToken({ token });
      if (user?.data?._id) {
        setUserId(user?.data?._id);
      } else {
        toast.error("Link expired");
        navigate("/");
        setPopupType("login");
      }
    };
    getDataFromToken();
  }, []);

  const handleResetPassword = async () => {
    if (password === confirmPassword) {
      const response = await resetPassword({ id: userId, password });
      if (response.status === 200) {
        toast.success("Password successfully updated");
        navigate("/");
        setPopupType("login");
      }
    } else {
      toast.error("Password does not match");
    }
  };

  return (
    <div className="overlay reset-password" onClick={handleOverlayClick}>
      <div className="popup-small p-5 ">
        <h5 className="sub-heading text-center ">Enter New Password</h5>
        <p className="sub-para m-0 text-center">
          Enter your email to receive your reset password link.
        </p>
        <Input.Password
          type="text"
          className="login-input mt-3"
          placeholder="New Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input.Password
          type="text"
          className="login-input mt-3"
          placeholder="Re Enter Your New Password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <div className="d-flex mt-2">
          <Button
            type="primary"
            className="button-login my-2 w-100"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
