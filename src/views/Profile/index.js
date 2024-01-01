import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "./index.css";
import Image from "../../assets/Images/default.jpeg";
import { fetchUser } from "../../api";
import { useEffect , useState} from "react";
function Profile() {
  const [user, setUser] = useState({})
  const fetchUserDetail = async () => {
    const response = await fetchUser();
    if (response) {
      setUser(response.data.user)
    }
  }
  useEffect(() => {
    fetchUserDetail()
  }, [])
  return (
    <>
      <div className="profile-header py-5 px-5">
        <NavLink to="/dashboard/settings" className="mt-2">
          <span className="back-arrow">
            <span
              role="img"
              aria-label="arrow-left"
              className="anticon anticon-arrow-left"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="arrow-left"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </span>
          </span>
        </NavLink>
        <div className="ms-3">
          <p className="profile-heading m-0">Account settings</p>
          <p className="profile-para">Login information</p>
        </div>{" "}
      </div>
      <div className="py-3 px-5">
        <img src={Image} className="profile-image mx-2" />{" "}
        <div className="row mt-1">
          <div className="col-12">
            <div className="p-3">
              <div className="row mt-3 w-75">
                <div className="col-6">
                  <label className="profile-lable">First Name</label>
                  <input
                    name="firstname"
                    // onChange={handleChange}
                    type="text"
                    className="profile-input mb-2 px-2 "
                    placeholder="Esa"
                  />
                </div>
                <div className="col-6">
                  <label className="profile-lable">Last Name</label>
                  <input
                    name="lastname"
                    // onChange={handleChange}
                    type="text"
                    className="profile-input mb-2 px-2 "
                    placeholder="Belle"
                  />
                </div>
              </div>
              <div className="row mt-4 w-75">
                <div className="col-6">
                  <label className="profile-lable">Email</label>
                  <input
                    name="email"
                    // onChange={handleChange}
                    type="email"
                    value={user?.email}
                    className="profile-input mb-2 px-2 "
                    placeholder="Change Email"
                  />
                </div>
                <div className="col-6">
                  <label className="profile-lable">Password</label>
                  <input
                    name="jobposition"
                    // onChange={handleChange}
                    type="password"
                    className="profile-input mb-2 px-2 "
                    placeholder="Change Password"
                  />
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="btn-primary me-3 mt-5 "
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
