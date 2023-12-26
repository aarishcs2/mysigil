import { Icon } from "@iconify/react";
import { Col, Row, Space, Tabs } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoCard from "../../components/Card/InfoCard";
import { fetchDepartments } from "../../api";
import { AuthContext } from "../../context/AuthContext";
export default function Department() {
  const { activeWorkSpace } = useContext(AuthContext);
  const [departments, setDepartments] = useState([]);
  const fetchDepartment = async () => {
    if (activeWorkSpace?.id) {
      const response = await fetchDepartments(activeWorkSpace?.id);
      setDepartments(response?.data)
    }
  }
  useEffect(() => {
    fetchDepartment()
  }, [activeWorkSpace])

  const handleSearch = (event) => {
    if (event.target.value.length > 2) {
      const searchData = departments?.filter(item => item?.name?.toLowerCase().includes(event.target.value.toLowerCase()))
      setDepartments(searchData)
    }else {
      fetchDepartment()
    }
  }
  return (
    <div>
      <div className=" d-flex justify-content-between">
        <div>
          {" "}
          <h2 className="main-heading mb-0">Departments</h2>
          <p className="para">Manage Co-Workers Easily for each Department</p>
        </div>
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          className="btn-primary"
        >
          <Icon icon="icons8:plus" className="me-2 mb-1 " />
          <strong>Assignment Rule</strong>
        </button>
      </div>
      <input type="search" placeholder="Search" className="input-search" onChange={handleSearch} />

      <div className="row my-3">
        <div className="col-lg-6 mt-3">
          <Link to={"/dashboard/department/new"}>
            <div className="create-department-button font-weight-bold">
              <Icon icon="icons8:plus" className="me-1 " />
              Create department
            </div>
          </Link>
        </div>
        {
          departments?.map(item => {
            return (
              <div className="col-lg-6 mt-3">
                <InfoCard timezone={item?.timezone} name={item?.name} key={item?._id} users={item?.users} />
              </div>
            )
          })
        }
      </div>


    </div>
  );
}
