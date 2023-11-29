import {
  CheckCircleOutlined,
  DownCircleOutlined,
  FileDoneOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Tabs,
  Slider,
  Switch,
  Checkbox,
  Button,
  Dropdown,
  Flex,
} from "antd";
import React, { useRef, useState } from "react";
import Attribute from "../../components/Attribute";
import Data from "../../components/Data";
import { Link } from "react-router-dom";
import Image from "../../assets/Images/default.jpeg";
const { Content, Footer, TabPane } = Layout;

function Coworkers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [withoutDepartment, setWithoutDepartment] = useState(false);
  const [withMissingAttributes, setWithMissingAttributes] = useState(false);
  const [noSignatureInstalled, setNoSignatureInstalled] = useState(false);

  const fileInputRef = useRef(null);

  const handleDownloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Sample,CSV,Data\nRow1,Data1,Data2\nRow2,Data3,Data4";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("to", encodedUri);
    link.setAttribute("download", "sample.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // Handle the file upload logic here
    }
  };
  const onMenuClick = (e) => {
    console.log("click", e);
  };
  const items = [
    {
      key: "1",
      label: (
        <>
          <Link to="edit-profile"> Edit And Preview</Link>
          <div className="plus-btn mt-3 ">+</div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <Link to=""> Send Invitaion</Link>
          <div className="plus-btn mt-3">+</div>
        </>
      ),
    },
  ];
  return (
    <div className="bg-light-gray p-3">
      <div>
        {" "}
        <h2 className="main-heading mb-0">Co-workers</h2>
        <p className="para">Check Your Co-Workers Information.</p>
        <div className="installed-slider">
          <Slider defaultValue={30} className="w-75" /> <span>26/100</span>
        </div>
        <p className="para">26 Co workers have installed their signatures. </p>
        <div className=" d-flex w-80 mt-5">
          <input type="search" placeholder="Search" className="input-search" />
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="btn-primary ms-3 "
          >
            Show Pending
          </button>
        </div>
        <div className="shadow-box mt-5 p-3">
          <table className="status-table ">
            <thead>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Signature Status</th>
              <th>Interest</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={Image} className="table-user" />
                </td>
                <td>Jay </td>
                <td>Sethi</td>
                <td>
                  <Link>Scraft Marketing</Link>
                </td>
                <td>jaysethi68@gmail.com</td>
                <td>
                  <span className="tag">Installed</span>
                </td>
                <td>Marketing</td>

                <td className="px-4  ">
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <div className="three-dot-btn"> ...</div>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" d-flex justify-content-end mt-3 ">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="btn-primary me-3 "
          >
            Invite All
          </button>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="btn-primary  "
            style={{ width: "288px" }}
          >
            Force All Signature Installation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coworkers;
