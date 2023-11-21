import React from "react";
import "./Css/sigil.css";
import { Carousel } from "antd";

import sigil from "./img/Sigil-1.png";
import brand1 from "./img/brand-1.png";
import brand2 from "./img/brand-3.png";
import brand3 from "./img/brand-4.png";
import slides1 from "./img/Slides.png";
import Setup from "./img/card-1.png";
import Design from "./img/card-2.png";
import Deploy from "./img/card-3.png";
import update from "./img/card-4.png";
import plane from "./img/card-5.png";
import machine_1 from "./img/Machine_1.png";
import machine_2 from "./img/Machine_2.png";
import machine_3 from "./img/Machine_3.png";
import google from "./img/google.png";
import load from "./img/load.png";
import pc from "./img/pc.png";
import social_1 from "./img/Social-1.png";
import social_2 from "./img/Social-2.png";
import social_3 from "./img/Social-3.png";
import social_4 from "./img/Social-4.png";
import logo_1 from "./img/logo-1.png";
import desktop from "./img/desktop.png";
import Support_1 from "./img/Support_1.png";

function Sigil() {
  const Card = ({ imageSrc, title }) => {
    return (
      <div className="card">
        <img src={imageSrc} alt={title} className="card-img" />
        <div className="card-text">{title}</div>
      </div>
    );
  };
  const Machine = ({ Machine, title }) => {
    return (
      <div className="Machine">
        <img src={Machine} alt={title} className="Machine-img" />
      </div>
    );
  };

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

  return (
    <>
      <div className="rectangle-sigil">
        <img src={sigil} alt="Sigil" className="sigil-image" />
        <h1 className="text-1">
          Trusted By <br /> World's Largest <br /> Groups
        </h1>
        <p className="text-2">
          Don't let a lackluster email <br /> signature hold you back!
        </p>
      </div>
      <div className="brand">
        <img src={brand1} alt="" className="brand-icon" />
        <img src={brand2} alt="" className="brand-icon" />
        <img src={brand3} alt="" className="brand-icon" />
      </div>
      <br />
      <div className="rectangle-sigil-1">
        <h1>
          Design Deploy & Update in <br /> less than 10 minutes
        </h1>
        <h3>
          Roll out email signature updates to your whole organization in a few
          simple clicks.
        </h3>
        {/* card */}
        <div className="card-container">
          <Card imageSrc={Setup} title="Setup" />
          <Card imageSrc={Design} title="Design" />
          <Card imageSrc={Deploy} title="Deploy" />
          <Card imageSrc={update} title="Update" />
        </div>
        {/* Slides */}
        <div style={backgroundStyle} className="Slides-back">
          <div style={sliderStyle}>
            <Carousel autoplay className="slides-content">
              <div>
                <h3 style={{ textAlign: "center" }}>
                  1. Add your employee data directly from email provider or via
                  CSV <br />
                  2. Create departments with different co workers
                </h3>
                <br />
                <img src={slides1} alt="Slide 1" style={imgStyle} />
              </div>
              <div>
                <h3 style={{ textAlign: "center" }}>
                  1. Choose Our Customizable Templates with Various Color, Font
                  and Icon Options. <br />
                  2. Boost Your Marketing Efforts by Adding Call to Action or
                  Promotional Banners,
                </h3>
                <img src={slides1} alt="Slide 2" style={imgStyle} />
              </div>
              <div>
                <h3 style={{ textAlign: "center" }}>
                  1. Sync your customer list and map contacts into interests.{" "}
                  <br />
                  2. Deploy different signatures banners for each interest.
                </h3>
                <img src={slides1} alt="Slide 3" style={imgStyle} />
              </div>
              <div>
                <h3 style={{ textAlign: "center" }}>
                  1. Update email signatures in real time. <br />
                  2. Make your desired changes to the email signatures and
                  deploy it across the department and see the changes happen in
                  real time.
                </h3>
                <img src={slides1} alt="Slide 4" style={imgStyle} />
              </div>
            </Carousel>
          </div>
        </div>

        {/* End Slides */}

        {/* Try SIGIL FOR FREE */}
        <div className="Machine">
          Transform your email <br /> Into a Revenue Machine
        </div>
        <div className="Revenue-Machine">
          <div></div>
          <Machine Machine={machine_1} title="Setup" />
          <h5 className="machine_text">Saturation of existing channels</h5>{" "}
          <br />
          <p className="machine_text_p">
            The saturation of online distribution channels leads to increased{" "}
            <br />
            customer acquisition costs and decreased click-through rates, making{" "}
            <br />
            it difficult to effectively reach and engage potential customers.
          </p>
          <br />
          <Machine Machine={machine_2} title="Setup" />
          <h5 className="machine_text">
            How can My Sigil help you leverage this?
          </h5>{" "}
          <br />
          <p className="machine_text_p">
            My Sigil turns your signature into a marketing channel with <br />
            marketing banners & CTA’s which you can update instantly, and we{" "}
            <br />
            take personalized marketing to a whole new level, you can sync your{" "}
            <br />
            contact list and map them into interest groups and set customized{" "}
            <br />
            banner for each interest which will make your emails laser targeted{" "}
            <br />
            and your signature banner will dynamically change based on the
            recipient.
          </p>
          <br />
          <Machine Machine={machine_3} title="Setup" />
          <h5 className="machine_text">
            The under leveraged and free one
          </h5>{" "}
          <br />
          <p className="machine_text_p">
            Email is something you and your team use everyday, On an average a{" "}
            <br />
            company of 10 co workers on an average send more than 2000 emails{" "}
            <br />
            per week, that is a lot of outreach which can be converting into new{" "}
            <br />
            customers or upselling existing ones.
          </p>
        </div>

        <div className="marketing">
          The average click-through rate for paid <br /> marketing channels
          across all industries
        </div>
        <div className="ads">
          <div>
            {" "}
            <h6>Facebook ads</h6>
            <h4>0.9%</h4>
          </div>
          <div>
            {" "}
            <h6>Google ads</h6>
            <h4>3.2%</h4>
          </div>
          <div>
            {" "}
            <h6>Linkedin ads</h6>
            <h4>0.35%</h4>
          </div>
          <div>
            {" "}
            <h6>Youtube ads</h6>
            <h4>5%</h4>
          </div>
          <div>
            {" "}
            <strong>
              <h6> My Sigil </h6>
            </strong>
            <h4>12%</h4>
          </div>
        </div>
        <div className="marketing">
          Calculate how many emails that company <br /> sends which could
          beleveraged into revenue.
        </div>
        {/* Card */}
        <div className="Card-Flex">
          <div className="Card-Calculate">
            <img src={Deploy} alt="" />
            <h2>10</h2>
            {/* <h5></h5> */}
            <p>Number of employees in your company</p>
          </div>
          <div className="Card-Calculate">
            <img src={plane} alt="" />
            <h2>30</h2>
            {/* <h5></h5> */}
            <p>Average emails sent per employee per day</p>
          </div>
          <div className="Card-Calculate">
            <img src={plane} alt="" />
            <h2>300</h2>
            {/* <h5></h5> */}
            <p>Total emails sent every day</p>
          </div>
          <div className="Card-Calculate">
            <img src={plane} alt="" />
            <h2>2100</h2>
            {/* <h5></h5> */}
            <p>Total emails sent in 1 week</p>
          </div>
        </div>
        <div className="appContainer">
          {" "}
          <button className="customButton">Be a cut above others</button>
        </div>
      </div>
      {/* Box coming soon google */}
      <div class="rectangle-Integrate">
        <h1>Integrate With Your Email Provider </h1>
        <h6>Automatically install and update organization email signatures</h6>
        <div className="Integrate">
          <div class="Integrate-card">
            <img src={google} alt="" />
            <h6>G workspace</h6>
          </div>
          <div class="Integrate-card">
            <img src={load} alt="" />
            <h6>Comming Soon</h6>
          </div>
          <div class="Integrate-card">
            <img src={load} alt="" />
            <h6>Comming Soon</h6>
          </div>
        </div>
      </div>
      {/* End */}
      {/*  */}
      {/*  */}
      {/* Copy Paste HTML code */}
      <div>
        <img src={pc} alt="" className="pc" />
        <div className="Copy">
          <h2 className="Copy-Paste">Copy Paste HTML code</h2>
          <p>
            We have got your covered for the <br /> mailing providers which do
            not <br />
            support integration in a few easy steps
          </p>
        </div>
        <div className="step">
          <div className="step-no">
            <h6>STEP 1</h6>
            <p>Simply import your co workers via Excel.</p>
          </div>
          <div className="step-no">
            <h6>STEP 1</h6>
            <p>Simply import your co workers via Excel.</p>
          </div>
          <div className="step-no">
            <h6>STEP 1</h6>
            <p>Simply import your co workers via Excel.</p>
          </div>
          <div className="step-no">
            <h6>STEP 1</h6>
            <p>Simply import your co workers via Excel.</p>
          </div>

          <div className="card-social">
            <div className="social">
              <img src={social_1} alt="" />
              <h6>Gmail</h6>
            </div>
            <div className="social">
              <img src={social_2} alt="" />
              <h6>MacMail</h6>
            </div>
            <div className="social">
              <img src={social_3} alt="" />
              <h6>ThunderBird</h6>
            </div>
            <div className="social">
              <img src={social_4} alt="" />
              <h6>Yahoo</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="MY-SIGI">
        <div>
          <img src={logo_1} alt="" className="logo_1" />
        </div>

        <h1 className="text-sigil">
          See What <br /> People SayAbout <br /> MY SIGIL
        </h1>

        <div className="Client-card">
          <div className="Client">
            <p>
              "Before using your system, I was spending hours trying to generate
              leads on my own. But with your done-for-you system, I was able to
              streamline my process and generate qualified leads faster than
              ever before. I highly recommend it to anyone looking to grow their
              business."
            </p>
          </div>
          <div className="Client">
            "I was skeptical at first, but after trying your funnel templates, I
            was blown away by the results. Not only was I able to generate more
            leads, but the quality of those leads was much higher. I've already
            recommended it to several of my colleagues."
          </div>
          <div className="Client">
            " Game-changing landing pages for my business. I was able to scale
            my lead generation efforts quickly and easily, and I've seen a
            significant increase in leads and sales as a result. Thank you for
            making it so simple!" I've already recommended it to several of my
            colleagues."
          </div>
        </div>
      </div>

      {/* Your Success and Data Security are Important to us */}
      <div className="Data-Security">
        <img src={desktop} alt="" />
        <h2>
          Your Success and Data <br /> Security are Important to us
        </h2>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}

      <div className="Colume">
        <div className="Colume-1">
          <img src={Support_1} alt="" />
          <h4> Dedicated Tech Support</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud
          </p>
        </div>
        <div className="Colume-1">
          <img src={Deploy} alt="" />
          <h3>Integration and Onboarding</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
        <div className="Colume-1">
          <img src={plane} alt="" />
          <h4>No Email Hosting</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
        <div className="Colume-1">
          <img src={plane} alt="" />
          <h4>GDPR & Compliances</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
      </div>
      {/*  */}
      {/*  */}
    </>
  );
}

export default Sigil;
