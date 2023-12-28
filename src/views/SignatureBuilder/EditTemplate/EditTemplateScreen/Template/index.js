import React, { useEffect, useState } from "react";
import "./index.css";
import { fetchAlltemplates } from "../../../../../api";

export default function Template() {
  const [templateData, setTemplateData] = useState([]);

  const allTemplates = async ()=>{
    const response = await fetchAlltemplates()
if(response){
  setTemplateData(response.data);
}
  }
  useEffect(() => {
   allTemplates()
  }, []); // Empty dependency array to run this effect only once (on mount)

  return (
    <div className="d-flex">
      <div className="TempplateMain">
        <div className="flexMethod">
          {templateData?.map((template, index) => (
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