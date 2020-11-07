import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TopNav from "../../shared/topNav";
import ActiveUserWidget from "./activeUserWidget";

const ActiveUserPage = (props) => {
  return (
    <div>
      <TopNav />
      <Menu />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mb-2">
                <h1>Active Users Page</h1>
                <nav
                  className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb pt-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Active Users</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">View User</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add User
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="separator mb-5" />
              <ActiveUserWidget />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ActiveUserPage;
