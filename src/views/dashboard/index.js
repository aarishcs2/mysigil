import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line }            from 'react-chartjs-2'
import style from './style.css'
import { Checkbox, Avatar } from "antd";
import Image from "../../assets/Images/com.png"
const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Impression",
      backgroundColor: "red",
      borderColor: "red",
      tension: "0.4",
      data: [0, 10, 5, 2, 20, 30, 45, 40, 39, 43, 50, 60 ],
    },
    {
      label: "Views",
      backgroundColor: "blue",
      borderColor: "blue",
      tension: "0.4",
      data: [3, 20, 8, 12, 17, 40, 65, 60, 60, 60, 61, 60],
    },
    {
      label: "Clicks",
      backgroundColor: "green",
      borderColor: "green",
      tension: "0.4",  
      data: [10, 20, 15, 26, 38, 52, 25, 25, 30, 35, 36, 37],
    },
    {
      label: "CTR",
      backgroundColor: "orange",
      borderColor: "orange",
      tension: "0.4",
      data: [7, 10, 50, 20, 44, 33, 35, 37, 40, 40, 39, 40 ],
    },
  ],
};

export default function Dashboard() {
  return (
    <>
    

      <div className="chart-con p-3" >
        <Line data={data} />
      </div>

      <div className="row mt-3">
        <div className="col-md-3 ">
          <div class="dashboard-card p-3">
            <p>
              Co Workers <span className="ms-3">234</span>
            </p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div class="dashboard-card p-3">
            <p>
              Contacts <span className="ms-3">234</span>
            </p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div class="dashboard-card p-3">
            <p>
              Signatures Installed <span className="ms-3">277</span>
            </p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div class="dashboard-card p-3">
            <p>
              Completed Information <span className="ms-3">256</span>
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div className="dashboard-card-down p-3">
            <h6 className="dashboard-card-down-h6 mb-0">Set-up</h6>
            <p className="dashboard-card-down-para">
              Complete the steps below to install on-brand email signatures.
            </p>
            <div className="row mt-3">
              <div className="col-md-6 ">
                <Checkbox className="mt-2">
                  <span className="span-check ">Create your Signature</span>
                </Checkbox>
                <Checkbox className="mt-2">
                  <span className="span-check ">Sync Co-Workers</span>
                </Checkbox>
                <Checkbox className="mt-2">
                  <span className="span-check ">Autofill Signatures</span>
                </Checkbox>
                <Checkbox className="mt-2">
                  <span className="span-check ">Create Department</span>
                </Checkbox>
              </div>
              <div className="col-md-6 ">
                <Checkbox className="mt-2">
                  <span className="span-check ">Assign Co-Workers</span>
                </Checkbox>
                <Checkbox className="mt-2">
                  <span className="span-check ">Install Signature</span>
                </Checkbox>
                <Checkbox className="mt-2">
                  <span className="span-check ">Configure DNS</span>
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div className="dashboard-card-down p-3">
            <h6 className="dashboard-card-down-h6 mb-0">Department</h6>
            <p className="dashboard-card-down-para">
              Manage Co-Workers Easily for each Department
            </p>
            <div className="d-flex justify-content-between mt-5">
              <div>
                <h6 className=" mb-0">Total Departments</h6>
                <p
                  className="mb-0"
                  style={{ color: "#7E7E7E", fontSize: "18px" }}
                >
                  36
                </p>
              </div>
              <div>
                {" "}
                <Avatar.Group>
                  <Avatar
                    src={Image}
                    size={{ xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 }}
                  />
                  <Avatar
                    src={Image}
                    size={{ xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 }}
                  />
                  <Avatar
                    src={Image}
                    size={{ xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 }}
                  />
                  <Avatar
                    src={Image}
                    size={{ xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 }}
                  />
                  <Avatar
                    src={Image}
                    size={{ xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 }}
                  />
                </Avatar.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
