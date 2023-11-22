import { DownOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Space, Avatar,Checkbox } from "antd";

const { Header, Sider, Content } = Layout;
const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      label: (
        <>
          <span>Workspace 1</span>{" "}
          <Checkbox
            className="ms-4"
            // onChange={onChange}
          />
        </>
      ),
      key: "0",
    },

    {
      label: (
        <>
          <span>Workspace 1</span>{" "}
          <Checkbox
            className="ms-4"
            // onChange={onChange}
          />
        </>
      ),
      key: "1",
    },
    {
      label: (
        <>
          <span>Workspace 1</span>{" "}
          <Checkbox
            className="ms-4"
            // onChange={onChange}
          />
        </>
      ),
      key: "2",
    },
    {
      label: (
        <>
          <span>Workspace 1</span>{" "}
          <Checkbox
            className="ms-4"
            // onChange={onChange}
          />
        </>
      ),
      key: "3",
    },
   
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="demo-logo-vertical" />
        <Dropdown menu={{ items }} trigger={["click"]} className="Workspace">
          <span onClick={(e) => e.preventDefault()}>
            <div className="dropdown-div">
              Your Workspace
              <span className="Workspace-icon ">
                {" "}
                <DownOutlined />
              </span>
            </div>
          </span>
        </Dropdown>

        <Menu
          className="mt-5"
          theme="light"
          mode="inline"
          //   defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: (
                <Link to="/dashboard">
                  {" "}
                  <Icon icon="material-symbols:dashboard-outline" />
                  Dashboard
                </Link>
              ),
            },
            {
              key: "2",
              label: (
                <Link to="/dashboard/department">
                  {" "}
                  <Icon icon="iconamoon:home" />
                  Department
                </Link>
              ),
            },
            {
              key: "3",

              label: (
                <Link to="/dashboard/co-worker">
                  {" "}
                  <Icon icon="heroicons:user-group" />
                  Co-worker
                </Link>
              ),
            },
            {
              key: "4",

              label: (
                <Link to="/dashboard">
                  {" "}
                  <Icon icon="ic:outline-contact-mail" />
                  Contact
                </Link>
              ),
            },
            {
              key: "5",

              label: (
                <Link to="/dashboard">
                  {" "}
                  <Icon icon="typcn:point-of-interest" />
                  Interest
                </Link>
              ),
            },
            {
              key: "6",
              label: (
                <Link to="/dashboard/analytic">
                  {" "}
                  <Icon icon="ion:analytics-sharp" />
                  Analytic
                </Link>
              ),
            },
            {
              key: "7",
              label: (
                <Link to="/dashboard">
                  {" "}
                  <Icon icon="nimbus:marketing" />
                  Maketing
                </Link>
              ),
            },
            {
              key: "8",
              label: (
                <Link to="/dashboard/settings">
                  {" "}
                  <Icon icon="uil:setting" />
                  Setting
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="d-flex justify-content-end w-100 pe-4">
            <Space>
              <Button
                type="link"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className="p-0 header-btn mt-3"
              />
              <Button type="link" className="p-0 header-btn me-2">
                <Icon icon="typcn:flash-outline" />
              </Button>
              <Button type="link" className="p-0 header-btn me-2">
                <Icon icon="solar:bell-outline" />
              </Button>
              <Avatar
                size={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 32, xxl: 32 }}
                src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
              />
            </Space>
          </div>
        </Header>
        <Content className="content-div">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
