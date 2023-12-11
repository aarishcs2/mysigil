import { DownOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import "./index.css";

import { Link, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  theme,
  Dropdown,
  Space,
  Avatar,
  Checkbox,
} from "antd";
import CreatePopup from "../../components/Popup/Createpopup/CreatePopup";

const { Header, Sider, Content } = Layout;
const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [popupOpen, setPopupOpen] = useState(false);
  const itemlist = [
    {
      name: "workspace 1",
      icon: "ic:outline-check",
    },
    {
      name: "workspace 2",
      icon: "ic:outline-check",
    },
    {
      name: "workspace 3",
      icon: "ic:outline-check",
    },
    {
      name: "workspace 4",
      icon: "ic:outline-check",
    },
    {
      name: "workspace 5",
      icon: "ic:outline-check",
    },
  ];
  const handleLogout = async () => {
    await localStorage.removeItem("access_token");
    await navigate("/");
  };
  const [list, setList] = useState(false);
  return (
    <>
      {popupOpen ? (
        <CreatePopup
          popupheading="Create New WorkSpace"
          popuspera="Choose your signature workSpace name"
          popusinputplaceholdername="new workspace name"
          onClick={() => {
            setPopupOpen(false);
            console.log(popupOpen);
          }}
        />
      ) : null}
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={false}
          className={collapsed ? "res-class" : "res-class-0"}
        >
          <div className="demo-logo-vertical" />
          <div>
            <div
              onClick={() => {
                list ? setList(false) : setList(true);
              }}
              className="Drobdown"
            >
              <div className="p-2 border-black">
                Your Workspace
                <span className="Workspace-icon ">
                  <DownOutlined />
                </span>
              </div>
            </div>
            {list ? (
              <div className="dropdownlist shadow">
                <div className="list ">
                  {itemlist.map((e, i) => {
                    return (
                      <div className="renderlist">
                        <div>{e.name}</div>{" "}
                        <div>
                          <Icon icon={e.icon} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  onClick={() => {
                    setPopupOpen(true);
                  }}
                  className="CreateButton"
                >
                  <div className="buttontextCreate">Create New</div>
                  <div className="buttonicon">
                    <img src="/images/Vector.png" />
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <Menu
            className="mt-4"
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
                  <Link to="/dashboard/signaturebuilder">
                    {" "}
                    <Icon icon="material-symbols-light:signature-outline-rounded" />
                    {/* <Image src='/images/SignatureBuilderIcon.png' /> */}
                    Signature-Builder
                  </Link>
                ),
              },
              {
                key: "7",
                label: (
                  <Link to="/dashboard/analytic">
                    {" "}
                    <Icon icon="ion:analytics-sharp" />
                    Analytic
                  </Link>
                ),
              },
              {
                key: "8",
                label: (
                  <Link to="/dashboard">
                    {" "}
                    <Icon icon="nimbus:marketing" />
                    Maketing
                  </Link>
                ),
              },
              {
                key: "9",
                label: (
                  <Link to="/dashboard/settings">
                    {" "}
                    <Icon icon="uil:setting" />
                    Setting
                  </Link>
                ),
              },
              {
                key: "10",
                label: (
                  <span className="text-danger" onClick={handleLogout}>
                    {" "}
                    <Icon icon="nimbus:home" />
                    Logout
                  </span>
                ),
              },
            ]}
          />
          <div className="p-2 border-round mt-5">
            <div className="d-flex justify-content-between">
              <div>Free plan</div>
              <div>5/5</div>
            </div>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              className=" btn-primary my-1 "
              style={{ height: "40px", fontSize: "14px" }}
            >
              <strong>Upgrade Plan</strong>
            </button>
          </div>
          <p className="mt-1">
            <Icon icon="clarity:help-line" className="me-1" />
            Get Support
          </p>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="d-flex justify-content-end w-100 pe-4">
              <Space>
                <Button
                  type="link"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
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
          <Content className={`content-div ${collapsed && "ml-240"}`}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Sidebar;
