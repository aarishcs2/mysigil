import { DownOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Dropdown, Layout, Menu } from "antd";
import React from "react";
const { Sider, Content } = Layout;

const Sidebar = ({ children }) => {
  const items = [
    {
      label: (
        <a href="/">
          {" "}
          <Icon icon="ant-design:user-outlined" />
          Account
        </a>
      ),
      key: "0",
    },

    {
      label: (
        <a href="/">
          {" "}
          <Icon icon="material-symbols:help-outline" />
          Help Center
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="/">
          {" "}
          <Icon icon="ic:outline-feedback" /> Send Feedback
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a href="/">
          {" "}
          <Icon icon="mi:notification" /> Notification
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a href="/">
          {" "}
          <Icon icon="ic:sharp-update" /> Update
        </a>
      ),
      key: "4",
    },
  ];

  return (
    <div className="d-flex">
      <div className="btn-div">
        <div className="letter-btn">Y</div>
        <div className="add-btn">+ </div>
      </div>
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
                  <a href="/">
                    {" "}
                    <Icon icon="pajamas:chart" />
                    Dashboard
                  </a>
                ),
              },
              {
                key: "2",
                label: (
                  <a href="/">
                    {" "}
                    <Icon icon="ion:grid-outline" />
                    Department
                  </a>
                ),
              },
              {
                key: "3",

                label: (
                  <a href="/">
                    {" "}
                    <Icon icon="pepicons-pencil:people" />
                    Co-worker
                  </a>
                ),
              },
              {
                key: "4",

                label: (
                  <a href="/">
                    {" "}
                    <Icon icon="ic:outline-contact-mail" />
                    Contact
                  </a>
                ),
              },
              {
                key: "5",

                label: (
                  <a href="/">
                    {" "}
                    <Icon icon="typcn:point-of-interest-outline" />
                    Interest
                  </a>
                ),
              },
              {
                key: "6",
                label: (
                  <a href="/">
                    {" "}
                    <Icon icon="solar:chart-2-linear" />
                    Analytic
                  </a>
                ),
              },
              {
                key: "7",
                label: (
                  <a href="/">
                    {" "}
                    <Icon icon="nimbus:marketing" />
                    Maketing
                  </a>
                ),
              },
              {
                key: "8",
                label: (
                  <a href="/">
                    {" "}
                    <Icon icon="uil:setting" />
                    Setting
                  </a>
                ),
              },
            ]}
          />
          {/* <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            /> */}
        </Sider>
        <Layout>
          <Content className="content-div">{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Sidebar;
