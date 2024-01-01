import { Dropdown } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteContact, fetchContacts } from "../../api";
import ContactPopup from "../../components/Popup/ConatctAddpopup";
import { AuthContext } from "../../context/AuthContext";
import Image from "../../assets/Images/default.jpeg";
import { Icon } from "@iconify/react";
import ContactViewPopup from "../../components/Popup/ConatctView";
import * as XLSX from 'xlsx';
import "./index.css";

function Contact() {
  const [popupOpen, setPopupOpen] = useState(false);
    const [viewPopupOpen, setViewPopupOpen] = useState(false);
  const { activeWorkSpace } = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});


  const items = [
    {
      key: "1",
      label: (
        <>
          <div onClick={()=>setViewPopupOpen(true)}>
            <Link>Full Information</Link>
            <div className="plus-btn mt-3 ">+</div>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => setPopupOpen(true)}
          className="d-flex justify-content-between w-100"
        >
          <Link>Edit Contact</Link>
          <div className="plus-btn mt-3">+</div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          onClick={() => handleDeleteContact(selectedContact._id)}
          className="d-flex justify-content-between w-100"
        >
          <Link>Delete Contact</Link>
          <div className="plus-btn mt-3">+</div>
        </div>
      ),
    },
  ];

  const fetchContact = async () => {
    if (activeWorkSpace?.id) {
      const response = await fetchContacts(activeWorkSpace.id);
      if (response) {
        setContacts(response.data)
      }
    }
  }
  useEffect(() => {
    fetchContact()
  }, [activeWorkSpace, popupOpen]);

  const exportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const formattedData = contacts.map(row =>
      Object.values(row).map(value => String(value))
    );

    const ws = XLSX.utils.aoa_to_sheet([Object.keys(contacts[0]), ...formattedData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    const data = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `contacts${fileExtension}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSearch = (event) => {
    if (event.target.value.length > 2) {
      const searchData = contacts?.filter(item => `${item?.firstname} ${item?.lastname} ${item?.email} ${item?.organization}`?.toLowerCase().includes(event.target.value.toLowerCase()))
      setContacts(searchData)
    } else {
      fetchContact();
    }
  }

  const handleDeleteContact = async (id) => {
    const response = await deleteContact(id)
    if (response) {
      fetchContact()
    }
  }
  return (
    <>
      {popupOpen ? (
        <ContactPopup
          data={selectedContact}
          onClose={() => {
            setPopupOpen(false);
          }}
        />
      ) : null}
      {viewPopupOpen ? (
        <ContactViewPopup
          data={selectedContact}
          onClose={() => {
            setViewPopupOpen(false);
          }}
        />
      ) : null}
      <div className="SignatureBuilder__Main">
        <div className="Flex__Setting">
          <div>
            <div
              className="Signature__heading"
              onClick={() => setViewPopupOpen(true)}
            >
              Contacts
            </div>
            <div className="Conatact"></div>Add and manage your contacts easily
          </div>
          <div>
            <button
              onClick={() => {
                setSelectedContact({});
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
                onChange={handleSearch}
              />
            </div>
          </div>
          <div>
            <button className="SerchInput" onClick={handleSearch}>
              Search{" "}
            </button>
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
                <Icon icon="ph:arrow-up" />
              </div>
            </div>
            <div className="Text cursor-pointer" onClick={exportToExcel}>
              <div className="listname">Export Contacts</div>
              <div className="CircleToparraow">
                <Icon icon="ph:arrow-down" />
              </div>
            </div>
          </div>
          <div className="Signature__Card_Main2">
            <table>
              <thead>
                <tr>
                  <th className="theadtext">First Name </th>
                  <th className="theadtext">Last Name</th>
                  <th className="theadtext">Email</th>
                  <th className="theadtext">Phone Number</th>
                  <th className="theadtext">Organization</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts?.map((e, i) => {
                  return (
                    <tr>
                      <td>
                        <div className="tdBox px2-3">
                          <img src={e?.image ?? Image} width={30} />
                          <div>{`${e?.firstname}`}</div>
                        </div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{`${e?.lastname}`}</div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{e?.email}</div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{e?.phone}</div>
                      </td>
                      <td>
                        <div className="tdBox px-3">{e?.organization}</div>
                      </td>
                      <td>
                        <Dropdown menu={{ items }} trigger={["click"]}>
                          <div
                            onClick={() => setSelectedContact(e)}
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
