import {
  CheckCircleOutlined,
  DownCircleOutlined,
  FileDoneOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Layout, Tabs } from "antd";
import React, { useRef, useState } from "react";

import { Dropdown, Form, FormControl, InputGroup } from "react-bootstrap";
import Attribute from "../../components/Attribute";
import Data from "../../components/Data";

const { Content, Footer, TabPane } = Layout;

function Coworkers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [withoutDepartment, setWithoutDepartment] = useState(false);
  const [withMissingAttributes, setWithMissingAttributes] = useState(false);
  const [noSignatureInstalled, setNoSignatureInstalled] = useState(false);

  const fileInputRef = useRef(null);

  const handleDownloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Sample,CSV,Data\nRow1,Data1,Data2\nRow2,Data3,Data4";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sample.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // Handle the file upload logic here
    }
  };

  return (
    <Layout>
      {/* Content */}

      <Content
        style={{
          margin: "0px 0px 0px",
        }}
      >
        {/* Content Header */}
        <div className="mx-5">
          <div
            style={{
              padding: 50,
              minHeight: 700,
              //   background: colorBgContainer,
            }}
          >
            {/* Content Header tab */}
            <div className="m-1 fs-2">Co-workers</div>

            {/* tab Co-worker list && Co-worker attributes */}

            <div className="mx-5 m-3 ">
              <Tabs defaultActiveKey="1">
                {/* tab Co-worker list */}
                <TabPane tab="Co-worker list" key="1">
                  <div>
                    <span className="fw-bold fs-4 mb-2">
                      Manage company co-workers
                    </span>{" "}
                    <br />
                    <span className="fs-6">
                      {" "}
                      Edit the personal information of your co-workers manually
                      or in bulk by uploading a CSV
                    </span>
                  </div>
                  {/*co-workers , signatures , information */}
                  <div class="d-flex p-3 gap-3 fs-2">
                    <div class="d-flex flex-fill align-items-center p-3">
                      <UsergroupAddOutlined class="fs-3" />
                      <h6 class="mb-0 ms-2">co-workers</h6>
                    </div>
                    <div class="d-flex flex-fill align-items-center p-3">
                      <CheckCircleOutlined class="fs-3" />
                      <h6 class="mb-0 ms-2">signatures installed</h6>
                    </div>
                    <div class="d-flex flex-fill align-items-center p-3">
                      <FileDoneOutlined class="fs-3" />
                      <h6 class="mb-0 ms-2">personal information completed</h6>
                    </div>
                  </div>
                  {/* search bar */}
                  <InputGroup>
                    <InputGroup.Text>
                      <SearchOutlined />
                    </InputGroup.Text>
                    <FormControl
                      type="text"
                      className="form-control border-start-0"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Dropdown as={InputGroup.Prepend}>
                      <Dropdown.Toggle variant="outline-secondary">
                        <DownCircleOutlined />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Form.Check
                          type="checkbox"
                          label="Without Department"
                          checked={withoutDepartment}
                          onChange={() =>
                            setWithoutDepartment(!withoutDepartment)
                          }
                        />
                        <Form.Check
                          type="checkbox"
                          label="With Missing Attributes"
                          checked={withMissingAttributes}
                          onChange={() =>
                            setWithMissingAttributes(!withMissingAttributes)
                          }
                        />
                        <Form.Check
                          type="checkbox"
                          label="No Signature Installed"
                          checked={noSignatureInstalled}
                          onChange={() =>
                            setNoSignatureInstalled(!noSignatureInstalled)
                          }
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </InputGroup>

                  {/* button Download CSV && Upload CSV */}
                  <div className="container mt-3">
                    <button
                      className="btn btn-primary me-2"
                      onClick={handleDownloadCSV}
                    >
                      Download CSV
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={handleUploadClick}
                    >
                      Upload CSV
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      accept=".csv"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div>
                    <Data />
                  </div>
                </TabPane>

                {/* tab Co-worker attributes */}
                <TabPane tab="Co-worker attributes" key="2">
                  <div>
                    <span className="fw-bold fs-4 mb-2">
                      Manage co-worker attributes
                    </span>{" "}
                    <br />
                    <span className="fs-6">
                      {" "}
                      The default data source synced with Scribe is your Google
                      Workspace Directory (scraft.studio). Here you can sync
                      additional co-worker attributes from your email provider
                      to Scribe or choose Scribe as the default data source.
                    </span>
                    <a href="/" target="/" rel="/">
                      Learn More
                    </a>
                  </div>
                  <div className="mt-4 m-3">
                    <Attribute />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div></div>
        </div>

        {/* Content Body tab */}

        {/* pagination */}
        {/* <div className="text-center">
            <Pagination defaultCurrent={1} total={50} />
          </div> */}
      </Content>

      {/* footer */}
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  );
}

export default Coworkers;
