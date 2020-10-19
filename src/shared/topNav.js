import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";
import { LogoutAction } from "../actions/AuthAction";
import { AdminContext } from "../context/AdminContext";

const TopNav = (props) => {
  const { auth, dispatch } = useContext(AuthContext);
  const { user, dispatch2 } = useContext(AdminContext);
  const [firstName, setfisrtName] = useState("");
  const [lastName, setlastName] = useState("");

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setfisrtName(auth.data.firstName);
        setlastName(auth.data.lastName);
      }
    }
  }, [auth, props]);

  const logout = () => {
    handleRemoveCookie();
    dispatch(LogoutAction());
    dispatch2(LogoutAction());
  };

  const handleRemoveCookie = () => {
    Cookies.remove("user", { domain: ".ercas.ng" });
  };

  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <Link to="/dashboard" className="menu-button d-none d-md-block">
          <svg
            className="main"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 17"
          >
            <rect x="0.48" y="0.5" width={7} height={1} />
            <rect x="0.48" y="7.5" width={7} height={1} />
            <rect x="0.48" y="15.5" width={7} height={1} />
          </svg>
          <svg
            className="sub"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 17"
          >
            <rect x="1.56" y="0.5" width={16} height={1} />
            <rect x="1.56" y="7.5" width={16} height={1} />
            <rect x="1.56" y="15.5" width={16} height={1} />
          </svg>
        </Link>
        <Link
          to="/dashboard"
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
            <rect x="0.5" y="0.5" width={25} height={1} />
            <rect x="0.5" y="7.5" width={25} height={1} />
            <rect x="0.5" y="15.5" width={25} height={1} />
          </svg>
        </Link>
        <div className="search" data-search-path="Pages.Search.html?q=">
          <input placeholder="Search..." />
          <span className="search-icon">
            <i className="simple-icon-magnifier" />
          </span>
        </div>
      </div>
      <Link className="navbar-logo" to="/dashboard">
        {/* <span className="logo d-none d-xs-block" />
        <span className="logo-mobile d-block d-xs-none" /> */}
        <span>
          <img src="/logo.png" alt="logo" />
        </span>
      </Link>
      <div className="navbar-right">
        <div className="header-icons d-inline-block align-middle">
          <div className="d-none d-md-inline-block align-text-bottom mr-3">
            <div
              className="custom-switch custom-switch-primary-inverse custom-switch-small pl-1"
              data-toggle="tooltip"
              data-placement="left"
              title="Dark Mode"
            >
              <input
                className="custom-switch-input"
                id="switchDark"
                type="checkbox"
                defaultChecked
              />
              <label className="custom-switch-btn" htmlFor="switchDark" />
            </div>
          </div>
          <div className="position-relative d-none d-sm-inline-block">
            <button
              className="header-icon btn btn-empty"
              type="button"
              id="iconMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="simple-icon-grid" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-right mt-3  position-absolute"
              id="iconMenuDropdown"
            >
              <Link to="/dashboard" className="icon-menu-item">
                <i className="iconsminds-equalizer d-block" />
                <span>Settings</span>
              </Link>
              <Link to="/dashboard" className="icon-menu-item">
                <i className="iconsminds-male-female d-block" />
                <span>Users</span>
              </Link>
              <Link to="/dashboard" className="icon-menu-item">
                <i className="iconsminds-puzzle d-block" />
                <span>Components</span>
              </Link>
              <Link to="/dashboard" className="icon-menu-item">
                <i className="iconsminds-bar-chart-4 d-block" />
                <span>Profits</span>
              </Link>
              <Link to="/dashboard" className="icon-menu-item">
                <i className="iconsminds-file d-block" />
                <span>Surveys</span>
              </Link>
              <Link to="/dashboard" className="icon-menu-item">
                <i className="iconsminds-suitcase d-block" />
                <span>Tasks</span>
              </Link>
            </div>
          </div>
          <div className="position-relative d-inline-block">
            <button
              className="header-icon btn btn-empty"
              type="button"
              id="notificationButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="simple-icon-bell" />
              <span className="count">3</span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-right mt-3 position-absolute"
              id="notificationDropdown"
            >
              <div className="scroll">
                <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                  <Link to="/dashboard">
                    <img
                      src="img/profiles/l-2.jpg"
                      alt="Notification"
                      className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                    />
                  </Link>
                  <div className="pl-3">
                    <Link to="/dashboard">
                      <p className="font-weight-medium mb-1">
                        Joisse Kaycee just sent a new comment!
                      </p>
                      <p className="text-muted mb-0 text-small">
                        09.04.2018 - 12:45
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                  <Link to="/dashboard">
                    <img
                      src="img/notifications/1.jpg"
                      alt="Notification"
                      className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                    />
                  </Link>
                  <div className="pl-3">
                    <Link to="/dashboard">
                      <p className="font-weight-medium mb-1">
                        1 item is out of stock!
                      </p>
                      <p className="text-muted mb-0 text-small">
                        09.04.2018 - 12:45
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                  <Link to="/dashboard">
                    <img
                      src="img/notifications/2.jpg"
                      alt="Notification"
                      className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                    />
                  </Link>
                  <div className="pl-3">
                    <Link to="/dashboard">
                      <p className="font-weight-medium mb-1">
                        New order received! It is total $147,20.
                      </p>
                      <p className="text-muted mb-0 text-small">
                        09.04.2018 - 12:45
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-row mb-3 pb-3 ">
                  <Link to="/dashboard">
                    <img
                      src="img/notifications/3.jpg"
                      alt="Notification"
                      className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                    />
                  </Link>
                  <div className="pl-3">
                    <Link to="/dashboard">
                      <p className="font-weight-medium mb-1">
                        3 items just added to wish list by a user!
                      </p>
                      <p className="text-muted mb-0 text-small">
                        09.04.2018 - 12:45
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
          >
            <i className="simple-icon-size-fullscreen" />
            <i className="simple-icon-size-actual" />
          </button>
        </div>
        <div className="user d-inline-block">
          <button
            className="btn btn-empty p-0"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="name">
              {firstName} {lastName}
            </span>
            <span>
              <img alt="Profile " src="/avarter.png" />
            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-right mt-3">
            <Link className="dropdown-item" to="/dashboard">
              Account
            </Link>
            <button onClick={logout} className="dropdown-item">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
