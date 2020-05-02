import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <>
    <header className="bg-danger">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-danger">
            <a className="navbar-brand" href="#">
              <i className="fas fa-pizza-slice fa-lg"></i>
              <span className="ml-2 text-uppercase">Lambda Eats</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/pizza" className="nav-link">Pizza</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
              <span className="navbar-text">
                Sprint Challenge.
              </span>
            </div>
          </nav>
        </div>
      </header>
  </>
}