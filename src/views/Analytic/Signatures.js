import React, { useState } from "react";
import { DatePicker, Button, Dropdown, Menu } from "antd";

function Signatures() { const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);
    const [isActive, setIsActive] = useState(true);
  
    const toggleSwitch = () => {
      setIsActive(!isActive);
    };
  
    const handleFromChange = (value) => {
      setFromDate(value);
      setOpenFrom(false); // Close the DatePicker after selection
    };
  
    const handleToChange = (value) => {
      setToDate(value);
      setOpenTo(false); // Close the DatePicker after selection
    };
  
    const dateFormat = "YYYY-MM-DD";
    const fromDisplay = fromDate
      ? fromDate.format(dateFormat)
      : "Select From Date";
    const toDisplay = toDate ? toDate.format(dateFormat) : "Select To Date";
  
    const menu = (
      <Menu>
        <Menu.Item key="1">Hello.Scraft.studio</Menu.Item>
        <Menu.Item key="2"></Menu.Item>
      </Menu>
    );

    
  return (
     
    <div>
      <div className="container">
        <div className="row">
          {/* Dropdown Button */}
          <div className="col-md">
            <Dropdown overlay={menu} trigger={["click"]}>
              <input
                placeholder="Hello.Scraft.studio"
                className="btn custom-button border-primary w-100"></input>
            </Dropdown>
          </div>

          {/* From Date Button */}
          <div className="col-md">
            <Button
              onClick={() => setOpenFrom(!openFrom)}
              className="btn custom-button border-primary w-100">
              {fromDisplay}
            </Button>
            <DatePicker
              open={openFrom}
              onChange={handleFromChange}
              format={dateFormat}
              style={{ visibility: "hidden", height: 0 }} // Hide the DatePicker input box
            />
          </div>

          {/* To Date Button */}
          <div className="col-md">
            <Button
              onClick={() => setOpenTo(!openTo)}
              className="btn custom-button border-primary w-100">
              {toDisplay}
            </Button>
            <DatePicker
              open={openTo}
              onChange={handleToChange}
              format={dateFormat}
              style={{ visibility: "hidden", height: 0 }} // Hide the DatePicker input box
            />
          </div>
          <div className="col-md">
            <Button
              variant={isActive ? "primary" : "secondary"}
              onClick={toggleSwitch}
              className="me-2">
              {isActive ? "Active" : "Archived"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signatures
