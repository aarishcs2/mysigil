import { Icon } from "@iconify/react";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../../../assets/Images/default.jpeg";
export default function Status() {
  const [ismodal3, setIsModal3] = useState(false);

  return (
    <div>
      <div className="status">
        {" "}
        <h2 className="main-heading mb-0">Department Status</h2>
        <p className="para">
          Check Your Co-Workers Information For This Department.
        </p>
        <div className="d-flex  w-100  justify-content-between mt-5 ">
          <div className="text-start w-100">
            <div>
              {" "}
              <p className="heading">SCARFT</p> <p className="country">INDIA</p>
              <p className="time-zone">(GMT+5:30)</p>
            </div>
          </div>

          <div className="d-flex">
            <div className="btn-primary-outline h-40 me-2">Back</div>{" "}
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              className=" btn-primary h-40 "
            >
              <strong>Edit</strong>
            </button>
          </div>
        </div>
        <div className="shadow-box mt-3 p-3">
          <table className="status-table">
            <thead>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Installation</th>
              <th>Information</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={Image} className="table-user" />
                </td>
                <td>Jay sethi</td>
                <td>jaysethi68@gmail.com</td>
                <td>
                  <span className="tag">Installed</span>
                </td>
                <td>
                  20%
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td className="ps-5">
                  <Checkbox className="table-check me-2" />
                  <Checkbox className="table-check" />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <img src={Image} className="table-user" />
                </td>
                <td>Jay sethi</td>
                <td>jaysethi68@gmail.com</td>
                <td>
                  <span className="tag">Installed</span>
                </td>
                <td>
                  20%
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td className="ps-5">
                  <Checkbox className="table-check me-2" />
                  <Checkbox className="table-check" />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <img src={Image} className="table-user" />
                </td>
                <td>Jay sethi</td>
                <td>jaysethi68@gmail.com</td>
                <td>
                  <span className="tag">Installed</span>
                </td>
                <td>
                  20%
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td className="ps-5">
                  <Checkbox className="table-check me-2" />
                  <Checkbox className="table-check" />{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
