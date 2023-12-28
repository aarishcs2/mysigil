import React, { useContext, useState } from "react";
import "./index.css";
import { Select } from "antd";
import { createContact, updateContact } from "../../../api";
import { AuthContext } from "../../../context/AuthContext";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function ContactPopup(props) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [data, setData] = useState(props?.data);
  const { activeWorkSpace } = useContext(AuthContext);
   const [nameError, setNameError] = useState("");
   const [lastNameError, setLastNameError] = useState("");
   const [organizationError, setOrganizationError] = useState("");
   const [phoneNo, setPhoneNo] = useState("");
   const [phoneNoError, setPhoneNoError] = useState("");
  const [validEmail, setValidEmail] = useState(false);
   const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionError, setSelectedOptionError] = useState(null);
  const handleCreate = async () => {
    if (activeWorkSpace) {
      if (
        !data.firstname ||
        data.firstname.length < 3 ||
        data.firstname.length > 25
      ) {
        setNameError(
          "First Name should be a minimum of 3 letters and a maximum of 25 characters."
        );
      } else if (
        !data.lastname ||
        data.lastname.length < 3 ||
        data.lastname.length > 25
      ) {
        setLastNameError(
          "Last Name should be a minimum of 3 letters and a maximum of 25 characters."
        );
      } else if (
        !data.organization ||
        data.organization.length < 3 ||
        data.organization.length > 25
      ) {
        setOrganizationError(
          "Organization should be a minimum of 3 letters and a maximum of 25 characters."
        );
      } else if (!phoneNo) {
        setPhoneNoError(" Enter Phone Number");
      } else if (!selectedOption) {
        setSelectedOptionError("Select Interest");
      } else if (emailRegex.test(data?.email) || !data.email) {
        setValidEmail(true);
      } else {
        let respomse;
        if (data?._id) {
          respomse = await updateContact(data?._id, data);
        } else {
          respomse = await createContact({
            ...data,
            workspace: activeWorkSpace.id,
          });
        }
        if (respomse) {
          props.onClose();
          setData({});
        }
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
                <input
                  onChange={handleChange}
                  value={data?.firstname}
                  name="firstname"
                  placeholder="First name"
                  className={`endinput ${nameError && "border-danger"}`}
                />
                <br />
                <small className="text-danger">
                  {" "}
                  {nameError && nameError}{" "}
                </small>
              </div>
              <div>
                <input
                  onChange={handleChange}
                  value={data?.lastname}
                  name="lastname"
                  placeholder="Last name"
                  className={`endinput ${lastNameError && "border-danger"}`}
                />
                <br />
                <small className="text-danger">
                  {" "}
                  {lastNameError && lastNameError}{" "}
                </small>
              </div>
            </div>

            <div className=" Center">
              <div>
                {/* <input
                  onChange={handleChange}
                  value={data?.phone}
                  name="phone"
                  placeholder="Phone"
                  className="endinput"
                /> */}
                <PhoneInput
                  value={phoneNo}
                  onChange={setPhoneNo}
                  className={`endinput ${phoneNoError && "border-danger"}`}
                />
                {phoneNoError && (
                  <small className="text-danger">{phoneNoError}</small>
                )}
              </div>
              <div>
                <input
                  onChange={handleChange}
                  value={data?.email}
                  name="email"
                  placeholder="Email"
                  className={`endinput ${validEmail && "border-danger"}`}
                />
                {validEmail && (
                  <small className="text-danger">
                    Please enter a valid email address.
                  </small>
                )}
              </div>
            </div>
            <div className="ConatctAddInputDiv">
              <input
                onChange={handleChange}
                value={data?.organization}
                name="organization"
                className="AddContactInput"
                placeholder="Organization"
              />
              <br />
              <small className="text-danger">
                {" "}
                {organizationError && organizationError}{" "}
              </small>
            </div>
            <div className="ConatctAddInputDiv">
              <Select
                className="SelectInterest"
                placeholder="Choose Interest"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e)}
                options={[
                  { value: "Marketing", label: "Marketing" },
                  { value: "Seo", label: "Seo" },
                  { value: "Design", label: "Design" },
                  { value: "Production", label: "Production" },
                  { value: "HR", label: "HR" },
                  { value: "Sales", label: "Sales" },
                  { value: "Accounts", label: "Accounts" },
                  {
                    value: "Business Development",
                    label: "Business Development",
                  },
                ]}
              />
              <br />
              <small className="text-danger">
                {" "}
                {selectedOptionError && selectedOptionError}{" "}
              </small>
            </div>
            <div className="EndContent">
              {/* <div className="titleEnd">Add New Field</div>
              <div className="d-flex gap-3">
                <div>
                  <input placeholder="Enter name field" className="endinput" />
                </div>
                <div>
                  <input placeholder="Enter name field" className="endinput" />
                </div>
              </div> */}
              <div className="py-3">
                <button onClick={handleCreate} className="SaveButton">
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
