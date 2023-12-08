import React from "react";
import "./SignatureCard.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
function SignatureCard(props) {
  let Navigate = useNavigate();
  return (
    <div
      onClick={() => Navigate("/signaturebuilder/Edit-template/Template")}
      className="ssignature__Template"
    >
      <div className="padingsetting">
        <div className="emailContentAndIcon">
          <div>
            <Icon icon="material-symbols:mail" />
          </div>
          <div className="EmailContent">{props.Email}</div>
        </div>
        <div className="SignatureContent">{props.content}</div>
        <div className="strongContent">{props.EmailEnd}</div>
        <div>
          <img width="125px" style={{ paddingTop: 22 }} src={props.image} />
        </div>
        <div className="pt-1 mb-3">
          &nbsp;&nbsp;&nbsp;
          <Icon icon="ri:linkedin-fill" />
          &nbsp;&nbsp;&nbsp;
          <Icon icon="ri:facebook-fill" />
          &nbsp;&nbsp;&nbsp;
          <Icon icon="mdi:instagram" />
        </div>
        <div className="lightContent">
          <div className="conetent">{props.endContentOne}</div>
          <div className="conetent">{props.endContentTwo}</div>
        </div>
      </div>
      <div className="signatureTemplateHeading">
        <div className="heading">{props.signatureTemplateCount}</div>
        <div>
          <img src="/images/DoteSettingIcon.png" />
        </div>
      </div>
    </div>
  );
}

export default SignatureCard;
