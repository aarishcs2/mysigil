import { ArrowLeftOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { useContext, useState } from "react";
import Image from "../../../assets/Images/default.jpeg";
import { createCoWorker } from "../../../api";
import { AuthContext } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
function AddProfile() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [data, setData] = useState({});
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [jobpositionError, setJobpositionError] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const { activeWorkSpace } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (event) => {
    
    data[event.target.name] = event.target.value;
    setData(data);
  };
  const handleSubmit = async () => {
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
      !data.jobposition ||
      data.jobposition.length < 3 ||
      data.jobposition.length > 25
    ) {
      setJobpositionError(
        "Job position should be a minimum of 3 letters and a maximum of 25 characters."
      );
    } else if (!phoneNo) {
      setPhoneNoError(" Enter Phone Number");
    } else if (emailRegex.test(data?.email) || !data.email) {
      setValidEmail(true);
    } else {
      const response = await createCoWorker({
        ...data,
        workspace: activeWorkSpace?.id,
      });
      if (response) {
        toast.success("Coworker added succesfully");
        navigate("/dashboard/co-worker");
      }
    }
  };
  return (
    <div className="bg-light-gray p-3">
      <div>
        {" "}
        <Link to="/dashboard/co-worker">
          {" "}
          <span className="back-arrow">
            <ArrowLeftOutlined />
          </span>{" "}
        </Link>
        <img src={Image} className="profile-image mx-2" />{" "}
        <div className="row mt-5">
          <div className="col-12">
            <div className="scroll-y p-3">
              <p className=" py-2 down-para">​ Profile Picture</p>{" "}
              <label className="profile-image-lable" htmlFor="pic">
                <ArrowUpOutlined />
              </label>
              <input
                type="file"
                className="profile-input mb-2"
                id="pic"
                hidden
              />
              <div className="row mt-3">
                <div className="col-6">
                  <label className="profile-lable">First Name</label>
                  <input
                    name="firstname"
                    onChange={handleChange}
                    type="text"
                    className={`profile-input mb-2 px-2 ${
                      nameError && "border-danger"
                    }`}
                  />
                  <small className="text-danger">
                    {" "}
                    {nameError && nameError}{" "}
                  </small>
                </div>
                <div className="col-6">
                  <label className="profile-lable">Last Name</label>
                  <input
                    name="lastname"
                    onChange={handleChange}
                    type="text"
                    className={`profile-input mb-2 px-2 ${
                      lastNameError && "border-danger"
                    }`}
                  />
                  <small className="text-danger">
                    {" "}
                    {lastNameError && lastNameError}{" "}
                  </small>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-4">
                  <label className="profile-lable">Job Position</label>
                  <input
                    name="jobposition"
                    onChange={handleChange}
                    type="text"
                    className={`profile-input mb-2 px-2 ${
                      jobpositionError && "border-danger"
                    }`}
                  />
                  <small className="text-danger">
                    {" "}
                    {jobpositionError && jobpositionError}{" "}
                  </small>
                </div>
                <div className="col-4">
                  <label className="profile-lable">Work Phone Number</label>
                  {/* <input
                    name="phone"
                    onChange={handleChange}
                    type="text"
                    className="profile-input mb-2 px-2"
                  /> */}
                  <PhoneInput
                    value={phoneNo}
                    onChange={setPhoneNo}
                    className={`profile-input mb-2 px-2 ${
                      phoneNoError && "border-danger"
                    }`}
                  />
                  {phoneNoError && (
                    <small className="text-danger">{phoneNoError}</small>
                  )}
                </div>
                <div className="col-4">
                  <label className="profile-lable">Your Work Email</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    className={`profile-input mb-2 px-2 ${
                      validEmail && "border-danger"
                    }`}
                  />
                  {validEmail && (
                    <small className="text-danger">
                      Please enter a valid email address.
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-end mt-3 ">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="btn-primary me-3 "
            onClick={handleSubmit}
          >
            Save Changes
          </button>
          {/* <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="btn-primary  "
            style={{ width: "288px" }}
          >
            Force Signature Installation
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default AddProfile;
