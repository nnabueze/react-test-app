import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TextInput from "../../shared/textInput";
import TopNav from "../../shared/topNav";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { changeMyPassword } from "../../services/AdminService";
import AlertNotice from "../../shared/alert";

const PasswordChange = () => {
  const { auth } = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setisError] = useState(false);
  const [isNotError, setisNotError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setToken(auth.data.token);
      } else {
        window.location = "/";
      }
    }
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    if (password !== confirmPassword) {
      setisLoading(false);
      setMessage("Password Mismatch!");
      setisError(true);
      return;
    }
    const param = {
      access: token,
      data: {
        requestedByUserId: auth.data.id,
        userId: auth.data.id,
        password: password,
        passwordConfirmation: confirmPassword,
      },
    };
    try {
      const response = await changeMyPassword(param);
      if (response) {
        setisLoading(false);
        setMessage("Password Changed Successfully!");
        setisNotError(true);
        setPassword("");
        setConfirmPassword("");
      }
    } catch (e) {
      setisLoading(false);
      setMessage(e.title);
      setisError(true);
    }
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
                <h1>Change Password</h1>
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
                      <label className="form-group has-float-label mb-4">
                        <input
                          style={{
                            paddingTop: 30,
                            paddingBottom: 30,
                          }}
                          className="form-control"
                          name="password"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>New Passord</span>
                      </label>
                      <label className="form-group has-float-label mb-4">
                        <input
                          style={{
                            paddingTop: 30,
                            paddingBottom: 30,
                          }}
                          className="form-control"
                          name="confirmPassword"
                          type="password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span>Confirm Passord</span>
                      </label>

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

export default PasswordChange;
