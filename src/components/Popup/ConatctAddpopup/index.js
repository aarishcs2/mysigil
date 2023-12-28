import React, { useContext, useState } from "react";
import "./index.css";
import { Select } from "antd";
import { createContact, updateContact } from "../../../api";
import { AuthContext } from "../../../context/AuthContext";

function ContactPopup(props) {
  const [data, setData] = useState(props?.data);
  const { activeWorkSpace } = useContext(AuthContext)
  const handleCreate = async () => {
    if (activeWorkSpace) {
      let respomse;
      if (data?._id) {
        respomse = await updateContact(data?._id , data);
      } else {
        respomse = await createContact({ ...data, workspace: activeWorkSpace.id });
      }
      if (respomse) {
        props.onClose()
        setData({})
      }
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
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
                <input onChange={handleChange} value={data?.firstname} name="firstname" placeholder="First name" className="endinput" />
              </div>
              <div>
                <input onChange={handleChange} value={data?.lastname} name="lastname" placeholder="Last name" className="endinput" />
              </div>
            </div>

            <div className=" Center">
              <div>
                <input onChange={handleChange} value={data?.phone} name="phone" placeholder="Phone" className="endinput" />
              </div>
              <div>
                <input onChange={handleChange} value={data?.email} name="email" placeholder="Email" className="endinput" />
              </div>
            </div>
            <div className="ConatctAddInputDiv">
              <input onChange={handleChange} value={data?.organization} name="organization" className="AddContactInput" placeholder="Organization" />
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
