import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TopNav from "../../shared/topNav";
import LatestUserWidget from "./latestUserWidget";

const UserPage = () => {
  return (
    <div>
      <TopNav />
      <Menu />
      <main>
        <div className="container-fluid">
          <div className="row app-row">
            <div className="col-12">
              <div className="mb-2">
                <h1>Users Page</h1>
                <nav
                  className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb pt-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Users</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">View User</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add User
                    </li>
                  </ol>
                </nav>
                <div className="top-right-button-container">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg top-right-button  mr-1"
                    data-toggle="modal"
                    data-backdrop="static"
                    data-target="#exampleModal"
                  >
                    ADD NEW
                  </button>
                  <div
                    className="modal fade modal-right"
                    id="exampleModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Add New
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-group">
                              <label>Title</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder
                              />
                            </div>
                            <div className="form-group">
                              <label>Details</label>
                              <textarea
                                className="form-control"
                                rows={2}
                                defaultValue={""}
                              />
                            </div>
                            <div className="form-group">
                              <label>Category</label>
                              <select
                                className="form-control select2-single"
                                data-width="100%"
                              >
                                <option label=" ">&nbsp;</option>
                                <option value="Flexbox">Flexbox</option>
                                <option value="Sass">Sass</option>
                                <option value="React">React</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Labels</label>
                              <select
                                className="form-control select2-multiple"
                                multiple="multiple"
                                data-width="100%"
                              >
                                <option value="New Framework">
                                  New Framework
                                </option>
                                <option value="Education">Education</option>
                                <option value="Personal">Personal</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Status</label>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                                >
                                  Completed
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            data-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="separator mb-5" />
              <LatestUserWidget />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
