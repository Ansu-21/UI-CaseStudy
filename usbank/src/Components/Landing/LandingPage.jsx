import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LandingPageGrid from "../LandingGrid/LandingPageGrid";
import MyProfile from "../MyProfile/MyProfile";
import AccountInfo from "../AccountInfo/AccountInfo";
import { UserContext } from "../Context/Context";

const LandingPage = ({ toggle }) => {
  const [isDashboard, setIsDashboard] = useState(true);
  const [isMyProfile, setIsMyProfile] = useState();
  const [isAccountInfo, setIsAccountInfo] = useState();
  const navigate = useNavigate();
  const loggedInUserInfo = JSON.parse(sessionStorage.getItem("loggedin-user"));
  const { user } = useContext(UserContext);
  const firstName = user?.firstname.toString();
  const lastName = user?.lastname.toString();
  useEffect(() => {
    if (!loggedInUserInfo) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedin-user");
    navigate("/");
  };

  return (
    <div className="container-dashboard" data-testid="container-dashboard">
      <div className="row">
        <div
          className={`col-lg-3 col-md-6 col-sm-6 ${
            toggle?.toggle ? "leftnav1" : "leftnav"
          }`}
        >
          <ul className={`listed navLeft shadow1 `}>
            <li
              className={`list text-side-nav ${
                isDashboard ? "active" : ""
              } mb20`}
            >
              <div
                onClick={() => {
                  setIsDashboard(true);
                  setIsAccountInfo(false);
                  setIsMyProfile(false);
                }}
              >
                Loan Dashboard
              </div>
            </li>
            <li
              className={`list text-side-nav ${
                isMyProfile ? "active" : ""
              } mb20`}
            >
              <div
                onClick={() => {
                  setIsMyProfile(true);
                  setIsDashboard(false);
                  setIsAccountInfo(false);
                }}
              >
                My Profile
              </div>
            </li>
            <li
              className={`list text-side-nav ${
                isAccountInfo ? "active" : ""
              } mb20`}
            >
              <div
                onClick={() => {
                  setIsAccountInfo(true);
                  setIsMyProfile(false);
                  setIsDashboard(false);
                }}
              >
                Account Information
              </div>
            </li>
          </ul>
        </div>
        <div className="col-9 grid">
          <div className="dashboard-heading">
            <h3 className="title" style={{ margin: "auto" }}>
              Welcome {firstName.charAt(0).toUpperCase() + firstName.slice(1)}{" "}
              {lastName.charAt(0).toUpperCase() + lastName.slice(1)}
            </h3>
            <button
              type="button"
              class="btn btn-secondary button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          {isAccountInfo && <AccountInfo />}
          {isDashboard && <LandingPageGrid />}
          {isMyProfile && <MyProfile />}
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
