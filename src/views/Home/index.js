// src/App.js
import React from "react";
import AuthPopup from "../../components/Popup/auth";
import Header from "./Header";
import MainContent from "./MainContent";
import Benefit from "./Benefit";
import Sigil from "./Sigil.js"
// import Footer from "./Footer.js"
import { AuthContext } from "../../context/AuthContext";


const Home = ({updateToken}) => {
  return (
    <div>
      <Header />
      <MainContent />
      <Benefit />
      <Sigil /> 

      {/* <Footer /> */}
      <AuthContext.Consumer>
        {({ showPopup }) => showPopup && <AuthPopup updateToken={updateToken} />}
      </AuthContext.Consumer>
    </div>
  );
};

export default Home;
