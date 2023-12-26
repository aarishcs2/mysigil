import React from "react";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip } from "antd";
import { Icon } from "@iconify/react";
const InfoCard = (props) => {
  return (
    <div className="info-card p-2 px-3">
      <div className="d-flex justify-content-between ">
        <div>
          {" "}
          <p className="heading">{props?.name}</p>{" "}
          <p className="time-zone">({props?.timezone})</p>
        </div>
        <div>
          <div className="d-flex border-bottom">
            <Avatar
              className="mt-2"
              size={{ xs: 60, sm: 60, md: 60, lg: 60, xl: 60, xxl: 60 }}
              src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
            />
            <div className="ms-2">
              <b>Avinash Katta</b>
              <p className="small text-secondary mb-0">
                Youtube Coach - Katta Dot CO
              </p>

              <p className="small text-secondary mb-0">
                {" "}
                <Icon icon="basil:location-outline" /> Hyderabad,India
              </p>
              <p className="small text-secondary mb-0 mb-3">
                <Icon icon="tabler:world-share" /> www.web.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="katta-heading mt-3">KATTA.CO</h4>
            <span className="small text-secondary">
              Become a Better Youtuber
            </span>
            <br />
            <button className="call-btn py-1 px-3">Book a Call</button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between ">
        <div>
          <p className="heading">Coworkers</p>
          <p className="time-zone">{props?.users?.length}</p>
        </div>
        <div className="mt-3 w-50">
          <Avatar.Group>
            {props?.users?.map((item) => {
              const image =
                "https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg";
              return (
                <Avatar
                  key={item?._id}
                  src={item?.image ?? image}
                  size={{ xs: 40, sm: 40, md: 40, lg: 40, xl: 40, xxl: 40 }}
                />
              );
            })}
          </Avatar.Group>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
