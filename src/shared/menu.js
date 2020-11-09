import React from "react";
import { Link } from "react-router-dom";
import {
  ERCASCOLLECT,
  ERCASCOLLECT_URL,
  ERCASPAY,
  ERCASPAY_URL,
  ERCASSERVICE,
  ERCASSERVICE_URL,
} from "../constants";

const Menu = (props) => {
  const ercas = (appId) => {
    switch (appId) {
      case ERCASPAY:
        window.location = ERCASPAY_URL;
        break;
      case ERCASCOLLECT:
        window.location = ERCASCOLLECT_URL;
        break;
      default:
        window.location = ERCASSERVICE_URL;
        break;
    }
  };
  const onLink = (route) => {
    window.location = `/${route}`;
  };

  return (
    <div className="menu">
      <div className="main-menu">
        <div className="scroll">
          <ul className="list-unstyled">
            <li className="active">
              <a href="#dashboard">
                <i className="iconsminds-shop-4" />
                <span>Dashboards</span>
              </a>
            </li>
            <li>
              <a href="#layouts">
                <i className="iconsminds-digital-drawing" /> Users
              </a>
            </li>
            <li>
              <a href="#applications">
                <i className="iconsminds-air-balloon-1" /> Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-menu">
        <div className="scroll">
          <ul className="list-unstyled" data-link="dashboard">
            <li className="active">
              <Link onClick={() => onLink("dashboard")}>
                <i className="simple-icon-rocket" />{" "}
                <span className="d-inline-block">Home</span>
              </Link>
            </li>
            <li>
              <Link onClick={() => ercas(ERCASPAY)}>
                <i className="simple-icon-pie-chart" />{" "}
                <span className="d-inline-block">ErcasPay</span>
              </Link>
            </li>
            <li>
              <Link onClick={() => ercas(ERCASCOLLECT)}>
                <i className="simple-icon-basket-loaded" />{" "}
                <span className="d-inline-block">ErcasCollect</span>
              </Link>
            </li>
            <li>
              <Link onClick={() => ercas(ERCASSERVICE)}>
                <i className="simple-icon-doc" />{" "}
                <span className="d-inline-block">Ercas Connect</span>
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled" data-link="layouts" id="layouts">
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseAuthorization"
                aria-expanded="true"
                aria-controls="collapseAuthorization"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down" />{" "}
                <span className="d-inline-block">User Page</span>
              </a>
              <div id="collapseAuthorization" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <Link onClick={() => onLink("users")}>
                      <i className="simple-icon-user-following" />{" "}
                      <span className="d-inline-block">View Users</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => onLink("active-users")}>
                      <i className="simple-icon-user-follow" />{" "}
                      <span className="d-inline-block">Active Users</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => onLink("inactive-users")}>
                      <i className="simple-icon-user-unfollow" />{" "}
                      <span className="d-inline-block">Inactive Users</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapseProduct"
                aria-expanded="true"
                aria-controls="collapseProduct"
                className="rotate-arrow-icon opacity-50"
              >
                <i className="simple-icon-arrow-down" />{" "}
                <span className="d-inline-block">Product</span>
              </a>
              <div id="collapseProduct" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Pages.Product.List.html">
                      <i className="simple-icon-credit-card" />{" "}
                      <span className="d-inline-block">Data List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Product.Thumbs.html">
                      <i className="simple-icon-list" />{" "}
                      <span className="d-inline-block">Thumb List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Product.Images.html">
                      <i className="simple-icon-grid" />{" "}
                      <span className="d-inline-block">Image List</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Product.Detail.html">
                      <i className="simple-icon-book-open" />{" "}
                      <span className="d-inline-block">Detail</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
          <ul className="list-unstyled" data-link="applications">
            <li>
              <Link onClick={() => onLink("user-edit")}>
                <i className="simple-icon-picture" />{" "}
                <span className="d-inline-block">Edit Profile</span>
              </Link>
            </li>
            <li>
              <a href="Apps.Todo.List.html">
                <i className="simple-icon-check" />{" "}
                <span className="d-inline-block">Change Password</span>
              </a>
            </li>
            <li>
              <a href="Apps.Survey.List.html">
                <i className="simple-icon-calculator" />{" "}
                <span className="d-inline-block">FAQ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
