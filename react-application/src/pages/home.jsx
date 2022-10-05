import React from "react";
import hero from "../assets/images/hero_section.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5 ">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Architectural Design</h1>
          <p className="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/about">
              <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">
                About us
              </button>
            </Link>
            <Link to="/contacts">
              <button type="button" className="btn btn-outline-dark btn-lg px-4">
                Contacts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
