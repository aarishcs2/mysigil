import React from 'react'
import { Col, Row, Space, Tabs } from "antd";
import { Icon } from "@iconify/react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Impression",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
        label: "Views",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "Clicks",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "CTR",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
  ],
};

export default function dashboard() {
    const items = [
        {
            key: "1",
            label: "Chart",
            children: (
              <>
                <h4 className="mt-4 mb-2">Chart</h4>
                <p className="mb-3">
                  Chart Immpressions, views and clicks
                </p>

                <div>
                  <Line data={data} />
              </div>
                
              </>
            ),
        },
        {
          key: "2",
          label: "Co-workers",
          children: (
            <>
              <h4 className="mt-4 mb-2">Co-workers</h4>
              <p className="mb-3">
                List of co-workersin there specific departments
              </p>
            </>
          ),
        },
        {
          key: "3",
          label: "Contacts",
          children: (
            <>
              <h4 className="mt-4 mb-2">Contacts</h4>
              <p className="mb-3">
                Contact list of all co-workers
              </p>
            </>
          ),
        },
        {
            key: "4",
            label: "Departments",
            children: (
              <>
                <h4 className="mt-4 mb-2">Departments</h4>
                <p className="mb-3">
                  LIst of created departments 
                </p>
              </>
            ),
          },
          {
            key: "5",
            label: "Signatures Installed",
            children: (
              <>
                <h4 className="mt-4 mb-2">Signatures Installed</h4>
                <p className="mb-3">
                  List of signatures created and installed
                </p>
              </>
            ),
          },
          {
            key: "6",
            label: "Completed Information",
            children: (
              <>
                <h4 className="mt-4 mb-2">Completed Information</h4>
                <p className="mb-3">
                  List of completed information on co-workers
                </p>
                
              </>
            ),
          },
          
      ];
  return (
    <>
        <div>
            <h2>Dashboard</h2>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    </>
  )
}
