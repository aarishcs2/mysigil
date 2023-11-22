import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Image from "../../../assets/Images/default.jpeg";
import { Checkbox } from "antd/lib";
import Signature from "../../../components/Card/Signature";
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
      <div className="p-3 create-depatment-header">
        <div className="d-flex  w-100 d-flex justify-content-between ">
          <div className="text-start w-100">
            <h3 className="main-heading mb-0">Create department</h3>
            <p className="para">Manage Co-Workers Easily for each Department</p>
          </div>
          <div className="full-page-wizard-navigation-buttons d-flex  ml-auto">
            <div id="header-wizard-navigation-next-button-root" />
            <div className="d-flex">
              {step === 1 ? (
                ""
              ) : (
                <>
                  {" "}
                  <div
                    className="btn-primary-outline h-40 me-2"
                    onClick={handlePrevious}
                  >
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
                    className=" btn-primary h-40 "
                    onClick={handleNext}
                  >
                    <strong>Next</strong>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="">
            <span
              className="no-div"
              style={{ color: step === 1 ? " #065AD8" : "" }}
            >
              Step 1
            </span>
            <span
              className="step-text ps-1"
              style={{ color: step === 1 ? " #065AD8" : "" }}
            >
              Name Your Department
            </span>
            <span>
              <Icon icon="la:angle-right" />
            </span>
          </div>
          <div className="ms-3">
            <span
              className="no-div"
              style={{ color: step === 2 ? " #065AD8" : "" }}
            >
              Step 2
            </span>
            <span
              className="step-text ps-1"
              style={{ color: step === 2 ? " #065AD8" : "" }}
            >
              Assign your Co-Workers
            </span>
            <span>
              <Icon icon="la:angle-right" />
            </span>
          </div>
          <div className="ms-3">
            <span
              className="no-div"
              style={{ color: step === 3 ? " #065AD8" : "" }}
            >
              Step 3
            </span>
            <span
              className="step-text ps-1"
              style={{ color: step === 3 ? " #065AD8" : "" }}
            >
              {" "}
              Select Signature and Preview
            </span>
          </div>
        </div>
      </div>
      <div>
        {step === 1 && (
          <div>
            <div className="row w-100  justify-content-center mt-3 step-div mx-2  py-lg-3 ">
              <div className="col-md-6 p-3 shadow-box my-5">
                <form className="name">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      // style={{ width:"150%"}}
                      className="form-control mb-3"
                      id="Unite Name"
                      placeholder="Must be between 3 and 25 characters max."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      name="country"
                      id="country"
                      placeholder="Country"
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
                      placeholder="(GMT+5:30)"
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
            <div className="mt-3 step-div p-3   ">
              <p className="para">
                Select Co-Worker’s Emails to Assign to (Dept name)
              </p>
              <input
                type="search"
                placeholder="Search email, job position, aliases"
                className="input-search "
              />
              <div className="row mt-3">
                <div className="col-6">
                  <div className="scroll-y">
                    <div className="d-flex px-3 py-2 pt-3">
                      <Checkbox />

                      <input
                        type="search"
                        placeholder="Select All"
                        className="input-select-all px-2 ms-2"
                      />
                    </div>
                    <div className="d-flex px-3 py-2 mt-2 ">
                      <Checkbox className="me-2" />
                      <img src={Image} alt="" className="user" />
                      <div className="ms-2">
                        <p className="mt-1 name">Jay sethi</p>
                        <span className="e-mail">jaysethi68@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="scroll-y">
                    <p className="px-3 py-2 pt-3">
                      5 Co-Workers Emails Selected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="mt-3 step-div p-3   ">
              <div className="row mt-3">
                <div className="col-6">
                  <p className="para mb-0">
                    Select the department's signature template
                  </p>
                  <p className="down-para">
                    Choose an existing template now or create one later.All
                    teammate signatures for this department will be create based
                    on this signature template.
                  </p>

                  <div className="scroll-y p-3">
                    <Signature />
                  </div>
                </div>
                <div className="col-6">
                  <p className="para mb-0">Preview your selected Template</p>
                  <p className="down-para">
                    Preview your selected template now or create one later. All
                    teammate signatures for this department will be created
                    based on this signature template.
                  </p>
                  <div className="scroll-y p-3 ">
                    <Signature />
                    <p className=" py-2 pt-3 down-para">
                      ​ accounts@gnfinternational.com
                    </p>{" "}
                    <p className=" py-2 pt-3 down-para">
                      Sadbhav Complex, 1st floor, Drive In Rd, Ahmedabad,
                      Gujarat 380059 nal.com{" "}
                    </p>
                    <p className=" py-2 pt-3 down-para">
                      The information contained in this electronic message and
                      any other attachment to this message are intended solely
                      for the addressee and may contain information that is
                      confidential, privileged and exempt from disclosure under
                      applicable law. If you are not the intended recipient, you
                      are hereby formally notified that any use, copying or
                      distribution of this e-mail, in whole or in part, is
                      strictly prohibited. Please immediately notify the sender
                      by return e-mail and delete all copies of this e-mail and
                      any attachments from your system. Any views or opinions
                      presented in this email are solely those of the author and
                      do not necessarily represent those of the company.
                    </p>
                    <div className="d-flex justify-content-end w-100 pe-3">
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className=" btn-primary h-40 "
                        onClick={handleNext}
                      >
                        <strong>Deploy</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
