import { ArrowLeftOutlined, ArrowUpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { fetchSingleCoWorker, updateCoWorker } from "../../../api";
import Image from "../../../assets/Images/default.jpeg";

function EditProfile() {

  let { id } = useParams();
  const [coWorker, setCoWorker] = useState({});
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const fetchCoWorker = async () => {
    const response = await fetchSingleCoWorker(id);
    setCoWorker(response?.data)
  }

  const handleChange = (event) => {
    const newData = {
      ...data, 
      [event.target.name]: event.target.value,
    };
    setData(newData); 
  };
  const handleSubmit = async () => {
    const response = await updateCoWorker(id, data);
    if (response) {
      toast.success("Co Worker Updated")
      navigate('/dashboard/co-worker')
    }
  }

  useEffect(() => {
    fetchCoWorker()
  }, [])
  return (
    <div className="bg-light-gray p-3">
      <div>
        {" "}
        <span className="back-arrow">
          <ArrowLeftOutlined />
        </span>{" "}
        <img src={Image} className="profile-image mx-2" />{" "}
        <p className="profile-name mb-0 pt-2 ">{coWorker?.firstname} {coWorker?.lastname}</p>
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
              />
              <label className="profile-lable">First Name</label>
              <input onChange={handleChange} name="firstname" value={data?.firstname ?? coWorker?.firstname} type="text" className="profile-input mb-2 px-2" />
              <label className="profile-lable">Last Name</label>
              <input onChange={handleChange} name="lastname" value={data?.lastname ?? coWorker?.lastname} type="text" className="profile-input mb-2 px-2" />
              <label className="profile-lable">Job Position</label>
              <input onChange={handleChange} name="jobposition" value={data?.jobposition ?? coWorker?.jobposition} type="text" className="profile-input mb-2 px-2" />
              <label className="profile-lable">Work Phone Number</label>
              <input onChange={handleChange} name="phone" value={data?.phone ?? coWorker?.phone} type="text" className="profile-input mb-2 px-2" />
              <label className="profile-lable">Your Work Email</label>
              <input onChange={handleChange} name="email" value={data?.email ?? coWorker?.email} type="text" className="profile-input mb-2 px-2" />
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
