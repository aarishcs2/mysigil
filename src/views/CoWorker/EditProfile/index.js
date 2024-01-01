import { ArrowLeftOutlined, ArrowUpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSingleCoWorker, updateCoWorker } from "../../../api";
import Image from "../../../assets/Images/default.jpeg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { Link } from "react-router-dom";
function EditProfile() {
  let { id } = useParams();
  const [coWorker, setCoWorker] = useState({});
  const [data, setData] = useState({});
  const [newProfilePicture, setNewProfilePicture] = useState(Image);

  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [jobpositionError, setJobpositionError] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const navigate = useNavigate();

  const fetchCoWorker = async () => {
    const response = await fetchSingleCoWorker(id);
    setData(response?.data);
  };

  const handleChange = (event) => {
    const newData = {
      ...data,
      [event.target.name]: event.target.value,
    };
    setData(newData);
    
  };
  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.firstname) {
      setNameError("First Name  is required.");
    } else if (!data.lastname) {
      setLastNameError("Last Name  is required.");
    } else if (!data.jobposition) {
      setJobpositionError("Job position  is required.");
    } else if (!phoneNo && !data?.phone) {
      setPhoneNoError(" Enter Phone Number");
    } else if (
      !emailRegex.test(data?.email) || !data.email
    ) {
      setValidEmail(true);
    } else {
      const response = await updateCoWorker(id, {...data, image: newProfilePicture});
      if (response) {
        toast.success("Co Worker Updated");
        navigate("/dashboard/co-worker");
      }
    }
  };

  useEffect(() => {
    fetchCoWorker();
  }, []);
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
          <span className="back-arrow">
            <ArrowLeftOutlined />
          </span>{" "}
        </Link>
        <img src={newProfilePicture} className="profile-image mx-2" />{" "}
        <p className="profile-name mb-0 pt-2 ">
          {coWorker?.firstname} {coWorker?.lastname}
        </p>
        <div className="row mt-5">
          <div className="col-6">
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
                onChange={handleImageUpload}
              />
              <label className="profile-lable">First Name</label>
              <input
                onChange={handleChange}
                name="firstname"
                value={data?.firstname ?? coWorker?.firstname}
                type="text"
                className={`profile-input mb-2 px-2 ${
                  nameError && "border-danger"
                }`}
              />
              <small className="text-danger"> {nameError && nameError} </small>
              <br />
              <label className="profile-lable">Last Name</label>
              <input
                onChange={handleChange}
                name="lastname"
                value={data?.lastname ?? coWorker?.lastname}
                type="text"
                className={`profile-input mb-2 px-2 ${
                  lastNameError && "border-danger"
                }`}
              />
              <small className="text-danger">
                {" "}
                {lastNameError && lastNameError}{" "}
              </small>
              <br />
              <label className="profile-lable">Job Position</label>
              <input
                onChange={handleChange}
                name="jobposition"
                value={data?.jobposition ?? coWorker?.jobposition}
                type="text"
                className={`profile-input mb-2 px-2 ${
                  jobpositionError && "border-danger"
                }`}
              />
              <small className="text-danger">
                {" "}
                {jobpositionError && jobpositionError}{" "}
              </small>
              <br />
              <label className="profile-lable">Work Phone Number</label>
              {/* <input
                onChange={handleChange}
                name="phone"
                value={data?.phone ?? coWorker?.phone}
                type="text"
                className={`profile-input mb-2 px-2 ${
                  nameError && "border-danger"
                }`}
              /> */}
              <PhoneInput
                // value={phoneNo ?? coWorker?.phone}
                value={data?.phone ?? coWorker?.phone}
                onChange={setPhoneNo}
                className={`profile-input mb-2 px-2 ${
                  phoneNoError && "border-danger"
                }`}
              />
              {phoneNoError && (
                <>
                  {" "}
                  <small className="text-danger">{phoneNoError}</small>
                  <br/>
                </>
              )}
            
              <label className="profile-lable">Your Work Email</label>
              <input
                onChange={handleChange}
                name="email"
                value={data?.email ?? coWorker?.email}
                type="text"
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
          <div className="col-6">
            <div className="scroll-y p-3 ">
              <p className=" py-2 down-para">​ Signature Preview</p>{" "}
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
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="btn-primary  "
            style={{ width: "288px" }}
          >
            Force Signature Installation
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
