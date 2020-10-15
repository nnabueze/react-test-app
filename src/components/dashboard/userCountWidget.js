import React from "react";
import { Link } from "react-router-dom";

const UserCountWidget = ({ itemList }) => {
  const getActiveUsers = (data) => {
    return data.filter((e) => e.isActive === true).length;
  };
  const getDisabledUsers = (data) => {
    return data.filter((e) => e.isActive === false).length;
  };
  const getTotalUsers = (data) => {
    return data.length;
  };
  return (
    <div className="col-lg-12 col-xl-6">
      <div className="icon-cards-row">
        <div className="glide dashboard-numbers">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <Link to="/dashboard" className="card">
                  <div className="card-body text-center">
                    <i className="iconsminds-clock" />
                    <p className="card-text mb-0">Total Users</p>
                    <p className="lead text-center">
                      {getTotalUsers(itemList)}
                    </p>
                  </div>
                </Link>
              </li>
              <li className="glide__slide">
                <Link to="/dashboard" className="card">
                  <div className="card-body text-center">
                    <i className="iconsminds-basket-coins" />
                    <p className="card-text mb-0">Active Users</p>
                    <p className="lead text-center">
                      {getActiveUsers(itemList)}
                    </p>
                  </div>
                </Link>
              </li>
              <li className="glide__slide">
                <Link to="/dashboard" className="card">
                  <div className="card-body text-center">
                    <i className="iconsminds-arrow-refresh" />
                    <p className="card-text mb-0">Disabled Users</p>
                    <p className="lead text-center">
                      {getDisabledUsers(itemList)}
                    </p>
                  </div>
                </Link>
              </li>
              <li className="glide__slide">
                <Link to="/dashboard" className="card">
                  <div className="card-body text-center">
                    <i className="iconsminds-mail-read" />
                    <p className="card-text mb-0">Pending</p>
                    <p className="lead text-center">
                      {getDisabledUsers(itemList)}
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="position-absolute card-top-buttons">
              <button
                className="btn btn-header-light icon-button"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="simple-icon-refresh" />
              </button>
              <div className="dropdown-menu dropdown-menu-right mt-3">
                <Link className="dropdown-item" to="/dashboard">
                  Active Users
                </Link>
                <Link className="dropdown-item" to="/dashboard">
                  Pending Users
                </Link>
                <Link className="dropdown-item" to="/dashboard">
                  Disabled Users
                </Link>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <div className="dashboard-line-chart chart">
                <canvas id="salesChart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCountWidget;
