import { DownOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

import React, { useContext, useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  theme,
  Dropdown,
  Space,
  Avatar,
} from "antd";
import CreatePopup from "../../components/Popup/Createpopup/CreatePopup";
import { createWorkSpace, deleteWorkSpace, fetchWorkSpaces, updateWorkSpace } from "../../api";
import { AuthContext } from "../../context/AuthContext";
import { io } from "socket.io-client";
import moment from 'moment'
const { Header, Sider, Content } = Layout;
const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const socket = io('http://localhost:5000');
  const { activeWorkSpace, setActiveWorkSpace } = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [popupOpen, setPopupOpen] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [editInput, setEditInput] = useState(false);
  const [workspaceName, setWorkSpaceName] = useState("");
  const [loading, setLoading] = useState(false);
  const [workspaces, setWorkSpaces] = useState([]);
  const [updateWorkSpaceName, setUpdateWorkSpaceName] = useState('');
  const [deleteWorkspaceId, setDeleteWorkspaceId] = useState('F');
  const [notifications, setNotifications] = useState([])
  const handleLogout = async () => {
    await localStorage.removeItem("access_token");
    await navigate("/");
  };
  const [list, setList] = useState(false);

  const handleEdit = (name) => {
    setEditInput(name);
    setUpdateWorkSpaceName(name);
  };
  const handleSave = async (id) => {
    const response = await updateWorkSpace(id, { workspacename: updateWorkSpaceName })
    if (response) {
      setEditInput(false);
      fetchWorkSpacesData();
    }
  };

  const handleDelete = async () => {
    const response = await deleteWorkSpace(deleteWorkspaceId);
    if (response) {
      fetchWorkSpacesData();
      setDeletePopup(false)
    }

  }
  const handleCreateWorkSpace = async () => {
    setLoading(true);
    const response = await createWorkSpace({ workspacename: workspaceName });
    if (response) {
      setLoading(false);
      setPopupOpen(false);
      fetchWorkSpacesData();
    }
  };

  const fetchWorkSpacesData = async () => {
    const response = await fetchWorkSpaces();
    if (response) {
      setWorkSpaces(response?.data);
      setActiveWorkSpace({
        name: response?.data[0]?.name,
        id: response?.data[0]?._id,
      });
    }
  };

  const handleSelectWorkSpace = (payload) => {
    setActiveWorkSpace({ name: payload?.name, id: payload?._id });
  };

  useEffect(() => {
    fetchWorkSpacesData();
  }, []);


  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    socket.emit('subscribe_to_workspace', { workspaceId: activeWorkSpace.id });
    socket.on('new_notification', (data) => {
      const items = Array.isArray(data) && data?.map(item => {
        return {
          key: item?._id,
          label: (
            <div className="d-flex justify-content-between  align-items-start">
              <div>
                {" "}
                <Avatar
                  size={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 32, xxl: 32 }}
                  src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
                />
              </div>

              <div className="ms-2">
                {" "}
                <b>{item.message}</b>
                <br />
                <small className="text-muted">{item?.createdAt && moment(item?.createdAt).calendar()}</small>
              </div>
              <div>
                <div className="notification-active"></div>
              </div>
            </div>
          ),
        }
      })
      setNotifications(items)
    });
  }, [activeWorkSpace])

  return (
    <>
      {popupOpen ? (
        <CreatePopup
          popupheading="Create New WorkSpace"
          popuspera="Choose your signature workSpace name"
          popusinputplaceholdername="New workspace name"
          onSubmit={() => {
            handleCreateWorkSpace();
          }}
          onClose={() => {
            setPopupOpen(false);
          }}
          onChange={(event) => setWorkSpaceName(event.target.value)}
          loading={loading}
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
              <div
                className={`p-2 border-black-drop w-100 d-flex justify-content-between align-items-center pe-3 ${list && "border-black-drop-bold"
                  }`}
              >
                <span>
                  {activeWorkSpace?.name
                    ? activeWorkSpace?.name
                    : "Your Workspace"}
                </span>
                <span className="Workspace-icon ">
                  <DownOutlined />
                </span>
              </div>
            </div>
            {list ? (
              <div className="dropdownlist shadow">
                <div className="list ">
                  {workspaces?.map((e, i) => {
                    return (
                      <div
                        className="renderlist"
                        onClick={() => handleSelectWorkSpace(e)}
                      >
                        {editInput === e?.name ? (
                          <input
                            type="text"
                            value={updateWorkSpaceName}
                            onChange={(e) =>
                              setUpdateWorkSpaceName(e.target.value)
                            }
                            className="dropdown-input px-2"
                          />
                        ) : (
                          <div>{e?.name}</div>
                        )}

                        <div className="d-flex align-items-center">
                          {/* {activeWorkSpace?.name === e?.name && ( */}
                          <>
                            {editInput !== e?.name && (
                              <span className="dropdown-action me-2">
                                <EllipsisOutlined />
                                <div className="action-box">
                                  <ul>
                                    <li onClick={() => handleEdit(e?.name)}>
                                      Edit
                                    </li>
                                    <li
                                      onClick={() => {
                                        setDeleteWorkspaceId(e?._id);
                                        setDeletePopup(true);
                                      }}
                                    >
                                      Delete
                                    </li>
                                  </ul>
                                </div>
                              </span>
                            )}

                            {editInput === e?.name ? (
                              <span className="select-box-save">
                                {" "}
                                <Icon
                                  icon="ic:outline-check"
                                  onClick={() => handleSave(e?._id)}
                                />
                              </span>
                            ) : (
                              <span className="select-box">
                                {" "}
                                <Icon icon="ic:outline-check" />
                              </span>
                            )}
                          </>
                          {/* )} */}
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
                  <div className="buttontextCreate me-4">Create New</div>
                  <div className="buttonicon">
                    {/* <img src="/images/PlusIcon.png" /> */}+
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <Menu
            className="my-2 menuebar"
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
                  <Link to="/dashboard/Conatct">
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
                    Signature
                  </Link>
                ),
              },
              {
                key: "7",
                label: (
                  <Link to="/dashboard/analytic">
                    {" "}
                    <Icon icon="ion:analytics-sharp" />
                    Analytics
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
                    Settings
                  </Link>
                ),
              },
              {
                key: "10",
                label: (
                  <span className="text-danger" onClick={handleLogout}>
                    {" "}
                    <Icon icon="ri:logout-circle-line" />
                    Logout
                  </span>
                ),
              },
            ]}
          />
          <Link to="https://mysigil.io/dashboard" target="_blank">
            <div className="p-2   py-1 border-round mt-1 refresh-card">

              <b>Refresh Sigil</b><br />

              <small>
                New Verion available.
                <br />
                Refresh to update
              </small>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                className=" btn-primary my-1 "
                style={{ height: "40px", fontSize: "14px" }}
              >
                <strong>Refresh</strong>
              </button>
            </div>
          </Link>
          {/* <p className="mt-1">
            <Icon icon="clarity:help-line" className="me-1" />
            Get Support
          </p> */}
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
                <Button onClick={() => setActiveWorkSpace(prev => {
                  const updatedState = { ...prev, propertyName: 'new value' };
                  return updatedState;
                }
                )
                } type="link" className="p-0 header-btn m-2 mb-0">
                  <Dropdown menu={{ items: notifications }} placement="bottomRight" arrow>
                    <Icon icon="solar:bell-outline" />
                  </Dropdown>
                </Button>

                <Link to="/dashboard/Profile">
                  {" "}
                  <Avatar
                    size={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 32, xxl: 32 }}
                    src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
                  />
                </Link>
              </Space>
            </div>
          </Header>
          <Content className={`content-div ${collapsed && "ml-240"}`}>
            {children}
          </Content>
        </Layout>
      </Layout>
      {deletePopup && (
        <div className="popupbackground">
          <div className="popupMainBox2">
            <div className="headerPopup">Do you really want to delete?</div>

            <div className="py-3">
              <button
                className="SaveButton me-3 ms-3"
                onClick={() => handleDelete()}
              >
                Yes
              </button>
              <button
                className="SaveButton"
                onClick={() => setDeletePopup(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
