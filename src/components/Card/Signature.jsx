import React from 'react'
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip } from "antd";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
const Signature = () => {
  return (
    <div className="signature-card p-2 px-3">
      <div className="d-flex justify-content-center pb-2 ">
        <div>
          <div className="d-flex border-bottom ">
            <div className="ms-2">
              <b className="name">Your Name</b>
              <p className="small text-secondary  designation">Designation</p>

              <p className="small text-secondary mb-0">
                {" "}
                <Icon icon="ic:round-phone" className="icon" />
                <Link to=""> 0000 000000000</Link>
              </p>
              <p className="small text-secondary mb-0 ">
                <Icon icon="ic:outline-email" className="icon" />
                <Link to=""> info@gmail.com</Link>
              </p>
              <p className="small text-secondary mb-0 ">
                <Icon icon="tabler:world-share" className="icon" />{" "}
                <Link to=""> Location</Link>
              </p>
              <p className="small text-secondary mb-0 mb-3">
                <Icon icon="basil:location-outline" className="icon" />
                <Link to=""> www.gdfh.co</Link>
              </p>
            </div>
          </div>
          <Icon icon="ic:round-phone" className="icon me-3" />
          <Icon icon="ic:outline-email" className="icon me-3" />
          <Icon icon="tabler:world-share" className="icon me-3" />{" "}
          <Icon icon="basil:location-outline" className="icon me-3" />
        </div>
      </div>
    </div>
  );
};

export default Signature;