import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/Content.css";
import play from "./img/Play.png";
import icon from "./img/icon-1.png";
import icon2 from "./img/icon-2.png";
import icon3 from "./img/icon-3.png";
import icon4 from "./img/icon-4.png";
function MainContent() {
  return (
    <>
      <div className="container-1">
        <div className="title">
          Are you tired of spending endless hours creating and installing email
          signatures for <br />
          your team? Say goodbye to manual email signature management with MY
          SIGIL
        </div>
        <div className="title-1">
          Convert your Dead <br /> Email Signatures into <br /> Revenue Channel
        </div>
        <div class="container">
          <div class="rectangle">
            <img src={play} className="play" alt="play" />
            <img src={icon} className="icon-1" alt="icon" />
            <img src={icon2} className="icon-2" alt="icon" />
            <img src={icon3} className="icon-3" alt="icon" />
            <img src={icon4} className="icon-4" alt="icon" />
          </div>
        </div>
        <div className="container-1">
          <div className="title-2">
            Design, Create install & update Email <br /> signatures across your
            organization in{" "}
            <p style={{ color: "#B741FF" }}>less than 10 minutes</p>
          </div>
          <div className="title-3">
            <p>
              Unlock the Power of Personalized Marketing with <br />
              recipient based marketing banners
            </p>
            <button className="btn-1">TRY IT NOW RISK FREE</button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default MainContent;
