import React, { useContext, useState } from "react";
import "./index.css";
import { Select } from "antd";
import { createContact, updateContact } from "../../../api";
import { AuthContext } from "../../../context/AuthContext";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function ContactViewPopup(props) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [data, setData] = useState(props?.data);
  const [isEmailAdded, setIsEmailAdded] = useState('')
  const { activeWorkSpace } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [organizationError, setOrganizationError] = useState("");
  const [phoneNo, setPhoneNo] = useState(props?.data?.phone);
  const [phoneNoError, setPhoneNoError] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props?.data?.interest);
  const [selectedOptionError, setSelectedOptionError] = useState(null);

  return (
    <>
      <div className="popupbackground">
        <div className="popupMainBox2">
          <div className="headerPopup">
            <div className="HeaderTitle">View Contact</div>
            <div onClick={props.onClose} className="px-2">
              <img src="/images/Close.png" width={18} />
            </div>
          </div>
          <div>
            <div className=" Center">
              <div>
                <div className="endinput">{data?.firstname} fname</div>
              </div>
              <div>
                <div className="endinput">{data?.lastname} lname</div>
              </div>
            </div>

            <div className=" Center">
              <div>
                <div className="endinput">{phoneNo} phone</div>
              </div>
              <div>
                <div className="endinput">{data?.email} email</div>
              </div>
            </div>
            <div className=" Center">
              <div className="ConatctAddInputDiv p-0">
                <div className="endinput">
                  {data?.organization} organization
                </div>
              </div>
              <div className="ConatctAddInputDiv p-0">
                <div className="endinput">{selectedOption} con</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactViewPopup;
