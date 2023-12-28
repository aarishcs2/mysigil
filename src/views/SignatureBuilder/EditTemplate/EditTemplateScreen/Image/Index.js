import React, { useRef, useState } from "react";
import "./index.css";

function Image() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputList, setInputList] = useState([]);
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleAddText = () => {
    setInputList([...inputList, ""]);
  };

  const handleInputChange = (index, value) => {
    const newList = [...inputList];
    newList[index] = value;
    setInputList(newList);
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
        {selectedFile && (
          <img src={selectedFile} alt="Preview" className="UploadedProfile" />
        )}

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
          <div className="AddTxt" onClick={handleAddText}>
            Add Text
          </div>
        </div>
        {inputList.map((input, index) => (
          <div key={index} className="AddTxtbox">
            <input
              type="text"
              value={input}
              placeholder="text"
              className="inp"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            {/* <button type="button" onClick={() => handleRemoveInput(index)}>
              Remove
            </button> */}
          </div>
        ))}
      </div>
      <div className="mainScreen"></div>
    </div>
  );
}

export default Image;
