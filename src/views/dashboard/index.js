import React from 'react'
import { Col, Row, Space, Tabs } from "antd";
import { Icon } from "@iconify/react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Impression",
      backgroundColor: "rgb(15, 15, 97)",
      borderColor: "red",
      tension: "0.4",
      data: [0, 10, 5, 2, 20, 30, 45, 40, 39, 43, 50, 60 ],
    },
    {
        label: "Views",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "blue",
        tension: "0.4",
        data: [3, 20, 8, 12, 17, 40, 65, 60, 60, 60, 61, 60],
    },
    {
        label: "Clicks",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "green",
        tension: "0.4",  
        data: [10, 20, 15, 26, 38, 52, 25, 25, 30, 35, 36, 37],
      },
      {
        label: "CTR",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "orange",
        tension: "0.4",
        data: [7, 10, 50, 20, 44, 33, 35, 37, 40, 40, 39, 40 ],
      },
  ],
};

export default function dashboard() {
    
  return (
    <>
        {/* <div>
            <h2>Dashboard</h2>
            <Tabs defaultActiveKey="1" items={items} />
        </div> */}
        <h2>Dashboard</h2>
        <div className='row'>
          {/* card 1  */}
          <div className='col-md-3'>
            <div class="card" style={{borderColor: 'red'}}>
              <div class="card-body">
                <h5 class="card-title">Impressions</h5>
                <h6 class="card-subtitle mb-2 text-muted">567</h6>
                {/* <p class="card-text">Some quick example.</p> */}
              </div>
            </div>
          </div>

          {/* card 2  */}
          <div className='col-md-3'>
            <div class="card" style={{borderColor: 'blue'}}>
              <div class="card-body">
                <h5 class="card-title">Views</h5>
                <h6 class="card-subtitle mb-2 text-muted">2192</h6>
                {/* <p class="card-text">Some quick example.</p> */}
              </div>
            </div>
          </div>

          {/* card 3  */}
          <div className='col-md-3'>
            <div class="card" style={{borderColor: 'green'}}>
              <div class="card-body">
                <h5 class="card-title">Clicks</h5>
                <h6 class="card-subtitle mb-2 text-muted">234</h6>
                {/* <p class="card-text">Some quick example.</p> */}
              </div>
            </div>
          </div>

          {/* card 4  */}
          <div className='col-md-3'>
            <div class="card" style={{borderColor: 'orange'}}>
              <div class="card-body">
                <h5 class="card-title">CTR</h5>
                <h6 class="card-subtitle mb-2 text-muted">254</h6>
                {/* <p class="card-text">Some quick example.</p> */}
              </div>
            </div>
          </div>
        </div>

        <div style={{width: "100%", height: "50%"}}>
            <Line data={data} />
        </div>
    </>
  )
}
