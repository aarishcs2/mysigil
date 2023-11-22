import { Icon } from "@iconify/react";
import { Col, Row, Space, Tabs } from "antd";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoCard from "../../components/Card/InfoCard";
export default function Department() {
  return (
    <div>
      <div className=" d-flex justify-content-between">
        <div>
          {" "}
          <h2 className="main-heading mb-0">Departments</h2>
          <p className="para">Manage Co-Workers Easily for each Department</p>
        </div>
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          className="btn-primary"
        >
          <Icon icon="icons8:plus" className="me-2 mb-1 " />
          <strong>Assignment Rule</strong>
        </button>
      </div>
      <input type="search" placeholder="Search" className="input-search" />
      <div className="row my-3">
        <div className="col-lg-6">
          <div className="create-department-button font-weight-bold">
            <Icon icon="icons8:plus" className="me-1 " />
            Create department
          </div>
        </div>
        <div className="col-lg-6">
          <InfoCard />
        </div>
      </div>
    </div>
  );
}
