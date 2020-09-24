import React from "react";

const Menu = (props) => {
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
                <i className="iconsminds-digital-drawing" /> Pages
              </a>
            </li>
            <li>
              <a href="#applications">
                <i className="iconsminds-air-balloon-1" /> Applications
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-menu">
        <div className="scroll">
          <ul className="list-unstyled" data-link="dashboard">
            <li className="active">
              <a href="Dashboard.Default.html">
                <i className="simple-icon-rocket" />{" "}
                <span className="d-inline-block">Default</span>
              </a>
            </li>
            <li>
              <a href="Dashboard.Analytics.html">
                <i className="simple-icon-pie-chart" />{" "}
                <span className="d-inline-block">Analytics</span>
              </a>
            </li>
            <li>
              <a href="Dashboard.Ecommerce.html">
                <i className="simple-icon-basket-loaded" />{" "}
                <span className="d-inline-block">Ecommerce</span>
              </a>
            </li>
            <li>
              <a href="Dashboard.Content.html">
                <i className="simple-icon-doc" />{" "}
                <span className="d-inline-block">Content</span>
              </a>
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
                <span className="d-inline-block">Authorization</span>
              </a>
              <div id="collapseAuthorization" className="collapse show">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="Pages.Auth.Login.html">
                      <i className="simple-icon-user-following" />{" "}
                      <span className="d-inline-block">Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Auth.Register.html">
                      <i className="simple-icon-user-follow" />{" "}
                      <span className="d-inline-block">Register</span>
                    </a>
                  </li>
                  <li>
                    <a href="Pages.Auth.ForgotPassword.html">
                      <i className="simple-icon-user-unfollow" />{" "}
                      <span className="d-inline-block">Forgot Password</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
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
            </li>
          </ul>
          <ul className="list-unstyled" data-link="applications">
            <li>
              <a href="Apps.MediaLibrary.html">
                <i className="simple-icon-picture" />{" "}
                <span className="d-inline-block">Library</span>
              </a>
            </li>
            <li>
              <a href="Apps.Todo.List.html">
                <i className="simple-icon-check" />{" "}
                <span className="d-inline-block">Todo</span>
              </a>
            </li>
            <li>
              <a href="Apps.Survey.List.html">
                <i className="simple-icon-calculator" />{" "}
                <span className="d-inline-block">Survey</span>
              </a>
            </li>
            <li>
              <a href="Apps.Chat.html">
                <i className="simple-icon-bubbles" />{" "}
                <span className="d-inline-block">Chat</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
