import React from "react";
import { Table, Switch } from "antd";
import { EditTwoTone } from '@ant-design/icons';


const columns = [
  {
    title: "",
    dataIndex: "enable",
    render: (_, record) => (
      <Switch
        checked={record.status === "Validated"}
        onChange={() => console.log("Switch toggled for:", record.workspace)}
      />
    ),
  },
  {
    title: "Google Workspace domain",
    dataIndex: "workspace",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Sending domain",
    dataIndex: "email",
  },
  {
    title: "Certificate status",
    dataIndex: "status",
  },
  {
    title: "",
    dataIndex: "enable",
    render: (_, record) => (
      <EditTwoTone onClick={() => console.log("Edit icon clicked for:", record.workspace)} />
    ),
  },
  
];

const data = [
  {
    key: "1",
    workspace: "scraft.studio",
    email: "email.scraft.studio",
    status: "Validated",
  },
];



const DomainTable = () => {
  return (
    <div className="mt-3" >
      <div className="d-flex justify-content-between mt-4">
        <a className="text-decoration-none custom-link" href="/">
          Refresh domains data
        </a>
        <a className="text-decoration-none custom-link" href="#">
          Learn more about DNS configuration
        </a>
      </div>

      <Table
        className="no-border-table mt-4"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <div className="mt-4" style={{ fontSize: "12px" }}>
        <span >
          For each sending domain, you have to add a CNAME record pointing to
          cname.scribe-mail.com
        </span>
        <br />
        <span>
          Some DNS providers may require you to add a period (.) after the
          address so the CNAME value would instead be cname.scribe-mail.com. DNS
          changes can take as much as 30 minutes to deploy
        </span>
      </div>
    </div>
  );
};

export default DomainTable;
