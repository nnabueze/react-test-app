import React, { useState, useContext, useEffect } from "react";
import { LoginService } from "../../services/AuthService";
import { AuthContext } from "../../context/AuthContext";
import { AuthActionSuccess, LogoutAction } from "../../actions/AuthAction";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ERCASCOLLECT,
  ERCASPAY,
  ERCASPAY_URL,
  ERCASCOLLECT_URL,
  ERCASSERVICE_URL,
  ERCASSERVICE,
} from "../../constants";
import TextInput from "../../shared/textInput";

const loginScheme = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const Login = (props) => {
  const { dispatch, auth } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [message, setMessage] = useState("");
  const [appId, setAppId] = useState("");

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        window.location = "/dashboard";
      } else {
        const appIdParam = getAppId();
        setAppId(appIdParam);
      }
    }
  }, []);

  const getAppId = () => {
    return props.match.params.id;
  };

  const handleSubmit = async (e) => {
    setisLoading(true);

    try {
      const response = await LoginService({
        email: e.email,
        password: e.password,
      });

      responseDisplay(response);
    } catch (e) {
      setisLoading(false);
      setisError(true);
      setMessage(e.message);
    }
  };

  const responseDisplay = (response) => {
    if (typeof response !== "undefined") {
      setisLoading(false);
      handleSetCookie(response);
      dispatch(AuthActionSuccess(response));
      pageRedirect();
    } else {
      setisLoading(false);
      setisError(true);
      setMessage("Network Error...Kindly check network");
    }
  };

  const logout = () => {
    dispatch(LogoutAction());
  };

  const pageRedirect = () => {
    switch (appId) {
      case ERCASPAY:
        window.location = ERCASPAY_URL;
        logout();
        break;
      case ERCASCOLLECT:
        window.location = ERCASCOLLECT_URL;
        logout();
        break;
      case ERCASSERVICE:
        window.location = ERCASSERVICE_URL;
        logout();
        break;
      default:
        window.location = "/dashboard";
    }
  };

  const handleSetCookie = (data) => {
    const userData = {
      id: data.id,
      phone: data.phone,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      otherNames: data.otherNames,
      lastLoginDate: data.lastLoginDate,
      token: data.token,
    };

    const user = JSON.stringify(userData);

    Cookies.set("user", user, { domain: ".ercas.ng" });
  };

  return (
    <div className="background show-spinner no-footer">
      <div className="fixed-background" />
      <main className="default-transition">
        <div className="container">
          <div className="row h-100">
            <div className="col-12 col-md-10 mx-auto my-auto">
              <div className="card auth-card">
                <div className="position-relative image-side ">
                  <p className=" text-white h2">Ercas Single Sign-On</p>
                  <p className="white mb-0">
                    <Link to="/register" className="white">
                      Please use your credentials to login.
                      <br />
                      If you are not a member, please register
                    </Link>{" "}
                    .
                  </p>
                </div>
                <div className="form-side">
                  <Link to="/dashboard">
                    <span>
                      <img src="/logo.png" alt="logo" />
                    </span>
                  </Link>
                  {isError && (
                    <div
                      className="alert alert-warning alert-dismissible fade show rounded mb-0"
                      role="alert"
                    >
                      <strong>Error !&nbsp;&nbsp;</strong> {message}
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <h6 className="mb-4">Login</h6>

                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={loginScheme}
                    onSubmit={(data) => handleSubmit(data)}
                  >
                    {({ handleSubmit }) => {
                      return (
                        <form onSubmit={handleSubmit}>
                          <TextInput name={"email"} label={"E-mail"} />
                          <TextInput
                            type="password"
                            name={"password"}
                            label={"Password"}
                          />
                          <div className="d-flex justify-content-between align-items-center">
                            <Link to="#">Forget password?</Link>
                            <button
                              className="btn btn-primary btn-lg btn-shadow"
                              type="submit"
                              disabled={isLoading}
                            >
                              {isLoading && (
                                <i
                                  className="fa fa-refresh fa-spin"
                                  style={{ marginRight: "5px", color: "white" }}
                                />
                              )}
                              {isLoading && <span>&nbsp;&nbsp;WAITING</span>}
                              {!isLoading && <span>LOGIN</span>}
                            </button>
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
