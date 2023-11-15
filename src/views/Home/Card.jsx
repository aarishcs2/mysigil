import React from "react";
import "./Css/sigil.css";
import Setup from "./img/card-1.png";
import Design from "./img/card-2.png";
import Deploy from "./img/card-3.png";
import update from "./img/card-4.png";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-img" />
      <div className="card-text">{title}</div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <>
      <div className="card-container">
        <Card imageSrc={Setup} title="Setup" />
        <Card imageSrc={Design} title="Design" />
        <Card imageSrc={Deploy} title="Deploy" />
        <Card imageSrc={update} title="Update" />
      </div>
    </>
  );
};



export default CardContainer;
