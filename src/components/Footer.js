import React from 'react';

export default function Footer() {
  return <>
    <div className="containter-fluid bg-danger mt-3">
      <div className="row">
        <div className="col-12 navbar navbar-dark bg-danger">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="nav-link" href="#">Back to Top</a>
            </li>
          </ul>
        </div>
        <div className="col-12 text-center footer-custom">

        </div>
      </div>
    </div>
  </>
}