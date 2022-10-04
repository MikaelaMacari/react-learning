import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <div>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-3" />
            Arhitecture Design
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-link">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
