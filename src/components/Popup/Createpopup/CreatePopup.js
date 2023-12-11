import React from "react";
import "./CreatePopup.css";
import { Icon } from "@iconify/react";

function CreateSignaturePopup(props) {
  return (
    <>
      <div className="popupbackground">
        <div className="popupMainBox">
          <div className="popupContent">
            <div className="PopusHeading">{props.popupheading}</div>
            <div className="poppPera">{props.popuspera}</div>
            <div className="popupValidation">
              Must be between 3 and 25 characters max.
            </div>
            <div>
              <input
                className="input"
                type="text"
                placeholder={props.popusinputplaceholdername}
              />
            </div>
            <div className="buttonbox">
              <button onClick={props.onClick} className="buttonCancel">
                Cancel
              </button>
              <button className="buttonCreate">Create</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSignaturePopup;
