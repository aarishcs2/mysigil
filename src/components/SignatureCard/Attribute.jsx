import { PlusCircleTwoTone } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Attribute = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const saveModel = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //   const { Column, ColumnGroup } = Table;

  //   const data = [
  //     {
  //       key: '1',
  //       firstName: 'John',
  //       lastName: 'Brown',
  //       age: 32,
  //       address: 'New York No. 1 Lake Park',
  //       tags: ['nice', 'developer'],
  //     },
  //     {
  //         key: '2',
  //         firstName: 'Jim',
  //         lastName: 'Green',
  //         age: 42,
  //         address: 'London No. 1 Lake Park',
  //         tags: ['loser'],
  //       },
  //       {
  //         key: '3',
  //         firstName: 'Joe',
  //         lastName: 'Black',
  //         age: 32,
  //         address: 'Sydney No. 1 Lake Park',
  //         tags: ['cool', 'teacher'],
  //       },
  //     ];

  return (
    <>
      <Link className="text-decoration-none custom-link" onClick={showModal} to="/">
        <PlusCircleTwoTone className="me-2" />
        Add co-worker attribute
      </Link>

      <Modal
        title="Create co-worker attribute"
        visible={isModalOpen} // Note: The prop should be 'visible' instead of 'open'
        onCancel={handleCancel}
        footer={null}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="slug" className="form-label">
            Slug
          </label>
          <input type="text" className="form-control" id="slug" />
        </div>

        <div className="mb-3">
          <label className="form-label">Data Source Option</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="dataSource"
              id="option1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="option1">
              Scribe
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="dataSource"
              id="option2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="option2">
              Google Workspace
            </label>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={saveModel}>
            Save
          </button>
        </div>
      </Modal>

      {/* <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <Link>Invite {record.lastName}</Link>
          <Link>Delete</Link>
        </Space>
      )}
    />
  </Table>

 */}
    </>
  );
};
export default Attribute;
