import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
const links = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/contacts", text: "Contacts" },
  { to: "/about", text: "About" },
];
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
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            {links.map((link) => {
              return (
                <li key={Math.random()} className="nav-item">
                  <Link to={link.to} className="nav-link" aria-current="page">
                    {link.text}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <Link to="/shoppingcart" className="nav-link">
                <HiShoppingCart className="me-2" />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
