import React from "react";
import { Link } from "react-router-dom";

const DashboardNavWidget = (props) => {
  return (
    <div className="col-12">
      <h1>Dashboard</h1>
      <nav
        className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb pt-0">
          <li className="breadcrumb-item">
            <Link to="/dashboard">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/dashboard">Library</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
      <div className="separator mb-5" />
    </div>
  );
};

export default DashboardNavWidget;
