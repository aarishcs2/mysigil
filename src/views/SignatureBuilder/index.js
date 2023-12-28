import "./index.css";
import { Icon } from "@iconify/react";
import SignatureCard from "../../components/SignatureCard/SignatureCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePopup from "../../components/Popup/Createpopup/CreatePopup";
import { fetchAlltemplates } from "../../api";

function SignatureBuilder() {
  const [templates, setTemplates] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetchAlltemplates();
        if (response) {
          const data = await response.data;
          console.log("Fetched templates:", data);
          setTemplates(data || []); // Assuming templates are returned in the 'templates' field of the response
        } else {
          // Handle error if fetch is unsuccessful
          console.error("Failed to fetch templates");
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    }

    fetchTemplates();
  }, []);

  return (
    <>
      {popupOpen ? (
        <CreatePopup
          popupheading="Create New Template"
          popuspera="Choose your signature template name"
          popusinputplaceholdername="Signature Template name"
          // onClick={() => setPopupOpen(false)}
          onSubmit={() => {
            
          }}
          onClose={() => {
            setPopupOpen(false)
          }}
          // onChange={(event) => setWorkSpaceName(event.target.value)}
        />
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

          <div className="row px-3" style={{backgroundColor: "white", borderRadius: '0.3rem'}}>
            {/* creatinf template  */}
            <div className="col-md-4">
              <div
                onClick={() => {
                  setPopupOpen(true);
                }}
                className="CreateSignature mt-4"
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
            </div>
              {/* displaying the templates  */}
              {templates.map((template, index) => (
                <div className="col-md-4">
                    <Link to={`/dashboard/Edit-template/${template._id}`}>
                      <div className="card w-100" key={index} style={{boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", borderRadius: '0.3rem'}}>
                        <div className="bg-light w-100 px-1 py-4" style={{boxShadow: "1px 1px 2px rgba(0,0,0,0.1)", borderRadius: '0.3rem'}} dangerouslySetInnerHTML={{ __html: template.html }}>
                          {/* This will render the HTML content of each template */}
                        </div>
                      </div>
                    </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignatureBuilder;