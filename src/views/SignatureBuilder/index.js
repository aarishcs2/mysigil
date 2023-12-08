import "./index.css";
import { Icon } from "@iconify/react";
import SignatureCard from "../../components/SignatureCard/SignatureCard";
import CreateSignaturePopup from "../../components/Popup/CreateSignature/CreateSignaturePopup";
import { useState } from "react";

function SignatureBuilder() {
  const arr = [
    {
      Email: "acounts@gnfinternational.com",
      content: " Sadbhav Complex, 1st floor, Drive in Rd, Ahmedabad, Gujrat",
      EmailEnd: "gnfinternational.com",
      image: "/images/Rectangle 150.png",
      endContentOne:
        "The information Contained in this electronic massage and any",
      endContentTwo:
        " The information Contained in this electronic massage and any",
      signatureTemplateCount: "GNF Template 1",
    },
    {
      Email: "acounts@gnfinternational.com",
      content: " Sadbhav Complex, 1st floor, Drive in Rd, Ahmedabad, Gujrat",
      EmailEnd: "gnfinternational.com",
      image: "/images/Rectangle 150.png",
      endContentOne:
        "The information Contained in this electronic massage and any",
      endContentTwo:
        " The information Contained in this electronic massage and any",
      signatureTemplateCount: "GNF Template 2",
    },
    {
      Email: "acounts@gnfinternational.com",
      content: " Sadbhav Complex, 1st floor, Drive in Rd, Ahmedabad, Gujrat",
      EmailEnd: "gnfinternational.com",
      image: "/images/Rectangle 150.png",
      endContentOne:
        "The information Contained in this electronic massage and any",
      endContentTwo:
        " The information Contained in this electronic massage and any",
      signatureTemplateCount: "GNF Template 3",
    },
    {
      Email: "acounts@gnfinternational.com",
      content: " Sadbhav Complex, 1st floor, Drive in Rd, Ahmedabad, Gujrat",
      EmailEnd: "gnfinternational.com",
      image: "/images/Rectangle 150.png",
      endContentOne:
        "The information Contained in this electronic massage and any",
      endContentTwo:
        " The information Contained in this electronic massage and any",
      signatureTemplateCount: "GNF Template 4",
    },
    {
      Email: "acounts@gnfinternational.com",
      content: " Sadbhav Complex, 1st floor, Drive in Rd, Ahmedabad, Gujrat",
      EmailEnd: "gnfinternational.com",
      image: "/images/Rectangle 150.png",
      endContentOne:
        "The information Contained in this electronic massage and any",
      endContentTwo:
        " The information Contained in this electronic massage and any",
      signatureTemplateCount: "GNF Template 5",
    },
    {
      Email: "acounts@gnfinternational.com",
      content: " Sadbhav Complex, 1st floor, Drive in Rd, Ahmedabad, Gujrat",
      EmailEnd: "gnfinternational.com",
      image: "/images/Rectangle 150.png",
      endContentOne:
        "The information Contained in this electronic massage and any",
      endContentTwo:
        " The information Contained in this electronic massage and any",
      signatureTemplateCount: "GNF Template 6",
    },
    {
      Email: "acounts@gnfinternational.com",
      content: " Sadbhav Complex, 1st floor, Drive in Rd, Ahmedabad, Gujrat",
      EmailEnd: "gnfinternational.com",
      image: "/images/Rectangle 150.png",
      endContentOne:
        "The information Contained in this electronic massage and any",
      endContentTwo:
        " The information Contained in this electronic massage and any",
      signatureTemplateCount: "GNF Template 7",
    },
    {
      Email: "acounts@gnfinternational.com",
      content: " Sadbhav Complex, 1st floor, Drive in Rd, Ahmedabad, Gujrat",
      EmailEnd: "gnfinternational.com",
      image: "/images/Rectangle 150.png",
      endContentOne:
        "The information Contained in this electronic massage and any",
      endContentTwo:
        " The information Contained in this electronic massage and any",
      signatureTemplateCount: "GNF Template 8",
    },
  ];
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <>
      {popupOpen ? (
        <CreateSignaturePopup onClick={() => setPopupOpen(false)} />
      ) : null}
      <div className="SignatureBuilder__Main">
        <div className="Flex__Setting">
          <div className="Signature__heading">Signature </div>
          <div>
            <button
              onClick={() => {
                setPopupOpen(true);
              }}
              className="CreateNewTeamButton"
            >
              Create New
            </button>
          </div>
        </div>
        <div>
          <div className="SignatureDetal">
            <div>
              <img src="/images/DoteLogo.png" />
            </div>
            <div className="signatureContent">
              Create signature templates with your customize message.
            </div>
          </div>
          <div className="SignatureDetal">
            <div>
              <img src="/images/DoteLogo.png" />
            </div>
            <div className="signatureContent">
              Choose to which departments you want to assign your signature
              templates.
            </div>
          </div>
          <div className="SignatureDetal">
            <div>
              <img src="/images/DoteLogo.png" />
            </div>
            <div className="signatureContent">
              Assign teammates to departments Teammates will inherit the
              templates to their related department.
            </div>
          </div>
          <div className="Signature__Card_Main">
            <div
              onClick={() => {
                setPopupOpen(true);
              }}
              className="CreateSignature"
            >
              <div className="circlegole">
                <img src="/images/Vector.png" />
              </div>
              <div
                onClick={() => {
                  setPopupOpen(true);
                }}
                className="contentCreate"
              >
                Create New
              </div>
            </div>
            {arr.map((e, i) => (
              <div>
                <SignatureCard
                  key={i}
                  Email={e.Email}
                  content={e.content}
                  EmailEnd={e.EmailEnd}
                  image={e.image}
                  endContentOne={e.endContentOne}
                  endContentTwo={e.endContentTwo}
                  signatureTemplateCount={e.signatureTemplateCount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignatureBuilder;
