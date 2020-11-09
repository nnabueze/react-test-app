import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { activateUser, getUsersById } from "../../services/AdminService";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TopNav from "../../shared/topNav";
import UserDetailWidget from "./userDetailWidget";

const UserDetail = (props) => {
  const { auth } = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [firstName, setFirstName] = useState("");
  const [id, setId] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");
  const [role, setRole] = useState("");
  const [lastLoginDate, setLastLoginDate] = useState("");
  const [isEmailConfirmed, setIsEmailConfirmed] = useState("");
  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState("");
  const [isActive, setIsActive] = useState("");
  const userId = { fontSize: 22 };
  const buttonDiv = { padding: 20 };

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setToken(auth.data.token);
      } else {
        window.location = "/";
      }
    }
  }, [auth]);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const idFromURL = params.get("id");
    if (token !== "") {
      const tokenParam = {
        access: token,
        id: idFromURL,
      };
      async function callGetUser() {
        const response = await getUsersById(tokenParam);
        setFirstName(response.firstName);
        setId(response.id);
        setLastName(response.lastName);
        setOtherNames(response.otherNames);
        setEmail(response.email);
        setPhone(response.phone);
        setCreatedDate(response.createdDate);
        setLastUpdatedDate(response.lastUpdatedDate);
        setRole(response.role);
        setLastLoginDate(response.lastLoginDate);
        setIsEmailConfirmed(response.isEmailConfirmed);
        setIsPhoneConfirmed(response.isPhoneConfirmed);
        setIsActive(response.isActive);
      }

      try {
        callGetUser();
      } catch (e) {
        console.log(e);
      }
    }
  }, [token]);

  const back = () => {
    window.history.go(-1);
  };

  const redirectUser = () => {
    window.location = "/users";
  };

  const deActivateUserClick = async (id) => {
    const activateParam = {
      access: token,
      data: {
        userId: auth.data.id,
        requestedUserId: id,
      },
    };

    const response = await activateUser(activateParam, false);
    console.log("this is response: " + response);
  };

  const activateUserClick = async (id) => {
    const activateParam = {
      access: token,
      data: {
        userId: id,
        requestedUserId: auth.data.id,
      },
    };

    const response = await activateUser(activateParam, true);
    console.log("this is response: " + response);
  };

  return (
    <div>
      <TopNav />
      <Menu />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>User Detail</h1>
              <nav
                className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb pt-0">
                  <li className="breadcrumb-item">
                    <Link onClick={redirectUser}>Users</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Details</a>
                  </li>
                </ol>
              </nav>
              <div className="separator mb-5" />
              <div className="col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div
                        className="col-lg-6 col-md-6"
                        style={{ padding: 20 }}
                      >
                        <span>
                          <img
                            alt="Profile "
                            src="/avarter.png"
                            style={{ height: 150, width: 150 }}
                          />
                        </span>
                      </div>
                      <div
                        className="col-lg-6 col-md-6"
                        style={{ paddingTop: 70, textAlign: "center" }}
                      >
                        <div className="row" style={userId}>
                          <span>
                            <strong>ID: {id}</strong>
                          </span>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="row">
                          {isActive ? (
                            <button
                              type="button"
                              onClick={() => deActivateUserClick(id)}
                              className="btn btn-success btn-lg mb-4"
                            >
                              Active
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => activateUserClick(id)}
                              className="btn btn-danger btn-lg mb-4"
                            >
                              InActive
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="separator mb-5" />
                    <UserDetailWidget
                      title1="First Name"
                      value1={firstName}
                      title2="Last Name"
                      value2={lastName}
                      title3="Others"
                      value3={otherNames}
                    />
                    <UserDetailWidget
                      title1="Phone Number"
                      value1={phone}
                      title2="Email"
                      value2={email}
                      title3="Role"
                      value3={role}
                    />
                    <UserDetailWidget
                      title1="IsEmailConfirmed"
                      value1={isEmailConfirmed ? "Yes" : "No"}
                      title2="IsPhoneConfirmed"
                      value2={isPhoneConfirmed ? "Yes" : "No"}
                      title3="IsActive"
                      value3={isActive ? "Yes" : "No"}
                    />
                    <UserDetailWidget
                      title1="Added Date"
                      value1={createdDate}
                      title2="Last Login"
                      value2={lastLoginDate}
                      title3="Last Update"
                      value3={lastUpdatedDate}
                    />
                    <div className="row" style={buttonDiv}>
                      <div className="col-lg-6 col-md-6">
                        <button
                          type="button"
                          onClick={back}
                          className="btn btn-lg btn-outline-dark mb-1"
                        >
                          Back
                        </button>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <button
                          type="button"
                          className="btn btn-lg btn-outline-danger mb-1"
                        >
                          Disable
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserDetail;
