import React, { useState, useContext, useEffect } from "react";
import { LoginService } from "../../services/AuthService";
import { AuthContext } from "../../context/AuthContext";
import { AuthActionSuccess } from "../../actions/AuthAction";

const Login = (props) => {
  const { dispatch, auth } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        props.history.push("/dashboard");
      }
    }
  }, [auth, props]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    const response = await LoginService({
      email: userName,
      password: password,
    });

    responseDisplay(response);
  };

  const responseDisplay = (response) => {
    setUserName("");
    setPassword("");

    if (typeof response !== "undefined") {
      setisLoading(false);

      if (response.status) {
        dispatch(AuthActionSuccess(response));
        props.history.push("/");
      } else {
        setisError(true);
        setMessage(response.message);
      }
      //redirect
    } else {
      setisLoading(false);

      setisError(true);

      setMessage("Network Error...Kindly check network");
    }
  };

  return (
    <div className="limiter">
      <div className="container-login100 page-background">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-logo">
              <img alt="" src="../assets/img/logo-2.png" />
            </span>
            <span className="login100-form-title p-b-34 p-t-27">Log in</span>
            {isError && (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            )}
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter username"
            >
              <input
                className="input100"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="username"
                placeholder="Username"
              />
              <span className="focus-input100" data-placeholder="" />
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                className="input100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="pass"
                placeholder="Password"
              />
              <span className="focus-input100" data-placeholder="" />
            </div>
            <div className="contact100-form-checkbox">
              <input
                className="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label className="label-checkbox100" htmlFor="ckb1">
                Remember me
              </label>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn" disabled={isLoading}>
                {isLoading && (
                  <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {isLoading && <span>Waiting</span>}
                {!isLoading && <span>Login</span>}
              </button>
            </div>
            <div className="text-center p-t-30">
              <a className="txt1" href="forgot_password.html">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
