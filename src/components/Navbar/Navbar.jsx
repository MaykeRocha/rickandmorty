import React from "react";
/* import { NavLink, Link } from "react-router-dom";
import "../../App.scss"; */


const Navbar = () => {
  return (
    <nav className="navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <h1 className="fs-3 ubuntu navbar-brand">
        Rick &Morty <span className="text primary">Wiki</span>
      </h1>
      <button
      className="navbar-togler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="toggle navigation"
      >

        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end"
       id="navbarNavAltmarkup"
       >
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Pricing
          </a>
          <a className="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
    </nav>
  )
};

export default Navbar;
