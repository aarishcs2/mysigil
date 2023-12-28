import { ArrowLeftOutlined, ArrowUpOutlined } from "@ant-design/icons";
import {
  Layout
} from "antd";
import React from "react";
import Image from "../../../assets/Images/default.jpeg";
const { Content, Footer, TabPane } = Layout;

function AddProfile() {
  return (
    <div className="bg-light-gray p-3">
      <div>
        {" "}
        <span className="back-arrow">
          <ArrowLeftOutlined />
        </span>{" "}
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
                  <input type="text" className="profile-input mb-2" />
                </div>
                <div className="col-6">
                  <label className="profile-lable">Last Name</label>
                  <input type="text" className="profile-input mb-2" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-4">
                  <label className="profile-lable">Job Position</label>
                  <input type="text" className="profile-input mb-2" />
                </div>
                <div className="col-4">
                  <label className="profile-lable">Work Phone Number</label>
                  <input type="text" className="profile-input mb-2" />
                </div>
                <div className="col-4">
                  <label className="profile-lable">Your Work Email</label>
                  <input type="text" className="profile-input mb-2" />
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

export default AddProfile;
