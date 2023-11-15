import React from "react";
import "./Css/sigil.css";


import sigil from "./img/Sigil-1.png";
import brand1 from "./img/brand-1.png";
import brand2 from "./img/brand-3.png";
import brand3 from "./img/brand-4.png";


import Card from "./Card"
import Slides from "./Slides"


function Sigil() {
  return (
    <>
      <div className="rectangle-sigil">
        <img src={sigil} alt="Sigil" className="sigil-image" />
        <h1 className="text-1">
          Trusted By <br /> World's Largest <br /> Groups
        </h1>
        <p className="text-2">
          Don't let a lackluster email <br /> signature hold you back!
        </p>
      </div>
      <div className="brand">
        <img src={brand1} alt="" className="brand-icon" />
        <img src={brand2} alt="" className="brand-icon" />
        <img src={brand3} alt="" className="brand-icon" />
      </div>
      <br />
      <div className="rectangle-sigil-1">
        <h1>
          Design Deploy & Update in <br /> less than 10 minutes
        </h1>
        <h3>
          Roll out email signature updates to your whole organization in a few
          simple clicks.
        </h3>
        {/* card */}
        <div>
            <Card />
        </div>
        <div>
          <Slides />
          
        </div>

      
        
      </div>
    </>
  );
}

export default Sigil;
