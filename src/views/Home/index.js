// src/App.js
import React from "react";
import AuthPopup from "../../components/Popup/AuthPopup";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <AuthContext.Consumer>
        {({ showPopup }) => showPopup && <AuthPopup />}
      </AuthContext.Consumer>
    </div>
  );
};

export default Home;
