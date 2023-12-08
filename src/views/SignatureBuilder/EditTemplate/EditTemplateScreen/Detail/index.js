import React from "react";
import "./index.css";

function Detail() {
  return (
    <div className="d-flex">
      <div className="DetailMain">
        <div className="SignatureDetail">Signature Details</div>
        <div className="Circle">
          <div className="text-center">
            <img src="/images/arrow.png" alt="" />
            <div className="ProfilePicture">Profile Picture</div>
          </div>
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Name" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Title" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Company" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Phone" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Mobile" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Website" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Email" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Adress" />
        </div>
        <div className="AddTxtbox">
          <div className="CircleButton">
            <img src="/images/PlusIcon.png" />
          </div>
          <div className="AddTxt">Add Text</div>
        </div>
      </div>
      <div className="mainScreen"></div>
    </div>
  );
}

export default Detail;
