import React from "react";
import "./Css/Benefit.css";
import dot from "./img/Ellipse 44.svg";
function Benefit() {
  return (
    <>
      <div className="container-2">
        <p className="Benefit-text"> BENIFITS</p>

        <div className="Rectangle-Benfit">
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Update Email signatures in 1 click.
          </p>{" "}
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Integrates with your email provide.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Transform your Email signature into a powerful marketing channel.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Responsive signatures on both desktop and mobile.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Maintain brand uniformity & Design.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            30 + Email signature templates made by experienced UI Designers.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Convert your email signature into a marketing channel.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Create different departments and update their email signatures
            dynamically with department relevant banners & CTA’s.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Show the relevant signature banner to the right audience.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Sync your contact list and turn them into targetable interest
            groups.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Add CTA buttons directly in your email signatures.
          </p>
          <p className="text-style">
            {" "}
            <img src={dot} alt="dot" />
            Keep your legal disclaimers & Sign off’s consistent.
          </p>
          {/* <p className="text-style">   <img src={dot} alt="dot" />Add marketing banners in your email signatures.</p> */}
        </div>
      </div>
    </>
  );
}

export default Benefit;
