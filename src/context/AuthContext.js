// src/context/AuthContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("register");
  const [token, setToken] = useState(false);
  const [activeWorkSpace, setActiveWorkSpace] = useState({})

  const values = {
    setShowPopup,
    showPopup,
    popupType,
    setPopupType,
    token,
    setToken,
    activeWorkSpace,
    setActiveWorkSpace
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
