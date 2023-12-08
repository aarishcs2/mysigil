import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import Image from "../../../assets/Images/default.jpeg";
import { Checkbox } from "antd/lib";
import Signature from "../../../components/Card/Signature";
import { Coutries, TimeZone } from "../../../api";
// import moment from "moment-timezone";
import axios from "axios";
export default function New() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesValue, setCountriesValue] = useState("");
  const [countryError, setCountryError] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [timeZoneError, setTimeZoneError] = useState("");
  const [timezoneVal, setTimezoneVal] = useState("");

  const listdata = [
    {
      name: "Mohtashimkhatri",
      Email: "mohtashimkhatri@gmail.com",
      Image:
        "https://tse3.mm.bing.net/th?id=OIP.3BztjbXkPT-g9mgcn3NgSgHaLG&pid=Api&P=0&h=220",
      id: 1,
    },
    {
      name: "MugheesKhatri",
      Email: "MugheesKhatri@gmail.com",
      Image:
        "https://tse3.mm.bing.net/th?id=OIP.3BztjbXkPT-g9mgcn3NgSgHaLG&pid=Api&P=0&h=220",
      id: 2,
    },
    {
      name: "Ubaid",
      Email: "Ubaid@gmail.com",
      Image:
        "https://tse3.mm.bing.net/th?id=OIP.3BztjbXkPT-g9mgcn3NgSgHaLG&pid=Api&P=0&h=220",
      id: 3,
    },
    {
      name: "Shahbaz",
      Email: "Shahbaz@gmail.com",
      Image:
        "https://tse3.mm.bing.net/th?id=OIP.3BztjbXkPT-g9mgcn3NgSgHaLG&pid=Api&P=0&h=220",
      id: 4,
    },
    {
      name: "abc",
      Email: "abc@gmail.com",
      Image:
        "https://tse3.mm.bing.net/th?id=OIP.3BztjbXkPT-g9mgcn3NgSgHaLG&pid=Api&P=0&h=220",
      id: 5,
    },
    {
      name: "xyz",
      Email: "xyz@gmail.com",
      Image:
        "https://tse3.mm.bing.net/th?id=OIP.3BztjbXkPT-g9mgcn3NgSgHaLG&pid=Api&P=0&h=220",
      id: 6,
    },
  ];
  // const timezonesForCountry = getTimezonesForCountry(country);
  const [data, setData] = useState(listdata);
  const [timzone, setTimezone] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [emailCoValidation, setEmailCoValidation] = useState("");
  const handletimzone = async () => {
    axios.get(`http://worldtimeapi.org/api/timezone`).then((res, e) => {
      setTimezone(res.data);
    });
  };
  const handleCheckboxChange = (itemId, itemName, itemEmail, itemImage) => {
    const isItemSelected = selectedItems.some((item) => item.id === itemId);
    if (isItemSelected) {
      const Filterdata = selectedItems.filter((item) => item.id !== itemId);
      const updatedData = selectedItems.filter((item) => item.id === itemId);
      setData([...data, updatedData[0]]);
      setSelectedItems(Filterdata);
    } else {
      setSelectedItems([
        ...selectedItems,
        { id: itemId, name: itemName, Email: itemEmail, Image: itemImage },
      ]);
      const updatedData = data.filter((item) => item.id !== itemId);
      setData(updatedData);
    }
  };
  const countryapi = async () => {
    const countrydata = await Coutries();
    setCountries(countrydata.data);
  };
  const handleNext = () => {
    if (inputValue.length < 3 || inputValue.length > 25) {
      setNameError(
        "Name should be a minimum of 3 letters and a maximum of 25 characters."
      );
    } else if (countriesValue.length === 0) {
      setCountryError("Select Country");
      setNameError("");
    } else if (timezoneVal.length === 0) {
      setTimeZoneError("Select timezone");
      setCountryError("");
      setNameError("");
    } else {
      setTimeZoneError("");
      setCountryError("");
      setNameError("");
      if (step === 2) {
        if (selectedItems.length > 0) {
          setStep(step + 1);
          setEmailCoValidation("");
        } else {
          setEmailCoValidation("Minimum one co worker select");
        }
      } else {
        setStep(step + 1);
      }
    }
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };
  useEffect(() => {
    countryapi();
    handletimzone();
  }, []);

  const handleSelectAllChange = () => {
    setSelectedItems((prevData) => [...prevData, ...data]);
    setData([]);
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
                      onChange={(e) => setInputValue(e.target.value)}
                      className="form-control mb-3"
                      id="Unite Name"
                      placeholder="Must be between 3 letter and 25 characters max."
                      required
                    />
                    {nameError && (
                      <p className="text-danger p-0">{nameError}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      onChange={(e) => {
                        let word = e.target.value;
                        setCountriesValue(word);
                      }}
                      name="country"
                      id="country"
                      placeholder="Country"
                      className="form-control mb-3"
                    >
                      {countries.map((country) => (
                        <option key={country.cca2} value={country.name.common}>
                          {country.name.common}
                        </option>
                      ))}
                    </select>
                    {countryError && (
                      <p className="text-danger p-0">{countryError}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Time Zone</label>
                    <select
                      name="country"
                      id="country"
                      placeholder="(GMT+5:30)"
                      onChange={(e) => {
                        setTimezoneVal(e.target.value);
                      }}
                      className="form-control mb-3"
                    >
                      {timzone.map((e, i) => {
                        return <option>{e}</option>;
                      })}
                    </select>
                    {timeZoneError && (
                      <p className="text-danger p-0">{timeZoneError}</p>
                    )}
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
                onChange={(e) => {
                  let arr = data.filter((x, i) => {
                    if (
                      x.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    ) {
                      return x;
                    } else if (
                      x.Email.toLowerCase().includes(
                        e.target.value.toLowerCase()
                      )
                    ) {
                      return x;
                    }
                  });
                  setFilterData(arr);
                }}
                placeholder="Search email, job position, aliases"
                className="input-search "
              />
              <div className="row mt-3">
                <div className="col-6">
                  <div className="scroll-y">
                    <div className="d-flex px-3 py-2 pt-3">
                      <Checkbox
                        checked={selectedItems.length === data.length}
                        onChange={(event) => handleSelectAllChange()}
                      />
                      <p className="px-3 py-2 pt-3">Select All</p>
                    </div>
                    {filterData.length > 0
                      ? filterData.map((item, i) => {
                          return (
                            <div className="d-flex px-3 py-2 mt-2 ">
                              <Checkbox
                                id={item.id}
                                // checked={selectedItems.some(
                                //   (selectedItem) => selectedItem.id === item.id
                                // )}
                                // onChange={() =>
                                //   handleCheckboxChange(
                                //     item.id,
                                //     item.name,
                                //     item.Email,
                                //     item.Image
                                //   )
                                // }
                                checked={selectedItems.some(
                                  (selectedItem) => selectedItem.id === item.id
                                )}
                                onChange={() =>
                                  handleCheckboxChange(
                                    item.id,
                                    item.name,
                                    item.Email,
                                    item.Image
                                  )
                                }
                                className="me-2"
                              />
                              <img src={item.Image} alt="" className="user" />
                              <div className="ms-2">
                                <p className="mt-1 name">{item.name}</p>
                                <span className="e-mail">{item.Email}</span>
                              </div>
                            </div>
                          );
                        })
                      : data.map((item, i) => {
                          return (
                            <div className="d-flex px-3 py-2 mt-2 ">
                              <Checkbox
                                id={item.id}
                                checked={selectedItems.some(
                                  (selectedItem) => selectedItem.id === item.id
                                )}
                                onChange={() =>
                                  handleCheckboxChange(
                                    item.id,
                                    item.name,
                                    item.Email,
                                    item.Image
                                  )
                                }
                                className="me-2"
                              />
                              <img src={item.Image} alt="" className="user" />
                              <div className="ms-2">
                                <p className="mt-1 name">{item.name}</p>
                                <span className="e-mail">{item.Email}</span>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                </div>
                <div className="col-6">
                  <div className="scroll-y">
                    <p className="px-3 pt-2 pt-3">
                      {selectedItems.length} Co-Workers Emails Selected
                    </p>
                    {emailCoValidation && (
                      <p className="text-danger px-3 pt-3">
                        {emailCoValidation}
                      </p>
                    )}
                    {selectedItems.map((item, e) => {
                      return (
                        <div className="d-flex px-3 py-2 mt-2 ">
                          <Checkbox
                            id={item.id}
                            checked={selectedItems.some(
                              (selectedItem) => selectedItem.id === item.id
                            )}
                            onChange={() =>
                              handleCheckboxChange(
                                item.id,
                                item.name,
                                item.Email,
                                item.Image
                              )
                            }
                            className="me-2"
                          />
                          <img src={item.Image} alt="" className="user" />
                          <div className="ms-2">
                            <p className="mt-1 name">{item.name}</p>
                            <span className="e-mail">{item.Email}</span>
                          </div>
                        </div>
                      );
                    })}
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
                      accounts@gnfinternational.com
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
