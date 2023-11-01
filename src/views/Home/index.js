import { Icon } from "@iconify/react";
import { Col, Row, Space, Tabs } from "antd";
import React from "react";
import Sidebar from "../../layouts/sidebar";
export default function Home() {
  const items = [
    {
      key: "1",
      label: "Department list",
      children: (
        <>
          <h4 className="mt-4 mb-2">Manage department signatures</h4>
          <p class="mb-3">
            Edit signature templates and manage co-workers emails for each
            department
          </p>
          <Space>
            {" "}
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              class="mr-3 btn btn-primary no-radius"
            >
              <Icon icon="icons8:plus" className="me-2 mb-1 " />
              <strong>Create</strong>
            </button>
            <div class="px-3 unit-btn">
              <strong>Unit</strong>
            </div>
          </Space>
          <Row>
            <Col xs={18} lg={10} className="mt-3">
              <div class="create-department-button font-weight-bold">
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
          <p class="mb-3">
            Create rules to automatically assign new co-workers to Scribe
            departments when co-workers are created in your email provider.
          </p>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            class="mr-3 btn btn-primary no-radius"
          >
            <strong>Add Rule</strong>
          </button>
        </>
      ),
    },
  ];
  return (
    <div>
      <Sidebar>
        <h2> Departments</h2>
        <Tabs defaultActiveKey="1" items={items} />
      </Sidebar>
    </div>
  );
}
