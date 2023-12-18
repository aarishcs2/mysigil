import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import { Icon } from "@iconify/react";

function Social() {
  const SocialIconArr = [
    {
      icon: "/images/beIcon.png",
    },
    {
      icon: "/images/printent.png",
    },
    {
      icon: "/images/RemoteICon.png",
    },
    {
      icon: "/images/Twiteer.png",
    },
    {
      icon: "/images/SocialIco.png",
    },
    {
      icon: "/images/Yourtube.png",
    },
    {
      icon: "/images/tWITTERuPDATRE iCON.png",
    },
  ];
 const [images, setImages] = useState([]);
  const fileInputRef = useRef();

 const handleImageChange = (e) => {
   const file = e.target.files[0];

   if (file) {
     const reader = new FileReader();

     reader.onloadend = () => {
       setImages([...images, reader.result]);
     };

     reader.readAsDataURL(file);
   }
 };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const [isOpen, setIsOpen] = useState(true);
  const [contentHeight, setContentHeight] = useState();
   const contentRef = useRef(null);

   const toggleCollapsible = () => {
     setIsOpen(!isOpen);
   };

   useEffect(() => {
     if (contentRef.current) {
       setContentHeight(contentRef.current.clientHeight);
     }
   }, []);
  return (
    <div className="d-flex">
      <div className="Gallery">
        <div className="socialtitle">Social Profiles</div>
        <div className="inputDiv">
          <div>
            <img src="/images/faebok.png" />
          </div>
          <div>
            <input className="socialinput" placeholder="Facebook username" />
          </div>
        </div>
        <div className="inputDiv">
          <div>
            <img src="/images/instrgarm.png" />
          </div>
          <div>
            <input className="socialinput" placeholder="Instagram username" />
          </div>
        </div>
        <div className="inputDiv">
          <div>
            <img src="/images/lindin.png" />
          </div>
          <div>
            <input className="socialinput" placeholder="Facebook username" />
          </div>
        </div>
        <div className="inputDiv">
          <div>
            <img src="/images/Twitter.png" />
          </div>
          <div>
            <input className="socialinput" placeholder="Twitter handle" />
          </div>
        </div>
        <div className="inputDiv">
          <div>
            <img src="/images/Skype.png" />
          </div>
          <div>
            <input className="socialinput" placeholder="Skype Id" />
          </div>
        </div>
        <div className="ViewlessButton" onClick={toggleCollapsible}>
          <span>Show {isOpen ? "Less" : "More"} </span>
          <Icon icon="mdi:arrow-bottom-circle-outline" />
        </div>
        <div
          className="showIconlist"
          style={{
            height: isOpen ? contentHeight : "0",
            overflow: "hidden",
            transition: "height 0.3s ease",
            padding: isOpen ? "3% 0" : undefined,
          }}
          ref={contentRef}
        >
          {SocialIconArr.map((e, i) => {
            return (
              <div key={i} className="icon">
                <img src={e.icon} />
              </div>
            );
          })}
          {images.map((image, index) => (
            <div key={index} className="icon">
              <img
                src={image}
                alt={`Preview ${index + 1}`}
                style={{ height: "46px", width: "46px", borderRadius: "46px" }}
              />
            </div>
          ))}
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleImageChange}
          ref={fileInputRef}
        />
        <div onClick={handleDivClick} className="image">
          <div className="">
            <div className="button">
              <div className="circleAddGallery">
                <img src="/images/CreateGAlleryIcon.png" />
              </div>
              <div className="buttontext">Upload your own icon</div>
            </div>
            <div className="createText">
              Best size 64×64px, must be in PNG format only
            </div>
          </div>
        </div>
      </div>
      <div className="mainScreen"></div>
    </div>
  );
}

export default Social;
