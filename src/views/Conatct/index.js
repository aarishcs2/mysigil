import "./index.css";
import { Dropdown, Slider } from "antd";
import { Icon } from "@iconify/react";
import SignatureCard from "../../components/SignatureCard/SignatureCard";
import { useState } from "react";
import CreatePopup from "../../components/Popup/Createpopup/CreatePopup";
import { Link } from "react-router-dom";
import ContactPopup from "../../components/Popup/ConatctAddpopup";

function Contact() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCoWorker, setSelectedCoWorker] = useState("");

  const items = [
    {
      key: "1",
      label: (
        <>
          <Link>Full Information</Link>
          <div className="plus-btn mt-3 ">+</div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <Link>Full Information</Link>
          <div className="plus-btn mt-3">+</div>
        </>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <Link>Edit Contact</Link>
          <div className="plus-btn mt-3">+</div>
        </>
      ),
    },
    {
      key: "4",
      label: (
        <>
          <Link>Delete Contact</Link>
          <div className="plus-btn mt-3">+</div>
        </>
      ),
    },
  ];
  const listdata = [
    {
      id: 1,
      image: "/images/listuser1.png",
      name: "Dev",
      fullname: "anand",
      Email: "jaysethi68@............",
      ContactNo: "+91-3552256346",
      Organization: "Adani Group",
      Interest: "Marketing",
    },
    {
      id: 2,
      image: "/images/userIcon.png",
      name: "Ranjhina",
      fullname: "singh",
      Email: "anajina68@gmail.com",
      ContactNo: "+91-3552256346",
      Organization: "Guljag ltd",
      Interest: "Design",
    },
    {
      id: 3,
      image: "/images/UserIcon3.png",
      name: "Priya",
      fullname: "rathore",
      Email: "shrimidhi68@gmail.com",
      ContactNo: "+91-3552256346",
      Organization: "Becomify",
      Interest: "HR",
    },
    {
      id: 4,
      image: "/images/UserIcon4.png",
      name: "Ishan",
      fullname: "Avasti",
      Email: "gaurav68@gmail.com",
      ContactNo: "+91-3552256346",
      Organization: "Myraveda",
      Interest: "Not available",
    },
    {
      id: 5,
      image: "/images/listuser1.png",
      name: "Aarish ",
      fullname: "Tinwla",
      Email: "Aarish68@gmail.com",
      ContactNo: "+91-3552256346",
      Organization: "Bots india",
      Interest: "Production ",
    },
    {
      id: 6,
      image: "/images/UserIcon4.png",
      name: "Ali",
      fullname: "Khan",
      Email: "Krishna68@gmail.com",
      ContactNo: "+91-3552256346",
      Organization: "Sales",
      Interest: "HR",
    },
    {
      id: 7,
      image: "/images/listuser1.png",
      name: "Shahbaz",
      fullname: "Ali",
      Email: "shahbaz68@gmail.com",
      ContactNo: "+91-3552256346",
      Organization: "Peakcreative",
      Interest: "Not available",
    },
    {
      id: 8,
      image: "/images/UserIcon4.png",
      name: "Micheal",
      fullname: "jenifer",
      Email: "Micheal68@gmail.com",
      ContactNo: "+91-3552256346",
      Organization: "Codify inc",
      Interest: "Design",
    },
  ];
  return (
    <>
      {popupOpen ? (
        <ContactPopup
          onClose={() => {
            setPopupOpen(false);
          }}
        />
      ) : null}
      <div className="SignatureBuilder__Main">
        <div className="Flex__Setting">
          <div>
            <div className="Signature__heading">Contacts</div>
            <div className="Conatact"></div>Add and manage your contacts easily
          </div>
          <div>
            <button
              onClick={() => {
                setPopupOpen(true);
              }}
              className="CreateNewTeamButton gap-2"
            >
              <img src="/images/Add.png" alt="../" />
              Add Contact
            </button>
          </div>
        </div>
        <div className="SerchConatctSection">
          <div className="inputdev ">
            <div className="iconDiv">
              <img src="/images/SerchIcon.png" alt="../" />
            </div>
            <div>
              <input
                className="inputSerch"
                placeholder="Search contact via name, email, interest"
              />
            </div>
          </div>
          <div>
            <button className="SerchInput">Search </button>
          </div>
        </div>

        <div>
          <div className="DetailSection">
            <div className="Line"></div>
            <div className="margin">
              <div className="SignatureDetal">
                <div>
                  <img src="/images/DoteLogo.png" />
                </div>
                <div className="signatureContent">
                  Create signature templates with your customize message.
                </div>
              </div>
              <div className="SignatureDetal">
                <div>
                  <img src="/images/DoteLogo.png" />
                </div>
                <div className="signatureContent">
                  Choose to which departments you want to assign your signature
                  templates.
                </div>
              </div>
              <div className="SignatureDetal">
                <div>
                  <img src="/images/DoteLogo.png" />
                </div>
                <div className="signatureContent">
                  Assign teammates to departments Teammates will inherit the
                  templates to their related department.
                </div>
              </div>
            </div>
          </div>
          <div className="ImportContactSection">
            <div className="Text">
              <div className="listname">Import Contacts</div>
              <div className="CircleToparraow">
                <img src="/images/Toparrow.png" />
              </div>
            </div>
            <div className="Text">
              <div className="listname">Export Contacts</div>
              <div className="CircleToparraow">
                <img src="/images/BottomarrowIcon.png" />
              </div>
            </div>
          </div>
          <div className="Signature__Card_Main2">
            <table>
              <thead>
                <tr>
                  <th className="theadtext">Full Name </th>
                  <th className="theadtext">Last Name</th>
                  <th className="theadtext">Email</th>
                  <th className="theadtext">Phone numbers</th>
                  <th className="theadtext">Organization</th>
                  <th className="theadtext">Interest</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listdata.map((e, i) => {
                  return (
                    <tr>
                      <td>
                        <div className="tdBox px2-3">
                          <img src={e.image} />
                          <div>{e.name}</div>
                        </div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{e.fullname}</div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{e.Email}</div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{e.ContactNo}</div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{e.Organization}</div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{e.Interest}</div>
                      </td>
                      <td>
                        <Dropdown menu={{ items }} trigger={["click"]}>
                          <div
                            onClick={() => setSelectedCoWorker(e.id)}
                            className="three-dot-btn"
                          >
                            {" "}
                            ...
                          </div>
                        </Dropdown>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
