import React from "react";
import "./CreateSignaturePopup.css";
import { Icon } from "@iconify/react";

function CreateSignaturePopup(props) {
  return (
    <>
      <div className="popupbackground">
        <div className="popupMainBox">
          <div className="popupContent">
            <div className="PopusHeading">Create New Template</div>
            <div className="poppPera">Choose your signature template name</div>
            <div className="popupValidation">
              Must be between 3 and 25 characters max.
            </div>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Signature Template name"
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
