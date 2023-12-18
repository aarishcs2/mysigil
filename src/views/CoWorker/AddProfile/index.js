import { ArrowLeftOutlined, ArrowUpOutlined } from "@ant-design/icons";
import {
  Layout
} from "antd";
import React, { useContext, useState } from "react";
import Image from "../../../assets/Images/default.jpeg";
import { createCoWorker } from "../../../api";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddProfile() {
  const [data, setData] = useState({});
  const { activeWorkSpace } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (event) => {
    data[event.target.name] = event.target.value
    setData(data)
  }
  const handleSubmit = async () => {
    const response = await createCoWorker({ ...data, workspace: activeWorkSpace?.id });
   if(response){
    toast.success('Coworker added succesfully')
    navigate('/dashboard/co-worker')
   }
  }
  return (
    <div className="bg-light-gray p-3">
      <div>
        {" "}
        <span className="back-arrow">
          <ArrowLeftOutlined />
        </span>{" "}
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
                  <input name='firstname' onChange={handleChange} type="text" className="profile-input mb-2 px-2" />
                </div>
                <div className="col-6">
                  <label className="profile-lable">Last Name</label>
                  <input name='lastname' onChange={handleChange} type="text" className="profile-input mb-2 px-2" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-4">
                  <label className="profile-lable">Job Position</label>
                  <input name='jobposition' onChange={handleChange} type="text" className="profile-input mb-2 px-2" />
                </div>
                <div className="col-4">
                  <label className="profile-lable">Work Phone Number</label>
                  <input name='phone' onChange={handleChange} type="text" className="profile-input mb-2 px-2" />
                </div>
                <div className="col-4">
                  <label className="profile-lable">Your Work Email</label>
                  <input name='email' onChange={handleChange} type="email" className="profile-input mb-2 px-2" />
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
