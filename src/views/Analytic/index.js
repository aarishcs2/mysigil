import React, { useState } from "react";
import { DatePicker, Button, Tabs, Dropdown, Menu, Empty } from "antd";
import Marketing from "./Marketing";
import Signatures from "./Signatures";
import CSV from "./CSV";
import Vector1 from "../../assets/Images/vector1.png";
import Vector2 from "../../assets/Images/vector2.png";
import Vector3 from "../../assets/Images/vector3.png";
import Vector4 from "../../assets/Images/vector4.png";
import Graph from "../../components/Graph";
import Image from "../../assets/Images/default.jpeg";
export default function Analytic() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  const handleFromChange = (value) => {
    setFromDate(value);
    setOpenFrom(false); // Close the DatePicker after selection
  };

  const handleToChange = (value) => {
    setToDate(value);
    setOpenTo(false); // Close the DatePicker after selection
  };

  const dateFormat = "YYYY-MM-DD";
  const fromDisplay = fromDate
    ? fromDate.format(dateFormat)
    : "Select From Date";
  const toDisplay = toDate ? toDate.format(dateFormat) : "Select To Date";

  const menu = (
    <Menu>
      <Menu.Item key="1">Director - India</Menu.Item>
      <Menu.Item key="2">Scraft Studio - India</Menu.Item>
    </Menu>
  );
  
  

  const items = [
    {
      key: "1",
      label: "Overview",
      children: (
        <>
          <p class="para">
            {" "}
            <img src={Vector1} alt="vector" className="me-2" height={11} />
            Overview{" "}
          </p>
          <div
            className="chart-con mb-3 shadow-none"
            style={{ background: "#F9F9F9" }}
          >
            <Graph />
          </div>
          <p class="para">
            {" "}
            <img src={Vector2} alt="vector" className="me-2" height={11} />
            Top 5 elements
          </p>
          <div className="top-element  p-3 ">
            <table className="status-table">
              <thead>
                <th>Preview</th>
                <th>Type</th>
                <th>Link</th>
                <th>Departments</th>
                <th>Views</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>Status</th>
                <th>Lifetime</th>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-0">
                    <div className="element-icon py-1">
                      <img
                        style={{ width: 49, height: 49, borderRadius: 9999 }}
                        src="https://via.placeholder.com/49x49"
                      />
                    </div>
                  </td>
                  <td>
                    <span className="type-link">Socials</span>
                  </td>
                  <td>
                    <span className="type-link">facebook.com</span>
                  </td>
                  <td>
                    <span className="type-link"> Owners</span>
                  </td>
                  <td>2</td>
                  <td>34</td>
                  <td>34%</td>
                  <td>
                    <span
                      // className={
                      //   item?.signature?.length > 1 ? "tag" : "tag_not"
                      // }
                      className="tag"
                    >
                      {/* {item?.signature?.length > 1 ? "Installed" : "Not Installed"} */}
                      Active
                    </span>
                  </td>
                  <td>625 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="para mt-3">
            {" "}
            <img src={Vector3} alt="vector" className="me-2" height={11} />
            Top 5 Teammaes
          </p>
          <div className="top-element  p-3 ">
            <table className="status-table">
              <thead>
                <th>Teammate</th>
                <th>Departments</th>
                <th>Views</th>
                <th>Clicks</th>
                <th>CTR</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-inline-flex align-items-center">
                      <img src={Image} className="table-user me-1" />
                      Ranjhina{" "}
                    </div>
                  </td>

                  <td>
                    <span className="type-link"> Owners</span>
                  </td>
                  <td>2</td>
                  <td>34</td>
                  <td>34%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="para mt-3">
            {" "}
            <img src={Vector4} alt="vector" className="me-2" height={11} />
            Top 5 Countries
          </p>
          <div className="top-element  p-3 ">
            <table className="status-table">
              <thead>
                <th>Countries</th>

                <th>Views</th>
                <th>Clicks</th>
                <th>CTR</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-inline-flex align-items-center">
                      <b className="me-1">IN</b>India
                    </div>
                  </td>

                  <td>2</td>
                  <td>34</td>
                  <td>34%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "Marketing Campaigns",
      children: (
        <>
          <p class="para">
            {" "}
            <img src={Vector1} alt="vector" className="me-2" height={11} />
            Marketing Campigns
          </p>
          <input type="search" placeholder="Search" className="input-search" />
          <div className="top-element  p-3 mt-3 ">
            <table className="status-table">
              <thead>
                <th>Preview</th>
                <th>Name</th>
                <th>Departments</th>
                <th>From</th>
                <th>To</th>
                <th>Views</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>Status</th>
              </thead>
              <tbody></tbody>
            </table>
            <p className="text-center my-5">We don’t have any data yet</p>
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: "Departments",
      children: (
        <>
          <p class="para mt-3">
            {" "}
            <img src={Vector1} alt="vector" className="me-2" height={11} />
            Departments
          </p>
          <input type="search" placeholder="Search" className="input-search" />
          <div className="top-element  p-3 mt-3 ">
            <table className="status-table">
              <thead>
                <th>Departments</th>
                <th>Views</th>
                <th>Clicks</th>
                <th>CTR</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="type-link"> Owners</span>
                  </td>
                  <td>2</td>
                  <td>34</td>
                  <td>34%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      key: "4",
      label: "Teammates",
      children: (
        <>
          <p class="para mt-3">
            {" "}
            <img src={Vector3} alt="vector" className="me-2" height={11} />
            Teammate
          </p>
          <input type="search" placeholder="Search" className="input-search" />
          <div className="top-element  p-3 mt-3 ">
            <table className="status-table">
              <thead>
                <th>Teammate</th>
                <th>Departments</th>
                <th>Views</th>
                <th>Clicks</th>
                <th>CTR</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-inline-flex align-items-center">
                      <img src={Image} className="table-user me-1" />
                      Ranjhina{" "}
                    </div>
                  </td>
                  <td>
                    <span className="type-link"> Owners</span>
                  </td>
                  <td>2</td>
                  <td>34</td>
                  <td>34%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      key: "5",
      label: "Countries",
      children: (
        <>
          <p class="para mt-3">
            {" "}
            <img src={Vector4} alt="vector" className="me-2" height={11} />
            Countries
          </p>
          <input type="search" placeholder="Search" className="input-search" />
          <div className="top-element  p-3 mt-3 ">
            <table className="status-table">
              <thead>
                <th>Countries</th>
                <th>Departments</th>
                <th>Views</th>
                <th>Clicks</th>
                <th>CTR</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-inline-flex align-items-center">
                      <b className="me-1">IN</b>India
                    </div>
                  </td>
                  <td>
                    <span className="type-link"> Owners</span>
                  </td>
                  <td>2</td>
                  <td>34</td>
                  <td>34%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="bg-light-gray p-3">
      <div className="d-flex justify-content-between">
        {" "}
        <h2>Analytics</h2>{" "}
        <div className="date-btn">Oct 13,23 {""} Nov 14,23</div>
      </div>

      <Tabs
        className="d-inline-block"
        defaultActiveKey="1"
        items={items}
        moreIcon={null}
      />
    </div>
  );
}
