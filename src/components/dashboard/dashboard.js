import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LogoutAction } from "../../actions/AuthAction";
import TopNav from "../../shared/topNav";

const Dashboard = (props) => {
  const { auth, dispatch } = useContext(AuthContext);
  const [name, setName] = useState("");

  useEffect(() => {
    if (auth.isAuth) {
      setName(auth.data.name);
    } else {
      props.history.push("/");
    }
  }, [auth, props]);

  const onClick = () => {
    dispatch(LogoutAction());
  };

  return (
    <div id="app-container" class="menu-default show-spinner">
      <TopNav logout={onClick} />
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
              <li>
                <a href="#ui">
                  <i className="iconsminds-pantone" /> UI
                </a>
              </li>
              <li>
                <a href="#menu">
                  <i className="iconsminds-three-arrow-fork" /> Menu
                </a>
              </li>
              <li>
                <a href="Blank.Page.html">
                  <i className="iconsminds-bucket" /> Blank Page
                </a>
              </li>
              <li>
                <a
                  href="https://dore-jquery-docs.coloredstrategies.com"
                  target="_blank"
                >
                  <i className="iconsminds-library" /> Docs
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
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseProfile"
                  aria-expanded="true"
                  aria-controls="collapseProfile"
                  className="rotate-arrow-icon opacity-50"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Profile</span>
                </a>
                <div id="collapseProfile" className="collapse show">
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="Pages.Profile.Social.html">
                        <i className="simple-icon-share" />{" "}
                        <span className="d-inline-block">Social</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Profile.Portfolio.html">
                        <i className="simple-icon-link" />{" "}
                        <span className="d-inline-block">Portfolio</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseBlog"
                  aria-expanded="true"
                  aria-controls="collapseBlog"
                  className="rotate-arrow-icon opacity-50"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Blog</span>
                </a>
                <div id="collapseBlog" className="collapse show">
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="Pages.Blog.html">
                        <i className="simple-icon-list" />{" "}
                        <span className="d-inline-block">List</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Blog.Detail.html">
                        <i className="simple-icon-book-open" />{" "}
                        <span className="d-inline-block">Detail</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Blog.Detail.Alt.html">
                        <i className="simple-icon-picture" />{" "}
                        <span className="d-inline-block">Detail Alt</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseMisc"
                  aria-expanded="true"
                  aria-controls="collapseMisc"
                  className="rotate-arrow-icon opacity-50"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Miscellaneous</span>
                </a>
                <div id="collapseMisc" className="collapse show">
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="Pages.Misc.Coming.Soon.html">
                        <i className="simple-icon-hourglass" />{" "}
                        <span className="d-inline-block">Coming Soon</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Misc.Error.html">
                        <i className="simple-icon-exclamation" />{" "}
                        <span className="d-inline-block">Error</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Misc.Faq.html">
                        <i className="simple-icon-question" />{" "}
                        <span className="d-inline-block">Faq</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Misc.Invoice.html">
                        <i className="simple-icon-bag" />{" "}
                        <span className="d-inline-block">Invoice</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Misc.Knowledge.Base.html">
                        <i className="simple-icon-graduation" />{" "}
                        <span className="d-inline-block">Knowledge Base</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Misc.Mailing.html">
                        <i className="simple-icon-envelope-open" />{" "}
                        <span className="d-inline-block">Mailing</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Misc.Pricing.html">
                        <i className="simple-icon-diamond" />{" "}
                        <span className="d-inline-block">Pricing</span>
                      </a>
                    </li>
                    <li>
                      <a href="Pages.Misc.Search.html">
                        <i className="simple-icon-magnifier" />{" "}
                        <span className="d-inline-block">Search</span>
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
            <ul className="list-unstyled" data-link="ui">
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseForms"
                  aria-expanded="true"
                  aria-controls="collapseForms"
                  className="rotate-arrow-icon opacity-50"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Forms</span>
                </a>
                <div id="collapseForms" className="collapse show">
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="Ui.Forms.Components.html">
                        <i className="simple-icon-event" />{" "}
                        <span className="d-inline-block">Components</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Forms.Layouts.html">
                        <i className="simple-icon-doc" />{" "}
                        <span className="d-inline-block">Layouts</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Forms.Validation.html">
                        <i className="simple-icon-check" />{" "}
                        <span className="d-inline-block">Validation</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Forms.Wizard.html">
                        <i className="simple-icon-magic-wand" />{" "}
                        <span className="d-inline-block">Wizard</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseDataTables"
                  aria-expanded="true"
                  aria-controls="collapseDataTables"
                  className="rotate-arrow-icon opacity-50"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Datatables</span>
                </a>
                <div id="collapseDataTables" className="collapse show">
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="Ui.Datatables.Rows.html">
                        <i className="simple-icon-screen-desktop" />{" "}
                        <span className="d-inline-block">Full Page UI</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Datatables.Scroll.html">
                        <i className="simple-icon-mouse" />{" "}
                        <span className="d-inline-block">Scrollable</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Datatables.Pagination.html">
                        <i className="simple-icon-notebook" />{" "}
                        <span className="d-inline-block">Pagination</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Datatables.Default.html">
                        <i className="simple-icon-grid" />{" "}
                        <span className="d-inline-block">Default</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseComponents"
                  aria-expanded="true"
                  aria-controls="collapseComponents"
                  className="rotate-arrow-icon opacity-50"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Components</span>
                </a>
                <div id="collapseComponents" className="collapse show">
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="Ui.Components.Alerts.html">
                        <i className="simple-icon-bell" />{" "}
                        <span className="d-inline-block">Alerts</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Badges.html">
                        <i className="simple-icon-badge" />{" "}
                        <span className="d-inline-block">Badges</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Buttons.html">
                        <i className="simple-icon-control-play" />{" "}
                        <span className="d-inline-block">Buttons</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Cards.html">
                        <i className="simple-icon-layers" />{" "}
                        <span className="d-inline-block">Cards</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Carousel.html">
                        <i className="simple-icon-picture" />{" "}
                        <span className="d-inline-block">Carousel</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Charts.html">
                        <i className="simple-icon-chart" />{" "}
                        <span className="d-inline-block">Charts</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Collapse.html">
                        <i className="simple-icon-arrow-up" />{" "}
                        <span className="d-inline-block">Collapse</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Dropdowns.html">
                        <i className="simple-icon-arrow-down" />{" "}
                        <span className="d-inline-block">Dropdowns</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Editors.html">
                        <i className="simple-icon-book-open" />{" "}
                        <span className="d-inline-block">Editors</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Icons.html">
                        <i className="simple-icon-star" />{" "}
                        <span className="d-inline-block">Icons</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.InputGroups.html">
                        <i className="simple-icon-note" />{" "}
                        <span className="d-inline-block">Input Groups</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Jumbotron.html">
                        <i className="simple-icon-screen-desktop" />{" "}
                        <span className="d-inline-block">Jumbotron</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Modal.html">
                        <i className="simple-icon-docs" />{" "}
                        <span className="d-inline-block">Modal</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Navigation.html">
                        <i className="simple-icon-cursor" />{" "}
                        <span className="d-inline-block">Navigation</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.PopoverandTooltip.html">
                        <i className="simple-icon-pin" />{" "}
                        <span className="d-inline-block">
                          Popover &amp; Tooltip
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Sortable.html">
                        <i className="simple-icon-shuffle" />{" "}
                        <span className="d-inline-block">Sortable</span>
                      </a>
                    </li>
                    <li>
                      <a href="Ui.Components.Tables.html">
                        <i className="simple-icon-grid" />{" "}
                        <span className="d-inline-block">Tables</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled" data-link="menu" id="menuTypes">
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseMenuTypes"
                  aria-expanded="true"
                  aria-controls="collapseMenuTypes"
                  className="rotate-arrow-icon"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Menu Types</span>
                </a>
                <div
                  id="collapseMenuTypes"
                  className="collapse show"
                  data-parent="#menuTypes"
                >
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="Menu.Default.html">
                        <i className="simple-icon-control-pause" />{" "}
                        <span className="d-inline-block">Default</span>
                      </a>
                    </li>
                    <li>
                      <a href="Menu.Subhidden.html">
                        <i className="simple-icon-arrow-left mi-subhidden" />{" "}
                        <span className="d-inline-block">Subhidden</span>
                      </a>
                    </li>
                    <li>
                      <a href="Menu.Hidden.html">
                        <i className="simple-icon-control-start mi-hidden" />{" "}
                        <span className="d-inline-block">Hidden</span>
                      </a>
                    </li>
                    <li>
                      <a href="Menu.Mainhidden.html">
                        <i className="simple-icon-control-rewind mi-hidden" />{" "}
                        <span className="d-inline-block">Mainhidden</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseMenuLevel"
                  aria-expanded="true"
                  aria-controls="collapseMenuLevel"
                  className="rotate-arrow-icon collapsed"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Menu Levels</span>
                </a>
                <div
                  id="collapseMenuLevel"
                  className="collapse"
                  data-parent="#menuTypes"
                >
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="#">
                        <i className="simple-icon-layers" />{" "}
                        <span className="d-inline-block">Sub Level</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapseMenuLevel2"
                        aria-expanded="true"
                        aria-controls="collapseMenuLevel2"
                        className="rotate-arrow-icon collapsed"
                      >
                        <i className="simple-icon-arrow-down" />{" "}
                        <span className="d-inline-block">Another Level</span>
                      </a>
                      <div id="collapseMenuLevel2" className="collapse">
                        <ul className="list-unstyled inner-level-menu">
                          <li>
                            <a href="#">
                              <i className="simple-icon-layers" />{" "}
                              <span className="d-inline-block">Sub Level</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseMenuDetached"
                  aria-expanded="true"
                  aria-controls="collapseMenuDetached"
                  className="rotate-arrow-icon collapsed"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Detached</span>
                </a>
                <div id="collapseMenuDetached" className="collapse">
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="#">
                        <i className="simple-icon-layers" />{" "}
                        <span className="d-inline-block">Sub Level</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Dashboard</h1>
              <nav
                className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb pt-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
              <div className="separator mb-5" />
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="icon-cards-row">
                <div className="glide dashboard-numbers">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      <li className="glide__slide">
                        <a href="#" className="card">
                          <div className="card-body text-center">
                            <i className="iconsminds-clock" />
                            <p className="card-text mb-0">Pending Orders</p>
                            <p className="lead text-center">16</p>
                          </div>
                        </a>
                      </li>
                      <li className="glide__slide">
                        <a href="#" className="card">
                          <div className="card-body text-center">
                            <i className="iconsminds-basket-coins" />
                            <p className="card-text mb-0">Completed Orders</p>
                            <p className="lead text-center">32</p>
                          </div>
                        </a>
                      </li>
                      <li className="glide__slide">
                        <a href="#" className="card">
                          <div className="card-body text-center">
                            <i className="iconsminds-arrow-refresh" />
                            <p className="card-text mb-0">Refund Requests</p>
                            <p className="lead text-center">2</p>
                          </div>
                        </a>
                      </li>
                      <li className="glide__slide">
                        <a href="#" className="card">
                          <div className="card-body text-center">
                            <i className="iconsminds-mail-read" />
                            <p className="card-text mb-0">New Comments</p>
                            <p className="lead text-center">25</p>
                          </div>
                        </a>
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
                        <a className="dropdown-item" href="#">
                          Sales
                        </a>
                        <a className="dropdown-item" href="#">
                          Orders
                        </a>
                        <a className="dropdown-item" href="#">
                          Refunds
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Sales</h5>
                      <div className="dashboard-line-chart chart">
                        <canvas id="salesChart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 mb-4">
              <div className="card">
                <div className="position-absolute card-top-buttons">
                  <button className="btn btn-header-light icon-button">
                    <i className="simple-icon-refresh" />
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Recent Orders</h5>
                  <div className="scroll dashboard-list-with-thumbs">
                    <div className="d-flex flex-row mb-3">
                      <a className="d-block position-relative" href="#">
                        <img
                          src="img/products/marble-cake-thumb.jpg"
                          alt="Marble Cake"
                          className="list-thumbnail border-0"
                        />
                        <span className="badge badge-pill badge-theme-2 position-absolute badge-top-right">
                          NEW
                        </span>
                      </a>
                      <div className="pl-3 pt-2 pr-2 pb-2">
                        <a href="#">
                          <p className="list-item-heading">Marble Cake</p>
                          <div className="pr-4 d-none d-sm-block">
                            <p className="text-muted mb-1 text-small">
                              Latashia Nagy - 100-148 Warwick Trfy, Kansas City,
                              USA
                            </p>
                          </div>
                          <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                            09.04.2018
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3">
                      <a className="d-block position-relative" href="#">
                        <img
                          src="img/products/fruitcake-thumb.jpg"
                          alt="Fruitcake"
                          className="list-thumbnail border-0"
                        />
                        <span className="badge badge-pill badge-theme-2 position-absolute badge-top-right">
                          NEW
                        </span>
                      </a>
                      <div className="pl-3 pt-2 pr-2 pb-2">
                        <a href="#">
                          <p className="list-item-heading">Fruitcake</p>
                          <div className="pr-4 d-none d-sm-block">
                            <p className="text-muted mb-1 text-small">
                              Marty Otte - 166-156 Rue de Varennes, Gatineau, QC
                              J8T 8G4, Canada
                            </p>
                          </div>
                          <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                            09.04.2018
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3">
                      <a className="d-block position-relative" href="#">
                        <img
                          src="img/products/chocolate-cake-thumb.jpg"
                          alt="Chocolate Cake"
                          className="list-thumbnail border-0"
                        />
                        <span className="badge badge-pill badge-theme-1 position-absolute badge-top-right">
                          PROCESS
                        </span>
                      </a>
                      <div className="pl-3 pt-2 pr-2 pb-2">
                        <a href="#">
                          <p className="list-item-heading">Chocolate Cake</p>
                          <div className="pr-4 d-none d-sm-block">
                            <p className="text-muted mb-1 text-small">
                              Linn Ronning - Rasen 2-14, 98547 Kühndorf, Germany
                            </p>
                          </div>
                          <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                            09.04.2018
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3">
                      <a className="d-block position-relative" href="#">
                        <img
                          src="img/products/fat-rascal-thumb.jpg"
                          alt="Fat Rascal"
                          className="list-thumbnail border-0"
                        />
                        <span className="badge badge-pill badge-theme-3 position-absolute badge-top-right">
                          DONE
                        </span>
                      </a>
                      <div className="pl-3 pt-2 pr-2 pb-2">
                        <a href="#">
                          <p className="list-item-heading">Fat Rascal</p>
                          <div className="pr-4 d-none d-sm-block">
                            <p className="text-muted mb-1 text-small">
                              Rasheeda Vaquera - 37 Rue des Grands Prés, 03100
                              Montluçon, France
                            </p>
                          </div>
                          <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                            09.04.2018
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3">
                      <a className="d-block position-relative" href="#">
                        <img
                          src="img/products/streuselkuchen-thumb.jpg"
                          alt="Streuselkuchen"
                          className="list-thumbnail border-0"
                        />
                        <span className="badge badge-pill badge-theme-3 position-absolute badge-top-right">
                          DONE
                        </span>
                      </a>
                      <div className="pl-3 pt-2 pr-2 pb-2">
                        <a href="#">
                          <p className="list-item-heading">Streuselkuchen</p>
                          <div className="pr-4 d-none d-sm-block">
                            <p className="text-muted mb-1 text-small">
                              Mimi Carreira - 36-71 Victoria St, Birmingham, UK
                            </p>
                          </div>
                          <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                            09.04.2018
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3">
                      <a className="d-block position-relative" href="#">
                        <img
                          src="img/products/cremeschnitte-thumb.jpg"
                          alt="Cremeschnitte"
                          className="list-thumbnail border-0"
                        />
                        <span className="badge badge-pill badge-theme-3 position-absolute badge-top-right">
                          DONE
                        </span>
                      </a>
                      <div className="pl-3 pt-2 pr-2 pb-2">
                        <a href="#">
                          <p className="list-item-heading">Cremeschnitte</p>
                          <div className="pr-4 d-none d-sm-block">
                            <p className="text-muted mb-1 text-small">
                              Lenna Majeed - 6 Hertford St Mayfair, London, UK
                            </p>
                          </div>
                          <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                            09.04.2018
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Product Categories</h5>
                  <div className="dashboard-donut-chart chart">
                    <canvas id="polarChart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Logs</h5>
                  <div className="scroll dashboard-logs">
                    <table className="table table-sm table-borderless">
                      <tbody>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-1 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New user registiration
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">14:12</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-2 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New sale: Soufflé
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">13:20</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-danger align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              14 products added
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">12:55</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-2 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New sale: Napoleonshat
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">12:44</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-2 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New sale: Cremeschnitte
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">12:30</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-2 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New sale: Soufflé
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">10:40</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-danger align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              2 categories added
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">10:20</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-2 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New sale: Chocolate Cake
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">09:28</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-2 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New sale: Bebinca
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">09:25</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-2 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New sale: Bebinca
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">09:20</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="log-indicator border-theme-2 align-middle" />
                          </td>
                          <td>
                            <span className="font-weight-medium">
                              New sale: Chocolate Cake
                            </span>
                          </td>
                          <td className="text-right">
                            <span className="text-muted">08:20</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Tickets</h5>
                  <div className="scroll dashboard-list-with-user">
                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                      <a href="#">
                        <img
                          src="img/profiles/l-1.jpg"
                          alt="Mayra Sibley"
                          className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                        />
                      </a>
                      <div className="pl-3">
                        <a href="#">
                          <p className="font-weight-medium mb-0 ">
                            Mayra Sibley
                          </p>
                          <p className="text-muted mb-0 text-small">
                            09.08.2018 - 12:45
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                      <a href="#">
                        <img
                          src="img/profiles/l-7.jpg"
                          alt="Mimi Carreira"
                          className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                        />
                      </a>
                      <div className="pl-3">
                        <a href="#">
                          <p className="font-weight-medium mb-0 ">
                            Mimi Carreira
                          </p>
                          <p className="text-muted mb-0 text-small">
                            05.08.2018 - 10:20
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                      <a href="#">
                        <img
                          src="img/profiles/l-6.jpg"
                          alt="Philip Nelms"
                          className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                        />
                      </a>
                      <div className="pl-3">
                        <a href="#">
                          <p className="font-weight-medium mb-0 ">
                            Philip Nelms
                          </p>
                          <p className="text-muted mb-0 text-small">
                            05.08.2018 - 09:12
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                      <a href="#">
                        <img
                          src="img/profiles/l-3.jpg"
                          alt="Terese Threadgill"
                          className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                        />
                      </a>
                      <div className="pl-3">
                        <a href="#">
                          <p className="font-weight-medium mb-0 ">
                            Terese Threadgill
                          </p>
                          <p className="text-muted mb-0 text-small">
                            01.08.2018 - 18:20
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                      <a href="#">
                        <img
                          src="img/profiles/l-5.jpg"
                          alt="Kathryn Mengel"
                          className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                        />
                      </a>
                      <div className="pl-3">
                        <a href="#">
                          <p className="font-weight-medium mb-0 ">
                            Kathryn Mengel
                          </p>
                          <p className="text-muted mb-0 text-small">
                            27.07.2018 - 11:45
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                      <a href="#">
                        <img
                          src="img/profiles/l-4.jpg"
                          alt="Esperanza Lodge"
                          className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                        />
                      </a>
                      <div className="pl-3">
                        <a href="#">
                          <p className="font-weight-medium mb-0 ">
                            Esperanza Lodge
                          </p>
                          <p className="text-muted mb-0 text-small">
                            24.07.2018 - 15:00
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Calendar</h5>
                  <div className="calendar" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Best Sellers</h5>
                  <table
                    className="data-table data-table-standard responsive nowrap"
                    data-order='[[ 1, "desc" ]]'
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Sales</th>
                        <th>Stock</th>
                        <th>Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="list-item-heading">Marble Cake</p>
                        </td>
                        <td>
                          <p className="text-muted">1452</p>
                        </td>
                        <td>
                          <p className="text-muted">62</p>
                        </td>
                        <td>
                          <p className="text-muted">Cupcakes</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Fruitcake</p>
                        </td>
                        <td>
                          <p className="text-muted">1245</p>
                        </td>
                        <td>
                          <p className="text-muted">65</p>
                        </td>
                        <td>
                          <p className="text-muted">Desserts</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Chocolate Cake</p>
                        </td>
                        <td>
                          <p className="text-muted">1200</p>
                        </td>
                        <td>
                          <p className="text-muted">45</p>
                        </td>
                        <td>
                          <p className="text-muted">Desserts</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Bebinca</p>
                        </td>
                        <td>
                          <p className="text-muted">1150</p>
                        </td>
                        <td>
                          <p className="text-muted">4</p>
                        </td>
                        <td>
                          <p className="text-muted">Cupcakes</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Napoleonshat</p>
                        </td>
                        <td>
                          <p className="text-muted">1050</p>
                        </td>
                        <td>
                          <p className="text-muted">41</p>
                        </td>
                        <td>
                          <p className="text-muted">Cakes</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Magdalena</p>
                        </td>
                        <td>
                          <p className="text-muted">998</p>
                        </td>
                        <td>
                          <p className="text-muted">24</p>
                        </td>
                        <td>
                          <p className="text-muted">Cakes</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">
                            Salzburger Nockerl
                          </p>
                        </td>
                        <td>
                          <p className="text-muted">924</p>
                        </td>
                        <td>
                          <p className="text-muted">20</p>
                        </td>
                        <td>
                          <p className="text-muted">Desserts</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Soufflé</p>
                        </td>
                        <td>
                          <p className="text-muted">905</p>
                        </td>
                        <td>
                          <p className="text-muted">64</p>
                        </td>
                        <td>
                          <p className="text-muted">Cupcakes</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Cremeschnitte</p>
                        </td>
                        <td>
                          <p className="text-muted">845</p>
                        </td>
                        <td>
                          <p className="text-muted">12</p>
                        </td>
                        <td>
                          <p className="text-muted">Desserts</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Cheesecake</p>
                        </td>
                        <td>
                          <p className="text-muted">830</p>
                        </td>
                        <td>
                          <p className="text-muted">36</p>
                        </td>
                        <td>
                          <p className="text-muted">Desserts</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Gingerbread</p>
                        </td>
                        <td>
                          <p className="text-muted">807</p>
                        </td>
                        <td>
                          <p className="text-muted">21</p>
                        </td>
                        <td>
                          <p className="text-muted">Cupcakes</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="list-item-heading">Goose Breast</p>
                        </td>
                        <td>
                          <p className="text-muted">795</p>
                        </td>
                        <td>
                          <p className="text-muted">9</p>
                        </td>
                        <td>
                          <p className="text-muted">Cupcakes</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 mb-4">
              <div className="card dashboard-progress">
                <div className="position-absolute card-top-buttons">
                  <button className="btn btn-header-light icon-button">
                    <i className="simple-icon-refresh" />
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Profile Status</h5>
                  <div className="mb-4">
                    <p className="mb-2">
                      <span>Basic Information</span>
                      <span className="float-right text-muted">12/18</span>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={66}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2">
                      Portfolio
                      <span className="float-right text-muted">1/8</span>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={12}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2">
                      Billing Details
                      <span className="float-right text-muted">2/6</span>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={33}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2">
                      Interests
                      <span className="float-right text-muted">0/8</span>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2">
                      Legal Documents
                      <span className="float-right text-muted">1/2</span>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card dashboard-sq-banner justify-content-end">
                <div className="card-body justify-content-end d-flex flex-column">
                  <span className="badge badge-pill badge-theme-3 align-self-start mb-3">
                    DORE
                  </span>
                  <p className="lead text-white">MAGIC IS IN THE DETAILS</p>
                  <p className="text-white">Yes, it is indeed!</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card dashboard-link-list">
                <div className="card-body">
                  <h5 className="card-title">Cakes</h5>
                  <div className="d-flex flex-row">
                    <div className="w-50">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                          <a href="#">Marble Cake</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Fruitcake</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Chocolate Cake</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Fat Rascal</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Financier</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Genoise</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Gingerbread</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Goose Breast</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Parkin</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Petit Gâteau</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Salzburger Nockerl</a>
                        </li>
                        <li>
                          <a href="#">Soufflé</a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-50">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                          <a href="#">Streuselkuchen</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Tea Loaf</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Napoleonshat</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Merveilleux</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Magdalena</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Cremeschnitte</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Cheesecake</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Bebinca</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Fruitcake</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Chocolate Cake</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Fat Rascal</a>
                        </li>
                        <li className="mb-1">
                          <a href="#">Financier</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sortable">
            <div className="col-xl-3 col-lg-6 mb-4">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <div className="position-absolute handle card-icon">
                    <i className="simple-icon-shuffle" />
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Payment Status</h6>
                  <div
                    role="progressbar"
                    className="progress-bar-circle position-relative"
                    data-color="#922c88"
                    data-trailcolor="#d7d7d7"
                    aria-valuemax={100}
                    aria-valuenow={40}
                    data-show-percent="true"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 mb-4">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <div className="position-absolute handle card-icon">
                    <i className="simple-icon-shuffle" />
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Work Progress</h6>
                  <div
                    role="progressbar"
                    className="progress-bar-circle position-relative"
                    data-color="#922c88"
                    data-trailcolor="#d7d7d7"
                    aria-valuemax={100}
                    aria-valuenow={64}
                    data-show-percent="true"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 mb-4">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <div className="position-absolute handle card-icon">
                    <i className="simple-icon-shuffle" />
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Tasks Completed</h6>
                  <div
                    role="progressbar"
                    className="progress-bar-circle position-relative"
                    data-color="#922c88"
                    data-trailcolor="#d7d7d7"
                    aria-valuemax={100}
                    aria-valuenow={75}
                    data-show-percent="true"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 mb-4">
              <div className="card">
                <div className="card-header p-0 position-relative">
                  <div className="position-absolute handle card-icon">
                    <i className="simple-icon-shuffle" />
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Payments Done</h6>
                  <div
                    role="progressbar"
                    className="progress-bar-circle position-relative"
                    data-color="#922c88"
                    data-trailcolor="#d7d7d7"
                    aria-valuemax={100}
                    aria-valuenow={32}
                    data-show-percent="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <div className="card dashboard-filled-line-chart">
                <div className="card-body ">
                  <div className="float-left float-none-xs">
                    <div className="d-inline-block">
                      <h5 className="d-inline">Website Visits</h5>
                      <span className="text-muted text-small d-block">
                        Unique Visitors
                      </span>
                    </div>
                  </div>
                  <div className="btn-group float-right float-none-xs mt-2">
                    <button
                      className="btn btn-outline-primary btn-xs dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      This Week
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Last Week
                      </a>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </div>
                  </div>
                </div>
                <div className="chart card-body pt-0">
                  <canvas id="visitChart" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <div className="card dashboard-filled-line-chart">
                <div className="card-body ">
                  <div className="float-left float-none-xs">
                    <div className="d-inline-block">
                      <h5 className="d-inline">Conversion Rates</h5>
                      <span className="text-muted text-small d-block">
                        Per Session
                      </span>
                    </div>
                  </div>
                  <div className="btn-group float-right mt-2 float-none-xs">
                    <button
                      className="btn btn-outline-secondary btn-xs dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      This Week
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Last Week
                      </a>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </div>
                  </div>
                </div>
                <div className="chart card-body pt-0">
                  <canvas id="conversionChart" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-12 col-xl-4">
              <div className="row">
                <div className="col-xl-12 col-lg-4">
                  <div className="card mb-4 progress-banner">
                    <div className="card-body justify-content-between d-flex flex-row align-items-center">
                      <div>
                        <i className="iconsminds-file mr-2 text-white align-text-bottom d-inline-block" />
                        <div>
                          <p className="lead text-white">5 Files</p>
                          <p className="text-small text-white">
                            Pending for print
                          </p>
                        </div>
                      </div>
                      <div>
                        <div
                          role="progressbar"
                          className="progress-bar-circle progress-bar-banner position-relative"
                          data-color="white"
                          data-trail-color="rgba(255,255,255,0.2)"
                          aria-valuenow={5}
                          aria-valuemax={12}
                          data-show-percent="false"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-4">
                  <div className="card mb-4 progress-banner">
                    <div className="card-body justify-content-between d-flex flex-row align-items-center">
                      <div>
                        <i className="iconsminds-male mr-2 text-white align-text-bottom d-inline-block" />
                        <div>
                          <p className="lead text-white">4 Orders</p>
                          <p className="text-small text-white">
                            On approval process
                          </p>
                        </div>
                      </div>
                      <div>
                        <div
                          role="progressbar"
                          className="progress-bar-circle progress-bar-banner position-relative"
                          data-color="white"
                          data-trail-color="rgba(255,255,255,0.2)"
                          aria-valuenow={4}
                          aria-valuemax={6}
                          data-show-percent="false"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-4">
                  <div className="card mb-4 progress-banner">
                    <a
                      href="#"
                      className="card-body justify-content-between d-flex flex-row align-items-center"
                    >
                      <div>
                        <i className="iconsminds-bell mr-2 text-white align-text-bottom d-inline-block" />
                        <div>
                          <p className="lead text-white">8 Alerts</p>
                          <p className="text-small text-white">
                            Waiting for notice
                          </p>
                        </div>
                      </div>
                      <div>
                        <div
                          role="progressbar"
                          className="progress-bar-circle progress-bar-banner position-relative"
                          data-color="white"
                          data-trail-color="rgba(255,255,255,0.2)"
                          aria-valuenow={8}
                          aria-valuemax={10}
                          data-show-percent="false"
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-lg-6 col-sm-12 mb-4">
              <div className="card dashboard-search">
                <div className="card-body">
                  <h5 className="text-white mb-3">Advanced Search</h5>
                  <div className="form-container">
                    <form>
                      <div className="form-group">
                        <label>State</label>
                        <select
                          className="form-control select2-single"
                          data-width="100%"
                        >
                          <option label=" ">&nbsp;</option>
                          <optgroup label="Alaskan/Hawaiian Time Zone">
                            <option value="AK">Alaska</option>
                            <option value="HI">Hawaii</option>
                          </optgroup>
                          <optgroup label="Pacific Time Zone">
                            <option value="CA">California</option>
                            <option value="NV">Nevada</option>
                            <option value="OR">Oregon</option>
                            <option value="WA">Washington</option>
                          </optgroup>
                          <optgroup label="Mountain Time Zone">
                            <option value="AZ">Arizona</option>
                            <option value="CO">Colorado</option>
                            <option value="ID">Idaho</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NM">New Mexico</option>
                            <option value="ND">North Dakota</option>
                            <option value="UT">Utah</option>
                            <option value="WY">Wyoming</option>
                          </optgroup>
                          <optgroup label="Central Time Zone">
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="IL">Illinois</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="OK">Oklahoma</option>
                            <option value="SD">South Dakota</option>
                            <option value="TX">Texas</option>
                            <option value="TN">Tennessee</option>
                            <option value="WI">Wisconsin</option>
                          </optgroup>
                          <optgroup label="Eastern Time Zone">
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="IN">Indiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="OH">Ohio</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WV">West Virginia</option>
                          </optgroup>
                          <option value="TNOGZ" disabled="disabled">
                            The No Optgroup Zone
                          </option>
                          <option value="TPZ">The Panic Zone</option>
                          <option value="TTZ">The Twilight Zone</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>City</label>
                        <select
                          className="form-control select2-single"
                          data-width="100%"
                        >
                          <option label=" ">&nbsp;</option>
                          <optgroup label="Alaskan/Hawaiian Time Zone">
                            <option value="AK">Alaska</option>
                            <option value="HI">Hawaii</option>
                          </optgroup>
                          <optgroup label="Pacific Time Zone">
                            <option value="CA">California</option>
                            <option value="NV">Nevada</option>
                            <option value="OR">Oregon</option>
                            <option value="WA">Washington</option>
                          </optgroup>
                          <optgroup label="Mountain Time Zone">
                            <option value="AZ">Arizona</option>
                            <option value="CO">Colorado</option>
                            <option value="ID">Idaho</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NM">New Mexico</option>
                            <option value="ND">North Dakota</option>
                            <option value="UT">Utah</option>
                            <option value="WY">Wyoming</option>
                          </optgroup>
                          <optgroup label="Central Time Zone">
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="IL">Illinois</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="OK">Oklahoma</option>
                            <option value="SD">South Dakota</option>
                            <option value="TX">Texas</option>
                            <option value="TN">Tennessee</option>
                            <option value="WI">Wisconsin</option>
                          </optgroup>
                          <optgroup label="Eastern Time Zone">
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="IN">Indiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="OH">Ohio</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WV">West Virginia</option>
                          </optgroup>
                          <option value="TNOGZ" disabled="disabled">
                            The No Optgroup Zone
                          </option>
                          <option value="TPZ">The Panic Zone</option>
                          <option value="TTZ">The Twilight Zone</option>
                        </select>
                      </div>
                      <div className="form-group mb-5">
                        <label>Date</label>
                        <div className="input-group date">
                          <input type="text" className="form-control" />
                          <span className="input-group-text input-group-append input-group-addon">
                            <i className="simple-icon-calendar" />
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-5">
                        <label>Price Range</label>
                        <div>
                          <div className="slider" id="dashboardPriceRange" />
                        </div>
                      </div>
                      <div className="form-group text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg mt-3"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mb-4">
              <div className="row">
                <div className="col-6 mb-4">
                  <div className="card dashboard-small-chart">
                    <div className="card-body">
                      <p className="lead color-theme-1 mb-1 value" />
                      <p className="mb-0 label text-small" />
                      <div className="chart">
                        <canvas id="smallChart1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card dashboard-small-chart">
                    <div className="card-body">
                      <p className="lead color-theme-1 mb-1 value" />
                      <p className="mb-0 label text-small" />
                      <div className="chart">
                        <canvas id="smallChart2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card dashboard-small-chart">
                    <div className="card-body">
                      <p className="lead color-theme-1 mb-1 value" />
                      <p className="mb-0 label text-small" />
                      <div className="chart">
                        <canvas id="smallChart3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card dashboard-small-chart">
                    <div className="card-body">
                      <p className="lead color-theme-1 mb-1 value" />
                      <p className="mb-0 label text-small" />
                      <div className="chart">
                        <canvas id="smallChart4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card dashboard-top-rated">
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
                    <a className="dropdown-item" href="#">
                      Top Sold Items
                    </a>
                    <a className="dropdown-item" href="#">
                      Top Commented Items
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Top Rated Items</h5>
                  <div className="glide best-rated-items">
                    <div className="glide__track" data-glide-el="track">
                      <div className="glide__slides">
                        <div className="glide__slide">
                          <img
                            src="img/carousels/1.jpg"
                            alt="Cheesecake"
                            className="mb-4"
                          />
                          <h6 className="mb-1">
                            <span className="mr-2">1.</span>Cheesecake
                          </h6>
                          <select
                            className="rating"
                            data-current-rating={5}
                            data-readonly="true"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                          <p className="text-small text-muted mb-0  d-inline-block">
                            (48)
                          </p>
                        </div>
                        <div className="glide__slide">
                          <img
                            src="img/carousels/2.jpg"
                            alt="Chocolate Cake"
                            className="mb-4"
                          />
                          <h6 className="mb-1">
                            <span className="mr-2">2.</span>Chocolate Cake
                          </h6>
                          <select
                            className="rating"
                            data-current-rating={5}
                            data-readonly="true"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                          <p className="text-small text-muted mb-0  d-inline-block">
                            (48)
                          </p>
                        </div>
                        <div className="glide__slide">
                          <img
                            src="img/carousels/3.jpg"
                            alt="Cremeschnitte"
                            className="mb-4"
                          />
                          <h6 className="mb-1">
                            <span className="mr-2">3.</span>Cremeschnitte
                          </h6>
                          <select
                            className="rating"
                            data-current-rating={5}
                            data-readonly="true"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                          <p className="text-small text-muted mb-0  d-inline-block">
                            (48)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="page-footer">
        <div className="footer-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6">
                <p className="mb-0 text-muted">ColoredStrategies 2019</p>
              </div>
              <div className="col-sm-6 d-none d-sm-block">
                <ul className="breadcrumb pt-0 pr-0 float-right">
                  <li className="breadcrumb-item mb-0">
                    <a href="#" className="btn-link">
                      Review
                    </a>
                  </li>
                  <li className="breadcrumb-item mb-0">
                    <a href="#" className="btn-link">
                      Purchase
                    </a>
                  </li>
                  <li className="breadcrumb-item mb-0">
                    <a href="#" className="btn-link">
                      Docs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <button onClick={onClick}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
