import React from "react";
import { Carousel } from "antd";
import "./Css/sigil.css";
import slides1 from "./img/Slides.png";

const backgroundStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "980px",
  backgroundColor: "rgba(255, 255, 255, 1)",
};

const sliderStyle = {
  width: "1000px",
  height: "741px",
  // boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.25)",
};

const imgStyle = {
  maxWidth: "100%",
  maxHeight: "741px",
  display: "block",
  margin: "0 auto",
};

const Slides = () => (
  <div style={backgroundStyle} className="Slides-back">
    <div style={sliderStyle}>
      <Carousel autoplay className="slides-content">
        <div>
          <h3 style={{ textAlign: "center" }}>
           1. Add your employee data directly from email provider or via CSV{" "}
            <br />
            2. Create departments with different co workers
          </h3>
          <br />
          <img src={slides1} alt="Slide 1" style={imgStyle} />
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
           1. Choose Our Customizable Templates with Various Color, Font and Icon
            Options. <br />
           2. Boost Your Marketing Efforts by Adding Call to Action or Promotional
            Banners,
          </h3>
          <img src={slides1} alt="Slide 2" style={imgStyle} />
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
           1. Sync your customer list and map contacts into interests. <br />
           2. Deploy different signatures banners for each interest.
          </h3>
          <img src={slides1} alt="Slide 3" style={imgStyle} />
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
          1. Update email signatures in real time. <br />
            2. Make your desired changes to the email signatures and deploy it
            across the department and see the changes happen in real time.
          </h3>
          <img src={slides1} alt="Slide 4" style={imgStyle} />
        </div>
      </Carousel>
    </div>
  </div>
);

export default Slides;
