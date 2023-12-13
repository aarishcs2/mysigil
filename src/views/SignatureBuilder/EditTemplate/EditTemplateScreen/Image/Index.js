import React, { useRef, useState } from "react";
import "./index.css";

function Image() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(selectedFile);
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="d-flex">
      <div className="Gallery">
        <div className="imageTitle">Images</div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <div onClick={handleDivClick} className="image">
          <div>
            <div className="button">
              <div className="circleAddGallery">
                <img src="/images/CreateGAlleryIcon.png" />
              </div>
              <div className="buttontext">Upload Photo or logo</div>
            </div>
            <div className="createText">
              Image should be at least 100 px X 100px
            </div>
          </div>
        </div>
        <div className="AddTxtbox">
          <div className="CircleButton">
            <img src="/images/PlusIcon.png" />
          </div>
          <div className="AddTxt">Add Text</div>
        </div>
      </div>
      <div className="mainScreen"></div>
    </div>
  );
}

export default Image;
