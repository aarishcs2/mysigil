import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Image from "../../../assets/Images/default.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDepartment, fetchSingleDepartment, removeDepartmentUser } from "../../../api";
export default function Status() {
  const { id } = useParams()
  const [ismodal3, setIsModal3] = useState(false);
  const [deleteUserPopup, setDeleteUserPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [data, setData] = useState({});
  const [selectedUserId, setSelectedUserId] = useState('');
  const navigate = useNavigate()

  const fetchDepartment = async () => {
    if (id) {
      const response = await fetchSingleDepartment(id);
      if (response) {
        setData(response.data)
      }
    }
  }
  useEffect(() => {
    fetchDepartment()
  }, [id])

  const handleDeleteUser = async (userId) => {
    const response = await removeDepartmentUser(userId,id);
    if (response) {
      fetchDepartment();
      setDeleteUserPopup(false)
    }
  }

  const handleDeleteDepartment = async () => {
    const response = await deleteDepartment(id);
    if (response) {
      navigate('/dashboard/department')
    }
  }
  return (
    <div>
      <div className="status">
        {" "}
        <h2 className="main-heading mb-0">Department Status</h2>
        <p className="para">
          Check Your Co-Workers Information For This Department.
        </p>
        <div className="d-flex  w-100  justify-content-between mt-5 ">
          <div className="text-start w-100">
            <div>
              {" "}
              <p className="heading">{data?.name}</p> <p className="country">{data?.country}</p>
              <p className="time-zone">{`(${data?.timezone})`}</p>
            </div>
          </div>

          <div className="d-flex">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              className=" btn-primary h-40 me-1 "
              onClick={() => navigate(`/dashboard/department/edit/${id}`)}
            >
              <strong>Edit</strong>
            </button>
            <div
              className="btn-danger-outline h-40 me-2"
              onClick={() => setDeletePopup(true)}
            >
              Delete
            </div>{" "}
          </div>
        </div>
        <div className="shadow-box mt-3 p-3">
          <table className="status-table">
            <thead>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Installation</th>
              <th>Information</th>
              <th></th>
            </thead>
            <tbody>
              {
                data?.users?.map(item => {
                  return (
                    <tr key={item?._id}>
                      <td>
                        <img src={Image} className="table-user" />
                      </td>
                      <td>{`${item?.firstname} ${item?.lastname}`}</td>
                      <td>{item?.email}</td>
                      <td>
                        <span
                          className={
                            item?.signature?.length > 1 ? "tag" : "tag_not"
                          }
                        >
                          {item?.signature?.length > 1
                            ? "Installed"
                            : "Not Installed"}
                        </span>                      </td>
                      <td>
                        20%
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td className="ps-5">
                        <Icon
                          icon="uiw:delete"
                          className="delete-icon"
                          onClick={() => {
                            setSelectedUserId(item?._id)
                            setDeleteUserPopup(true)
                          }}
                        />
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
          {deleteUserPopup && (
            <div className="popupbackground">
              <div className="popupMainBox2">
                <div className="headerPopup">Do you really want to delete?</div>

                <div className="py-3">
                  <button
                    className="SaveButton me-3 ms-3"
                    onClick={() => handleDeleteUser(selectedUserId)}
                  >
                    Yes
                  </button>
                  <button
                    className="SaveButton"
                    onClick={() => setDeleteUserPopup(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
          {deletePopup && (
            <div className="popupbackground">
              <div className="popupMainBox2">
                <div className="headerPopup">Do you really want to delete?</div>

                <div className="py-3">
                  <button
                    className="SaveButton me-3 ms-3"
                  onClick={() => handleDeleteDepartment()}
                  >
                    Yes
                  </button>
                  <button
                    className="SaveButton"
                    onClick={() => setDeletePopup(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
