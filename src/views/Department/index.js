import { Icon } from "@iconify/react";
import { Col, Row, Space, Tabs } from "antd";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Department() {
  const [ismodal3, setIsModal3] = useState(false);
  // const itemsDrop = [
  //   {
  //     label: (
  //       <Link to="/dashboard">
  //         {" "}
  //         <Icon icon="ant-design:user-outlined" />
  //         Account
  //       </Link>
  //     ),
  //     key: "0",
  //   },
  // ];
  const items = [
    {
      key: "1",
      label: "Department list",
      children: (
        <>
          <h4 className="mt-4 mb-2">Manage department signatures</h4>
          <p className="mb-3">
            Edit signature templates and manage co-workers emails for each
            department
          </p>
          <Space>
            {" "}
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className=" no-radius">
                <Icon icon="icons8:plus" className="me-2 mb-1 " />
                <strong>Create</strong>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setIsModal3(true)}>
                  <span className="pointer"> Unit</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  {" "}
                  <Link to="/dashboard/department/new"> Department</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="px-3 unit-btn">
              <strong>Unit</strong>
            </div>
          </Space>

          <Row>
            <Col xs={18} lg={10} className="mt-3">
              <div className="create-department-button font-weight-bold">
                <Icon icon="icons8:plus" className="me-1 " />
                Create department
              </div>
            </Col>
          </Row>
        </>
      ),
    },
    {
      key: "2",
      label: "Assignment rules",
      children: (
        <>
          <h4 className="mt-4 mb-2">Manage assignment rules</h4>
          <p className="mb-3">
            Create rules to automatically assign new co-workers to Scribe
            departments when co-workers are created in your email provider.
          </p>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            className="mr-3 btn btn-primary no-radius"
          >
            <strong>Add Rule</strong>
          </button>
        </>
      ),
    },
  ];
  return (
    <div>
      <h2>Departments</h2>
      <Tabs defaultActiveKey="1" items={items} />
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
              <div className="px-md-4 ">
                {" "}
                <h2 className=" mb-3 text-center">New unit</h2>
                <div className="text-center">
                  <p>Create units to organise your departments</p>
                  <br />
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        // style={{ width:"150%"}}
                        className="form-control mb-3"
                        id="Unite Name"
                        placeholder="Unite Name"
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="submit"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="mr-3 px-5 btn btn-primary no-radius"
                      >
                        <strong>Create</strong>
                      </button>
                    </div>
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
