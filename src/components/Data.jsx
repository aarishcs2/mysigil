import { Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: "First name",
    dataIndex: "firstName",
    key: "firstName",
    render: (text) => <Link to='/'>{text}</Link>,
  },
  {
    title: "Last name",
    dataIndex: "lastName",
    key: "lastName",
    render: (text) => <Link to='/'>{text}</Link>,
  },
  {
    title: "Job position",
    dataIndex: "jobPosition",
    key: "jobPosition",
    render: (text) => <Link to='/'>{text}</Link>,
  },
  {
    title: "Scribe departments",
    dataIndex: "scribeDepartments",
    key: "scribeDepartments",
    render: (text) => <Link to='/'>{text}</Link>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => <Link to='/'>{email}</Link>,
  },
  {
    title: "Installation",
    dataIndex: "installation",
    key: "installation",
    render: (installed) => <Link to='/'>{installed}</Link>,
  },
  {
    title: "Phone number",
    dataIndex: "number",
    key: "number",
    render: (number) => <Link to='/'>{number}</Link>,
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