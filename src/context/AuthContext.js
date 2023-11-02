// src/context/AuthContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("register");

  const values = {
    setShowPopup,
    showPopup,
    popupType,
    setPopupType,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
