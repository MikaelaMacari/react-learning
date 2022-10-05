import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="py-5 mb-4 bg-light rounded-3">
        <h1 className="display-5 fw-bold">About us</h1>
        <p className="col-md-8 fs-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
          isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet.
        </p>
        <Link to="/">
          <button className="btn btn-dark btn-lg" type="button">
            Go to home page
          </button>
        </Link>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Our Mission</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
              making it look like readable English.
            </p>
            <button className="btn btn-light" type="button">
              See more...
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Our history</h2>
            <p>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
              will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
              purpose.
            </p>
            <button className="btn btn-dark" type="button">
              See more...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
