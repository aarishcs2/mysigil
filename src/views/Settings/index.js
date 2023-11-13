import { PlusCircleTwoTone } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Col, Row, Switch, Tabs } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminsTable from "../../components/Popup/AdminsTable";
import DomainTable from "../../components/Popup/DomainTable";
import Integrations from "./Integrations/Integrations";

import { message, Upload } from "antd";

export default function Settings() {
  // upload file
  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  // Select
  // const onChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  // const onSearch = (value) => {
  //   console.log("search:", value);
  // };

  // Filter `option.label` match the user type `input`
  // const filterOption = (input, option) =>
  //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  // toggle displayed
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isDisplayed1, setIsDisplayed1] = useState(false);
  const [ismodal1, setIsModal1] = useState(false);
  const [ismodal2, setIsModal2] = useState(false);
  const [ismodal3, setIsModal3] = useState(false);

  const toggleModal1 = () => {
    setIsModal1(true);
  };
  const toggleModal3 = () => {
    setIsModal3(true);
  };

  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };
  const toggleDisplay1 = () => {
    setIsDisplayed1(!isDisplayed1);
  };

  const items = [
    {
      key: "1",
      label: "Workspace",
      children: (
        <>
          <Row gutter={[24, 0]}>
            <Col xs={24} lg={12}>
              <h4 className="mt-4 mb-2">Workspace</h4>
              <p>Personalize your workspace</p>
              <div className="shadow-box-level-2">
                <Row align={"middle"}>
                  <Col xs={5}>
                    {" "}
                    <div className="letter-btn-card">Y</div>
                  </Col>
                  <Col xs={15}>Your Workspace</Col>
                  <Col xs={4}>
                    <b
                      className="color-primary pointer"
                      onClick={toggleDisplay}>
                      Edit
                    </b>
                  </Col>
                </Row>
              </div>
              {isDisplayed && (
                <div className="shadow-box-level-2 mt-3">
                  <div className="form-group">
                    <div
                      className="image-drop-zone"
                      style={{ width: 170, height: 170 }}>
                      <Upload {...props}>
                        <div className="image-drop-zone-inner p-3">
                          <div className="d-flex flex-column align-items-center justify-content-end h-100 ">
                            <Icon
                              icon="ri:file-upload-line"
                              className="color-primary mt-3 mb-1"
                            />
                            <div className="color-content-dark text-s font-weight-bold mt-1">
                              Workspace picture
                            </div>
                            <div className="color-content-subtle text-xxs mb-1 mt-1">
                              JPG - PNG - GIF - 5MB
                            </div>{" "}
                          </div>
                        </div>
                      </Upload>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="">Workspace name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Your Workspace"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-end mt-4">
                    <Link
                      to="/"
                      onClick={toggleDisplay}
                      className="text-xs mr-5 color-content-dark me-2">
                      Cancel
                    </Link>
                    <Link to="/">Save</Link>
                  </div>
                </div>
              )}

              <h4 className="mt-4 mb-2">Delete workspace</h4>
              <Link
                className="color-red-link"
                onClick={() => setIsModal2(true)}>
                <b>Delete My workspace </b>
              </Link>
            </Col>
            <Col xs={24} lg={12}>
              <h4 className="mt-4 mb-2">
                Tracking pixel <Switch defaultChecked />
              </h4>
              <p className="mb-3">
                Turn off or turn on the tracking pixel in your email signature.
                <br className="mb-2 mt-3" />
                By turning off the pixel tracking you
                <b>
                  {" "}
                  won't be able to analyze the conversion rate of your banners
                  and call to Actions
                </b>
              </p>
              <h4 className="mt-5 mb-2">
                Scribe branding <Switch defaultChecked />
              </h4>
              <p className="mb-3">
                Turn off the Made with Scribe branding in your signature.
              </p>
            </Col>
          </Row>
        </>
      ),
    },
    {
      key: "2",
      label: "Admins",
      children: (
        <>
          <div className="mt-4 mb-2">
            <h4> Admins</h4>
            <p>
              Admins have access to all features in Scribe while co-workers only
              have access to their signature and analytics.
            </p>
          </div>
          <Link
            className="text-decoration-none custom-link"
            onClick={toggleModal3}
            to="/">
            <PlusCircleTwoTone className="me-2" />
            Invite new admin
          </Link>
          <AdminsTable />
        </>
      ),
    },
    {
      key: "3",
      label: "Integrations",
      children: <>
      
      
      <Integrations />
      </>,
    },
    {
      key: "4",
      label: "Domains",
      children: (
        <>
          <div className="mt-4 mb-2">
            <h4> Domains</h4>
            <p>
              We automatically import you Google Workspace domains. Scribe will
              import co-workers from all enabled domains <br />
              You can configure<b> sending domains </b> to improve your emails
              <b> deliverability.</b>
            </p>
          </div>
          <div>
           
            <DomainTable />
          </div>
        </>
      ),
    },
    {
      key: "5",
      label: "Subscription",
      children: (
        <>
          <div className="row">
            <div className="col-md-4">
              <h4 className="mt-4 mb-2">Scribe plans</h4>
              <p className="mb-3">
                Scribe free plan for maximum 5 co-workers with signature
                <br />
                <span className="color-primary mt-1">
                  0 co-workers with signature installed
                </span>
              </p>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="mr-3 px-5 btn btn-primary no-radius">
                <strong>Upgrade</strong>
              </button>
            </div>
          </div>

          <Row gutter={[24, 0]}>
            <Col xs={24} lg={10}>
              <h4 className="mt-4 mb-2">Billing info</h4>
              {isDisplayed1 ? (
                <div className="shadow-box-level-2 mt-4 mb-2">
                  <div className="billing-address-resume">
                    <form className="application-form">
                      <div className="">
                        <h4 className="color-content-dark">Address</h4>
                        <div className="form-group">
                          <input
                            placeholder="Company name"
                            name="company_name"
                            mt-3
                            className="form-control mt-3"
                            aria-invalid="false"
                            defaultValue="Your Workspace"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            placeholder="Email"
                            name="email"
                            type="text"
                            className="form-control mt-3"
                            aria-invalid="false"
                            defaultValue="souharaees@gmail.com"
                          />
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                placeholder="Street name"
                                name="street_name"
                                type="text"
                                className="form-control mt-3"
                                aria-invalid="false"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                placeholder="Number"
                                name="street_number"
                                type="text"
                                className="form-control mt-3"
                                aria-invalid="false"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                placeholder="Box"
                                name="box_number"
                                type="text"
                                className="form-control mt-3"
                                aria-invalid="false"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                placeholder="Zip code"
                                name="zip_code"
                                type="text"
                                className="form-control mt-3"
                                aria-invalid="false"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                placeholder="City"
                                name="city"
                                type="text"
                                className="form-control mt-3"
                                aria-invalid="false"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="scribe-custom-select form-group mt-3">
                        
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      name="country"
                      id="country"
                      className="form-control mb-3"
                    >
                      <option value="volvo">Aroba</option>
                      <option value="saab">Pakitan</option>
                      <option value="mercedes">U A E</option>
                    </select>
                  </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-4 justify-content-end">
                        <div className="mt-2">
                          <Link
                            to="/"
                            className="text-xs mr-5 color-content-dark flex-fill text-right me-3"
                            onClick={toggleDisplay1}>
                            Cancel
                          </Link>
                          <Link to="/">Save</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <>
                  <div className="shadow-box-level-2 mt-4">
                    <div className="billing-address-resume">
                      <Icon
                        icon="cil:pencil"
                        className="color-primary icon-edit pointer"
                        onClick={toggleDisplay1}
                      />
                      <h6>Billing email</h6>
                      <p>No billing email</p>
                      <h6>Billing address</h6>
                      <p>No billing address</p>
                    </div>
                  </div>
                </>
              )}{" "}
            </Col>
            <Col xs={24} lg={14}>
              <h4 className="mt-4 mb-4">Invoices and credit notes</h4>{" "}
              <div className="shadow-box-level-2 d-flex justify-content-center align-items-center">
                <p className="mb-0"> No invoices or credit notes yet</p>
              </div>
            </Col>
          </Row>
        </>
      ),
    },
    {
      key: "6",
      label: "Single Sign-On",
      children: (
        <>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="mr-3 btn btn-primary no-radius"
            onClick={toggleModal1}>
            <strong> Activate single sign on</strong>
          </button>
        </>
      ),
    },
  ];
  return (
    <div>
      <h2>Settings</h2>
      <Tabs defaultActiveKey="1" items={items} />
      {/* Modal 1 */}
      {ismodal1 && (
        <>
          <div className="back-div">
            {" "}
            <div className="modal-body1 p-5">
              <div className="div-cut">
                <Icon
                  icon="maki:cross"
                  className="cross-btn"
                  onClick={() => setIsModal1(false)}
                />
              </div>
              <div className="px-md-5">
                {" "}
                <h2 className=" mb-3 text-center">Upgrade</h2>
                <span
                  className="emoji-in-circle emoji-in-circle-small mt-3 mb-3 mh-auto text-center"
                  role="img"
                  aria-label="success">
                  <div> 💌</div>
                </span>
                <div className="text-center">
                  <p>
                    {" "}
                    Single Sign-On is available for entreprise plan. <br />
                    Contact us to activate it
                  </p>
                  <br />
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="mr-3 px-5  btn btn-primary no-radius">
                    <strong>Upgrade</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}{" "}
      {/* Modal 1 */}
      {ismodal2 && (
        <>
          <div className="back-div">
            {" "}
            <div className="modal-body1 p-5">
              <div className="div-cut">
                <Icon
                  icon="maki:cross"
                  className="cross-btn"
                  onClick={() => setIsModal2(false)}
                />
              </div>
              <div className="px-md-5">
                <h2 className=" mb-3 text-center">
                  Your feedback are welcomed
                </h2>
                <span
                  className="emoji-in-circle emoji-in-circle-small mt-3 mb-3 mh-auto text-center"
                  role="img"
                  aria-label="success">
                  <div> 💌</div>
                </span>
                <div className="text-center">
                  <p>
                    {" "}
                    Tell us why you choose to delete your workspace and how
                    <br></br> we can improve your Scribe experience
                  </p>
                  <br />
                  <textarea
                    name="text"
                    rows="5"
                    className="mt-2 mb-2 form-control"
                    spellcheck="false"></textarea>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="mr-3 px-5 mt-2 btn  no-radius bg-red">
                    <strong>Delete My work</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}{" "}
      {/* Modal 3 */}
      {ismodal3 && (
        <>
          <div className="back-div">
            {" "}
            <div className="modal-body1 p-5">
              <div className="div-cut">
                <Icon
                  icon="maki:cross"
                  className="cross-btn"
                  onClick={() => setIsModal3(false)}
                />
              </div>
              <div className="px-md-4">
                {" "}
                <h2 className=" mb-3 text-center">Invite new admin</h2>
                <span
                  className="emoji-in-circle emoji-in-circle-small mt-3 mb-3 mh-auto text-center"
                  role="img"
                  aria-label="success">
                  <div> 💌</div>
                </span>
                <div className="text-center">
                  <p>
                    {" "}
                    Your new admin will receive an email <br />
                    Cwith a link to accept your invitation
                  </p>
                  <br />
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="firstName"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="lastName"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control mb-3"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="mr-3 px-5 btn btn-primary no-radius">
                      <strong>Invite</strong>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}{" "}
    </div>
  );
}
