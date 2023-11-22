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
import { Layout, Menu, Button, theme, Dropdown, Space, Avatar } from "antd";

const { Header, Sider, Content } = Layout;
const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      label: (
        <Link to="/dashboard">
          {" "}
          <Icon icon="ant-design:user-outlined" />
          Account
        </Link>
      ),
      key: "0",
    },

    {
      label: (
        <Link to="/dashboard">
          {" "}
          <Icon icon="material-symbols:help-outline" />
          Help Center
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/dashboard">
          {" "}
          <Icon icon="ic:outline-feedback" /> Send Feedback
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to="/dashboard">
          {" "}
          <Icon icon="mi:notification" /> Notification
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link to="/dashboard">
          {" "}
          <Icon icon="ic:sharp-update" /> Update
        </Link>
      ),
      key: "4",
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="demo-logo-vertical" />
        <Dropdown menu={{ items }} trigger={["click"]}>
          <span onClick={(e) => e.preventDefault()}>
            <div className="dropdown-div">
              Your Workspace
              <DownOutlined />
            </div>
          </span>
        </Dropdown>
        <div className="mt-5 menu-heading"> Menu</div>
        <Menu
          theme="light"
          mode="inline"
          //   defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: (
                <Link to="/dashboard">
                  {" "}
                  <Icon icon="pajamas:chart" />
                  Dashboard
                </Link>
              ),
            },
            {
              key: "2",
              label: (
                <Link to="/dashboard/department">
                  {" "}
                  <Icon icon="ion:grid-outline" />
                  Department
                </Link>
              ),
            },
            {
              key: "3",

              label: (
                <Link to="/dashboard/co-worker">
                  {" "}
                  <Icon icon="pepicons-pencil:people" />
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
                  <Icon icon="typcn:point-of-interest-outline" />
                  Interest
                </Link>
              ),
            },
            {
              key: "6",
              label: (
                <Link to="/dashboard/analytic">
                  {" "}
                  <Icon icon="solar:chart-2-linear" />
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
