import React from "react";
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
        <div className="ViewlessButton">
          <span>Show Less</span>
          <Icon icon="mdi:arrow-bottom-circle-outline" />
        </div>
        <div className="showIconlist">
          {SocialIconArr.map((e, i) => {
            return (
              <div key={i} className="icon">
                <img src={e.icon} />
              </div>
            );
          })}
        </div>
        <div className="image">
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
