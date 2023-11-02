import { DownOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Dropdown, Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Sider, Content } = Layout;
const Sidebar = ({ children }) => {
  const items = [
    {
      label: (
        <Link to="/">
          {" "}
          <Icon icon="ant-design:user-outlined" />
          Account
        </Link>
      ),
      key: "0",
    },

    {
      label: (
        <Link to="/">
          {" "}
          <Icon icon="material-symbols:help-outline" />
          Help Center
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/">
          {" "}
          <Icon icon="ic:outline-feedback" /> Send Feedback
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to="/">
          {" "}
          <Icon icon="mi:notification" /> Notification
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link to="/">
          {" "}
          <Icon icon="ic:sharp-update" /> Update
        </Link>
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
                  <Link to="/">
                    {" "}
                    <Icon icon="pajamas:chart" />
                    Dashboard
                  </Link>
                ),
              },
              {
                key: "2",
                label: (
                  <Link to="/">
                    {" "}
                    <Icon icon="ion:grid-outline" />
                    Department
                  </Link>
                ),
              },
              {
                key: "3",

                label: (
                  <Link to="/co-worker">
                    {" "}
                    <Icon icon="pepicons-pencil:people" />
                    Co-worker
                  </Link>
                ),
              },
              {
                key: "4",

                label: (
                  <Link to="/">
                    {" "}
                    <Icon icon="ic:outline-contact-mail" />
                    Contact
                  </Link>
                ),
              },
              {
                key: "5",

                label: (
                  <Link to="/">
                    {" "}
                    <Icon icon="typcn:point-of-interest-outline" />
                    Interest
                  </Link>
                ),
              },
              {
                key: "6",
                label: (
                  <Link to="/">
                    {" "}
                    <Icon icon="solar:chart-2-linear" />
                    Analytic
                  </Link>
                ),
              },
              {
                key: "7",
                label: (
                  <Link to="/">
                    {" "}
                    <Icon icon="nimbus:marketing" />
                    Maketing
                  </Link>
                ),
              },
              {
                key: "8",
                label: (
                  <Link to="/settings">
                    {" "}
                    <Icon icon="uil:setting" />
                    Setting
                  </Link>
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
