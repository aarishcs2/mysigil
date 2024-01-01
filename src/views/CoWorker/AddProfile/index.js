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
import axios from "axios";
function AddProfile() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [newProfilePicture, setNewProfilePicture] = useState(Image);
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
    if (!data.firstname) {
      setNameError("First Name  is required.");
    } else if (!data.lastname) {
      setLastNameError("Last Name  is required.");
    } else if (!data.jobposition) {
      setJobpositionError("Job position  is required.");
    } else if (!phoneNo) {
      setPhoneNoError(" Enter Phone Number");
    } else if (!emailRegex.test(data?.email) || !data.email) {
      setValidEmail(true);
    } else {
      const response = await createCoWorker({
        ...data,
        workspace: activeWorkSpace?.id,
        phone: phoneNo,
        image: newProfilePicture
      });
      if (response) {
        toast.success("Coworker added succesfully");
        navigate("/dashboard/co-worker");
      }
    }
  };
  const cloud_name = "de0q6n3md";
  const preset_name = "user-image";
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_name);
    axios
      .post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formData)
      .then((res) => setNewProfilePicture(res.data.secure_url))
      .catch((err) => console.log(err));
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
        <img src={newProfilePicture} className="profile-image mx-2" />{" "}
        <p className="profile-name mb-0 pt-3 ">
          {data?.firstname} {data?.lastname}
        </p>
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
                name="image"
                onChange={handleImageUpload}
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
