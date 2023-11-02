// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("register");

  const handleButtonClick = (type) => {
    setShowPopup(true);
    setPopupType(type);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <AuthContext.Provider value={{ showPopup, popupType, setPopupType, handleButtonClick, handleClosePopup }}>
      {children}
    </AuthContext.Provider>
  );
};
