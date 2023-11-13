import { Tabs } from "antd";
import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line }            from 'react-chartjs-2'

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

export default function dashboard() {
    
  return (
    <>
        <h2>Dashboard</h2>
        <div className='row'>
          {/* card 1  */}
          <div className='col-md-2'>
            <div class="card" style={{border: 'none'}}>
              <div class="card-body">
                <h6 class="card-title">Co Workers</h6>
                <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-person" style={{color: 'blue'}}></i> 567</h6>
                {/* <p class="card-text">Some quick example.</p> */}
              </div>
            </div>
          </div>

          {/* card 2  */}
          <div className='col-md-2'>
            <div class="card" style={{border: 'none'}}>
              <div class="card-body">
                <h6 class="card-title">Contacts</h6>
                <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-address-book" style={{color: 'blue'}}></i> 2192</h6>
                {/* <p class="card-text">Some quick example.</p> */}
              </div>
            </div>
          </div>

          {/* card 3  */}
          <div className='col-md-2'>
            <div class="card" style={{border: 'none'}}>
              <div class="card-body">
                <h6 class="card-title">Departments</h6>
                <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-group-arrows-rotate" style={{color: 'blue'}}></i> 234</h6>
                {/* <p class="card-text">Some quick example.</p> */}
              </div>
            </div>
          </div>

          {/* card 4  */}
          <div className='col-md-3'>
            <div class="card" style={{border: 'none'}}>
              <div class="card-body">
                <h6 class="card-title">Signatures Installed</h6>
                <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-signature" style={{color: 'blue'}}></i> 254</h6>
                {/* <p class="card-text">Some quick example.</p> */}
              </div>
            </div>
          </div>

          {/* card 5  */}
          <div className='col-md-3'>
            <div class="card" style={{border: 'none'}}>
              <div class="card-body">
                <h6 class="card-title">Completed Information</h6>
                <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-circle-info" style={{color: 'blue'}}></i> 254</h6>
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
