import React from "react";
import { Space, Table, Tag, Dropdown, Menu, Button } from "antd";
import { DownCircleTwoTone } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">Make owner</Menu.Item>
    <Menu.Item key="2">Resend invitation</Menu.Item>
    <Menu.Item key="3">Delete</Menu.Item>
  </Menu>
);

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Job position",
    dataIndex: "jobPosition",
    key: "jobPosition",
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => <a>{email}</a>,
  },
  {
    title: "Departments",
    dataIndex: "departments",
    key: "departments",
    render: (departments) => <a>{departments}</a>,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Invitation",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* Dropdown Button */}
        <Dropdown overlay={menu}>
          <DownCircleTwoTone style={{ fontSize: "24px" }} />
        </Dropdown>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "aarish tinwala",
    jobPosition: "Founder",
    role: "Owner",
    email: "scraftstudio@gmail.com",
    departments: "Scraft Studio",
    tags: ["Accepted"],
  },
];
const AdminsTable = () => (
  <div className="mt-4">
  <Table
    columns={columns}
    dataSource={data}
    pagination={{ position: ["bottomLeft"] }}
  />
  </div>
);
export default AdminsTable;
