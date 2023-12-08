import React, { useState } from "react";
import "./index.css";
import { Icon } from "@iconify/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Template from "./EditTemplateScreen/Template";
import Detail from "./EditTemplateScreen/Detail";
import Image from "./EditTemplateScreen/Image/Index";

export default function EditTemplate() {
  const [selectedItem, setSelectedItem] = useState(null);

  const changeColor = (index) => {
    setSelectedItem(index);
    console.log(index);
  };
  const sidebarArray = [
    {
      listName: "Template",
      listIcon: "/images/templatelisticon.png",
      selectedIcon: "/images/SelectedTemplateicon.png",
      path: "/signaturebuilder/Edit-template/Template",
    },
    {
      listName: "Details",
      listIcon: "/images/detailicon.png",
      selectedIcon: "/images/detailselectedicon.png",
      path: "/signaturebuilder/Edit-template/Detail",
    },
    {
      listName: "Image",
      listIcon: "/images/gallerIcon.png",
      selectedIcon: "/images/gallerySelelctedIcon.png",
      path: "/signaturebuilder/Edit-template/Image",
    },
    {
      listName: "Socials",
      listIcon: "/images/shareIcon.png",
      selectedIcon: "/images/shareSelectedIcon.png",
    },
    {
      listName: "Marketing",
      listIcon: "/images/marketingIcon.png",
      selectedIcon: "/images/marketingselectedicon.png",
    },
    {
      listName: "Marketing",
      listIcon: "/images/designicon.png",
      selectedIcon: "/images/designselectedIcon.png",
    },
  ];
  const navigate = useNavigate("");
  return (
    <>
      <div className="signatureTemplate">
        <div className="EditTemplateheader">
          <div className="EditTemplateHeading">
            <div className="circle">
              <Icon icon="fa6-solid:less-than" />
            </div>
            <div className="EditTemplatecontent">Edit Template</div>
          </div>
          <div className="leftIcon">
            <img src="/images/3lineIcon.png" alt="" />
            <img src="/images/headersecondicon.png" alt="" />
            <img src="/images/bellicon.png" alt="" />
            <img src="/images/userIcon.png" alt="" />
          </div>
        </div>
        <div className="maincontent d-flex">
          <div className="sidebare">
            {sidebarArray.map((e, i) => {
              return (
                <div
                  onClick={() => {
                    changeColor(i);
                    navigate(e.path);
                  }}
                  key={i}
                  className={` ${
                    selectedItem === i ? "selected" : "sidebarlist"
                  }`}
                >
                  <div className="hover">
                    {selectedItem === i ? (
                      <>
                        <img src={e.selectedIcon} />
                      </>
                    ) : (
                      <>
                        <img src={e.listIcon} />
                      </>
                    )}
                    <br />
                    {selectedItem == i ? (
                      <>
                        <p className="listNameselected">{e.listName}</p>
                      </>
                    ) : (
                      <>
                        <p className="listName">{e.listName}</p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <Routes>
              <Route path="Template" element={<Template />} />
              <Route path="Detail" element={<Detail />} />
              <Route path="Image" element={<Image />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
