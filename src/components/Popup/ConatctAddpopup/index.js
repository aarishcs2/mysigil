import React from "react";
import "./index.css";
import { Select } from "antd";

function ContactPopup(props) {
  return (
    <>
      <div className="popupbackground">
        <div className="popupMainBox2">
          <div className="headerPopup">
            <div className="HeaderTitle">Add New Contact</div>
            <div onClick={props.onClose} className="px-2">
              <img src="/images/Close.png" width={18} />
            </div>
          </div>
          <div>
            <div className=" Center">
              <div>
                <input placeholder="First name" className="endinput" />
              </div>
              <div>
                <input placeholder="Last name" className="endinput" />
              </div>
            </div>

            <div className=" Center">
              <div>
                <input placeholder="Phone" className="endinput" />
              </div>
              <div>
                <input placeholder="Email" className="endinput" />
              </div>
            </div>
            <div className="ConatctAddInputDiv">
              <input className="AddContactInput" placeholder="Organization" />
            </div>
            <div className="ConatctAddInputDiv">
              <Select
                className="SelectInterest"
                placeholder="Choose Interest"
                options={[
                  { value: "abc", label: "abc" },
                  { value: "abc", label: "abc" },
                  { value: "abc", label: "abc" },
                  { value: "abc", label: "abc" },
                ]}
              />
            </div>
            <div className="EndContent">
              <div className="titleEnd">Add New Field</div>
              <div className="d-flex gap-3">
                <div>
                  <input placeholder="Enter name field" className="endinput" />
                </div>
                <div>
                  <input placeholder="Enter name field" className="endinput" />
                </div>
              </div>
              <div className="py-3">
                <button onClick={props.onClose} className="SaveButton">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPopup;
