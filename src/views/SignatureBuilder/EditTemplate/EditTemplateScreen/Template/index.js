import React, { useEffect, useState } from "react";
import "./index.css";

export default function Template() {
  const [templateData, setTemplateData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/fetchAlltemplates")
      .then((response) => response.json())
      .then((data) => {
        // Once data is fetched, update the state with the received data
        setTemplateData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run this effect only once (on mount)

  return (
    <div className="d-flex">
      <div className="TempplateMain">
        <div className="flexMethod">
          {templateData.map((template, index) => (
            <div className="box" key={index}>
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: template.html }}
              ></div>
            </div>
          ))}
        </div>
      </div>


      <div className="mainscreen">
            <h3>hello</h3>
      </div>
    </div>
  );
}