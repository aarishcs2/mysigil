import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./CreatePopup.css";

function CreatePopup(props) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
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
                onChange={(event) => props?.onChange(event)}
              />
            </div>
            <div className="buttonbox">
              <button disabled={props?.loading} onClick={props.onClose} className="buttonCancel">
                {props?.loading ? <BeatLoader
                  color={"#fff"}
                  loading={props?.loading}
                  cssOverride={override}
                  size={16}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                /> : "Cancel"}
              </button>
              <button disabled={props?.loading} className="buttonCreate" onClick={props?.onSubmit}>     {props?.loading ? <BeatLoader
                color={"#fff"}
                loading={props?.loading}
                cssOverride={override}
                size={16}
                aria-label="Loading Spinner"
                data-testid="loader"
              /> : "Create"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePopup;
