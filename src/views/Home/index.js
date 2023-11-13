// src/App.js
import React from "react";
import AuthPopup from "../../components/Popup/auth";
import Header from "../../components/Header";
import MainContent from "./MainContent";
import Benefit from "./Benefit";
// import Mysigil from "./Mysigil";
import { AuthContext } from "../../context/AuthContext";


const Home = ({updateToken}) => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <br />
      <Benefit /><br />
      {/* <Mysigil /> */}
      <AuthContext.Consumer>
        {({ showPopup }) => showPopup && <AuthPopup updateToken={updateToken} />}
      </AuthContext.Consumer>
    </div>
  );
};

export default Home;
