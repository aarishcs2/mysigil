import React, { useRef, useState } from "react";
import "./index.css";

function Detail() {
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
      <div className="DetailMain">
        <div className="SignatureDetail">Signature Details</div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <div onClick={handleDivClick} className="Circle">
          <div className="text-center">
            {selectedFile ? (
              <img
                src={selectedFile}
                alt="Preview"
                className="UploadedProfile"
              />
            ) : (
              <>
                <img src="/images/arrow.png" alt="" />

                <div className="ProfilePicture">Profile Picture </div>
              </>
            )}
          </div>
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Name" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Title" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Company" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Phone" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Mobile" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Website" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Email" />
        </div>
        <div className="inputbox">
          <input className="inp" placeholder="Adress" />
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

export default Detail;
