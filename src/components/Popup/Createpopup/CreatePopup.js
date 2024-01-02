import {useState} from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate } from "react-router-dom";
import "./CreatePopup.css";

function CreatePopup(props) {
  const [templateName, setTemplateName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setTemplateName(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true); // Set loading state
    // Simulate an API call or any other processing time
    setTimeout(() => {
      setLoading(false);
      props.onSubmit(templateName);
      navigate(`/dashboard/createsignature/${templateName}`);
    }, 1500); // Simulated delay of 1.5 seconds for demonstration purposes
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <>
      <div className="popupbackground">
        <div className="popupMainBox">
          <div className="popupContent">
            <div className="PopusHeading">{props.popupheading}</div>
            <div className="poppPera">{props.popuspera}</div>
            <div className="popupValidation">
              Must be between 3 and 25 characters max.
            </div>
            <div>
              <input
                className="input px-2"
                type="text"
                placeholder={props.popusinputplaceholdername}
                value={templateName}
                onChange={handleInputChange}
                // onChange={(event) => props?.onChange(event)}
              />
            </div>
            
            <div className="buttonbox">
              <button disabled={props?.loading} onClick={props.onClose} className="buttonCancel">
                {props?.loading ? <BeatLoader
                  color={"#fff"}
                  loading={props?.loading}
                  cssOverride={override}
                  size={16}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                /> : "Cancel"}
              </button>
              <button disabled={props?.loading} className="buttonCreate" onClick={handleSubmit}>     
              {props?.loading ? <BeatLoader
                color={"#fff"}
                loading={props?.loading}
                cssOverride={override}
                size={16}
                aria-label="Loading Spinner"
                data-testid="loader"
              /> : "Create"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePopup;
