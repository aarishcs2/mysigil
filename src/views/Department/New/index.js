import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function New() {
    const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  return (
    <div>
      {/* create depart multi tep form */}
      <div className="d-flex align-items-center w-100 d-flex justify-content-between bg-white py-3 px-3">
        <div className="align-self-start mt-2">
          {/* <Link to="/">
            <img
              src="https://app.scribe-mail.com/static/media/logo-medium.07f95266.svg"
              alt="Scribe logo"
              className="logo"
            />
          </Link> */}
        </div>
        <div className="text-start w-100 ps-5">
          <h3  className="full-page-wizard-navigation-title mb-2">
            Create department
          </h3>
          <div className="d-flex align-items-center">
            <div className="">
              <span
                className="no-div"
                style={{ backgroundColor: step === 1 ? "#192eee" : "" }}
              >
                1
              </span>
              <span
                className="step-text"
                style={{ color: step === 1 ? "#050505" : "" }}
              >
                Name{" "}
              </span>
              <span>
                <Icon icon="la:angle-right" />
              </span>
            </div>
            <div className="ms-3">
              <span
                className="no-div"
                style={{ backgroundColor: step === 2 ? "#192eee" : "" }}
              >
                2
              </span>
              <span
                className="step-text"
                style={{ color: step === 2 ? "#050505" : "" }}
              >
                Co-workers{" "}
              </span>
              <span>
                <Icon icon="la:angle-right" />
              </span>
            </div>
            <div className="ms-3">
              <span
                className="no-div"
                style={{ backgroundColor: step === 3 ? "#192eee" : "" }}
              >
                3
              </span>
              <span
                className="step-text"
                style={{ color: step === 3 ? "#050505" : "" }}
              >
                {" "}
                Preview{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="full-page-wizard-navigation-buttons d-flex align-items-center ml-auto">
          <div id="header-wizard-navigation-next-button-root" />
          <div className="d-flex align-items-center ">
            {step === 1 ? (
              ""
            ) : (
              <>
                {" "}
                <div className="pointer " onClick={handlePrevious}>
                  Back
                </div>
              </>
            )}
            {step === 3 ? (
              ""
            ) : (
              <>
                {" "}
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="mr-3 ms-2 px-5 btn btn-primary no-radius"
                  onClick={handleNext}
                >
                  <strong>Next</strong>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        {step === 1 && (
          <div>
            <div className="row  justify-content-center my-5">
              <div className="col-md-6 p-3 shadow-box mt-5">
                <form className="name">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      // style={{ width:"150%"}}
                      className="form-control mb-3"
                      id="Unite Name"
                      placeholder="Marketing"
                      required
                    />
                  </div>
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
                  <div className="form-group">
                    <label>Time Zone</label>
                    <select
                      name="country"
                      id="country"
                      className="form-control mb-3"
                    >
                      <option value="volvo"> Karachi (GMT+5)</option>
                      <option value="saab"> Karachi (GMT+5)</option>
                      <option value="mercedes"> Karachi (GMT+5)</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            {open ? (
              <div>
                <div className="row">
                  <p className="mb-5 mt-4">
                    Drag and drop co-workers to add to <b>finance </b>{" "}
                    department
                  </p>
                  <div className="col-6">
                    <div className="inner-div py-1">
                      <p>
                        <b>Your company</b> co-workers emails
                      </p>
                      <b className="text-primary">
                        {" "}
                        <Icon icon="icons8:plus" className="me-2 mb-1 " />
                        Add Email
                      </b>
                    </div>
                    <div className="div-top px-2  pt-2">
                      <div className="w-100">
                        <form className="name ">
                          <div className="form-group">
                            <input
                              type="text"
                              // style={{ width:"150%"}}
                              className="form-control"
                              id="Search..."
                              placeholder="Search..."
                              required
                            />
                          </div>
                        </form>
                      </div>
                      <div className="filter-icon">
                        {" "}
                        <Icon icon="carbon:filter" />
                      </div>
                    </div>
                    <div className="div-bottom mt-3">
                      <div className="inner-div p-3">
                        <p>No co-worker emails</p>
                        <b>Add All</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="inner-div py-1">
                      <p>
                        <b>finance department</b> co-workers emails
                      </p>
                    </div>
                    <div className="div-top px-2  pt-2">
                      <div className="w-100">
                        <form className="name ">
                          <div className="form-group">
                            <input
                              type="text"
                              // style={{ width:"150%"}}
                              className="form-control"
                              id="Search..."
                              placeholder="Search..."
                              required
                            />
                          </div>
                        </form>
                      </div>
                      <div className="filter-icon">
                        {" "}
                        <Icon icon="carbon:filter" />
                      </div>
                    </div>
                    <div className="div-bottom-right mt-3">
                      <div className="inner-div p-3">
                        <p>No co-worker emails</p>
                        <b className="text-primary">Remove All</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h4 className="mt-4 mb-2">
                  From where would you like to import your co-workers?
                </h4>

                <p className="mb-3">
                  Start to connect a main data-source with Scribe to sync your
                  company co-workers emails and information. <br />
                  This will allow you to automatically complete each of your
                  co-workers signatures with their correct personal information.
                </p>
                <div className="row">
                  <div className="col-10">
                    <div className="row mt-3">
                      <div className="col-6">
                        <div className="import-card">
                          <img src="https://cdn.scribe-mail.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL2pZQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--73cea45538cc0849b02a63b30b4aca7c25a21c83/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2hwQWZ4cEFmeDdCam9QWW1GamEyZHliM1Z1WkdrQSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--6c8dd3686ba98ef7860c3120b9f67ef1d22433b1/main_data_source_google_workspace.png" alt=""></img>
                          <div class="ps-3 text-left ">
                            <b class="mb-0">Google Workspace Directory</b>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="import-card">
                          <img src="https://cdn.scribe-mail.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL3JZQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9cd320cb3b36a0547303b3642fee52b2b58d1f3d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2hwQWZ4cEFmeDdCam9QWW1GamEyZHliM1Z1WkdrQSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--6c8dd3686ba98ef7860c3120b9f67ef1d22433b1/main_data_source_azure.png" alt=""></img>
                          <div class="ps-3 text-left ">
                            <b class="mb-0">Microsoft Azure Active Directory</b>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mt-3">
                        <div
                          className="import-card"
                          onClick={() => setOpen(true)}
                        >
                          <img src="https://cdn.scribe-mail.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL2pZQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--73cea45538cc0849b02a63b30b4aca7c25a21c83/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2hwQWZ4cEFmeDdCam9QWW1GamEyZHliM1Z1WkdrQSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--6c8dd3686ba98ef7860c3120b9f67ef1d22433b1/main_data_source_google_workspace.png" alt=""></img>
                          <div class="ps-3 text-left ">
                            <b class="mb-0">Add co-workers manually</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {step === 3 && (
          <div className="d-flex justify-content-center flex-column mt-5">
            <h6 className="mt-5 mb-2 my-5 text-center">
              Add co-worker emails to your department to preview their signature
            </h6>
            <div className="text-center">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="mr-3 mt-3 btn btn-primary no-radius"
              >
                <Icon icon="icons8:plus" className="me-2 mb-1 " />
                <strong>Add co-workers to Finance department</strong>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
