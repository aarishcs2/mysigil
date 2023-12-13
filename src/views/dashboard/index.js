import { DownOutlined } from "@ant-design/icons";
import { Avatar, Checkbox, Dropdown, Space } from "antd";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useState, useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";
import "react-rangeslider/lib/index.css";
import Image from "../../assets/Images/com.png";
import { AuthContext } from "../../context/AuthContext";
import { fetchDepartments } from "../../api";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const labels = ["2019.01", "2019.02", "2019.03", "2019.04", "2019.05"];
  const [sliderValue, setSliderValue] = useState(labels.length);
  const { activeWorkSpace } = useContext(AuthContext);
  const [departments, setDepartments] = useState([]);
  const fetchDepartment = async () => {
    if (activeWorkSpace?.id) {
      const response = await fetchDepartments(activeWorkSpace?.id);
      setDepartments(response?.data)
    }
  }
  useEffect(() => {
    fetchDepartment()
  }, [activeWorkSpace])
  const options = {
    responsive: true,
    onClick: (e, elements) => {
      if (elements[0]) {
        console.log(labels[elements[0]?.index]);
        console.log({
          label: data.datasets[elements[0]?.datasetIndex].label,
          value:
            data.datasets[elements[0]?.datasetIndex].data[[elements[0]?.index]],
        });
      }
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  const data = {
    labels: labels.slice(0, sliderValue),
    datasets: [
      {
        label: "Source title",
        data: [200, 150, 400, 329, 100],
        backgroundColor: "#1f77b4",
      },
      {
        label: "Meta",
        data: [500, 650, 410, 129, 300],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const items = [
    {
      label: (
        <>
          Today{" "}
          <Checkbox
            className="ms-4"
          // onChange={onChange}
          />
        </>
      ),
      key: "0",
    },
    {
      label: <>Yesterday</>,
      key: "1",
    },
    {
      label: <>Last 7 days</>,
      key: "2",
    },
    {
      label: <>Last 30 days</>,
      key: "3",
    },
    {
      label: <>Last 90 days</>,
      key: "4",
    },
    {
      label: <>Last 365 days</>,
      key: "5",
    },
    {
      label: <>Last month</>,
      key: "6",
    },
    {
      label: <>Last 12 month</>,
      key: "7",
    },
    {
      label: <>Last year</>,
      key: "8",
    },
    {
      label: <>Week to date</>,
      key: "9",
    },
    {
      label: <>Quarters</>,
      key: "10",
    },
    {
      label: <>Show Calendar</>,
      key: "11",
    },
  ];

  console.log(departments?.length)
  return (
    <>
      <div className="d-flex justify-content-between w-100 mb-3">
        <div>
          {" "}
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            className="gray-btn py-2 px-3 "
          >
            <Space>
              Year to date
              <DownOutlined style={{ fontSize: "10px" }} />
            </Space>
          </Dropdown>
        </div>
        <div>
          <div className="gray-btn py-2 px-3 ">Today</div>
        </div>
      </div>
      <div className="chart-con p-3">
        <Bar options={options} data={data} />
      </div>

      <div className="row mt-3">
        <div className="col-md-3 ">
          <div class="dashboard-card mb-3 p-3">
            <p>
              Co Workers <span className="ms-3">234</span>
            </p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div class="dashboard-card mb-3 p-3">
            <p>
              Contacts <span className="ms-3">234</span>
            </p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div class="dashboard-card mb-3 p-3">
            <p>
              Signatures Installed <span className="ms-3">277</span>
            </p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div class="dashboard-card mb-3 p-3">
            <p>
              Completed Information <span className="ms-3">256</span>
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-3 mt-1">
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
        <div className="col-md-6 mt-1">
          <div className="dashboard-card-down p-3">
            <h6 className="dashboard-card-down-h6 mb-0">Department</h6>
            <p className="dashboard-card-down-para pb-5">
              Manage Co-Workers Easily for each Department
            </p>
            <div class="d-flex justify-content-between pt-4 mt-3">
              <div>
                <h6 className=" mb-0">Total Departments</h6>
                <p
                  className="mb-0"
                  style={{ color: "#7E7E7E", fontSize: "18px" }}
                >
                  {departments?.length}
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
