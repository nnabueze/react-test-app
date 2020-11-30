import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  changeRole,
  editUser,
  getUsersById,
} from "../../services/AdminService";
import AlertNotice from "../../shared/alert";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TopNav from "../../shared/topNav";

const ChangeRolePage = (props) => {
  const { auth } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setisError] = useState(false);
  const [isNotError, setisNotError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [role, setRole] = useState("");

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
        setLastName(response.lastName);
        setOtherNames(response.otherNames);
        setEmail(response.email);
        setPhone(response.phone);
        setUserId(response.id);
        setRole(response.role);
      }

      try {
        callGetUser();
      } catch (e) {
        console.log(e);
      }
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const param = {
      access: token,
      data: {
        newRole: role,
        userId: userId,
        requestedByUserId: auth.data.id,
      },
    };
    try {
      const response = await changeRole(param);
      if (response) {
        setisLoading(false);
        setMessage("Role changed Successfully!");
        setisNotError(true);
      }
    } catch (e) {
      setisLoading(false);
      setMessage(e.message);
      setisError(true);
    }
  };

  const onChangeValue = (e) => {
    setRole(e.target.value);
  };

  return (
    <div>
      <TopNav />
      <Menu />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mb-2">
                <h1>User Role</h1>
              </div>
              <div className="separator mb-5" />

              <div className="col-xl-12 col-lg-12 mb-4">
                <div className="card h-100">
                  <div style={{ padding: 10 }}>
                    <AlertNotice
                      message={message}
                      isNotError={isNotError}
                      isError={isError}
                    />
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-6">
                          <label className="form-group has-float-label mb-4">
                            <input
                              style={{
                                paddingTop: 30,
                                paddingBottom: 20,
                              }}
                              className="form-control"
                              name="firstName"
                              value={firstName}
                              disabled
                            />
                            <span>First Name</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <label className="form-group has-float-label mb-4">
                            <input
                              style={{
                                paddingTop: 30,
                                paddingBottom: 20,
                              }}
                              className="form-control"
                              name="lastName"
                              value={lastName}
                              disabled
                            />
                            <span>Last Name</span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-8">
                          <label className="form-group has-float-label mb-4">
                            <input
                              style={{
                                paddingTop: 30,
                                paddingBottom: 20,
                              }}
                              className="form-control"
                              name="othername"
                              value={otherNames}
                              disabled
                            />
                            <span>Other Name</span>
                          </label>
                        </div>
                        <div className="col-4">
                          <label className="form-group has-float-label mb-4">
                            <input
                              style={{
                                paddingTop: 30,
                                paddingBottom: 20,
                              }}
                              className="form-control"
                              name="phone"
                              value={phone}
                              disabled
                            />
                            <span>Phone Number</span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <label class="form-group has-top-label">
                            <select
                              className="form-control"
                              data-width="100%"
                              onChange={(e) => onChangeValue(e)}
                              value={role}
                            >
                              <option value="">Select Role</option>
                              <option value="Admin">Admin</option>
                              <option value="User">User</option>
                            </select>
                            <span>Select Role</span>
                          </label>
                        </div>
                        <div className="col-8">
                          <label className="form-group has-float-label mb-4">
                            <input
                              style={{
                                paddingTop: 30,
                                paddingBottom: 20,
                              }}
                              className="form-control"
                              name="email"
                              value={email}
                              disabled
                            />
                            <span>Email</span>
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end align-items-center">
                        <button
                          className="btn btn-primary btn-lg btn-shadow"
                          type="submit"
                        >
                          {isLoading && (
                            <i
                              className="fa fa-refresh fa-spin"
                              style={{ marginRight: "5px", color: "white" }}
                            />
                          )}
                          {isLoading && <span>&nbsp;&nbsp;WAITING</span>}
                          {!isLoading && <span>SUBMIT</span>}
                        </button>
                      </div>
                    </form>
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

export default ChangeRolePage;
