import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo2 from "../images/logo2.png";
import "../Styles.css";

const NavBar = ({ toggle }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed shadow"
        data-testid="navbar"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => toggle?.setToggle(!toggle?.toggle)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <img
              src={logo2}
              width={100}
              height={50}
              className="navbar-brand"
              alt="logo"
            ></img>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Loan Processing Application
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
