import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: "First name",
    dataIndex: "firstName",
    key: "firstName",
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: "Last name",
    dataIndex: "lastName",
    key: "lastName",
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: "Job position",
    dataIndex: "jobPosition",
    key: "jobPosition",
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: "Scribe departments",
    dataIndex: "scribeDepartments",
    key: "scribeDepartments",
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => <a href='/'>{email}</a>,
  },
  {
    title: "Installation",
    dataIndex: "installation",
    key: "installation",
    render: (installed) => <a href='/'>{installed}</a>,
  },
  {
    title: "Phone number",
    dataIndex: "number",
    key: "number",
    render: (number) => <a href='/'>{number}</a>,
  },
 
];
const data = [
  {
    key: '1',
    firstName: 'aarish',
    lastName: 'tinwala',
    jobPosition: 'Founder',
    scribeDepartments: 'Scraft Studio',
    email: 'hello@scraft.studio	',
    installation: 'Installed',
    number: '8698208442',
  },
];
const Data = () => <Table columns={columns} dataSource={data} />;
export default Data;