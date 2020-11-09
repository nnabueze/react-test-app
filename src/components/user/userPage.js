import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TopNav from "../../shared/topNav";
import AdminUserRegister from "./adminUserRegister";
import LatestUserWidget from "./latestUserWidget";

const UserPage = () => {
  return (
    <div>
      <TopNav />
      <Menu />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mb-2">
                <h1>Users Page</h1>
                {/* <nav
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
                </nav> */}
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
                  <AdminUserRegister />
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
