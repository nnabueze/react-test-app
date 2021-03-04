import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupService } from "../../services/AuthService";
import AlertNotice from "../../shared/alert";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../shared/textInput";

const signupScheme = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string().required().email(),
  phone: Yup.string().required(),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const SignupPage = (props) => {
  const [isError, setisError] = useState(false);
  const [isNotError, setisNotError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e) => {
    setisLoading(true);
    setisError(false);
    setisNotError(false);

    const response = await signupService({
      firstName: e.firstname,
      lastName: e.lastname,
      phone: e.phone,
      email: e.email,
      password: e.password,
      passwordConfirmation: e.confirmPassword,
    });

    if (response) {
      setisLoading(false);
      setisNotError(true);
      setMessage("Account created Successfully");
    } else {
      setisLoading(false);

      setisError(true);

      setMessage("Error occured! Kindly check email");
    }
  };

  return (
    <div className="background show-spinner no-footer">
      <div className="fixed-background"></div>
      <main>
        <div className="container">
          <div className="row h-100">
            <div className="col-12 col-md-10 mx-auto my-auto">
              <div className="card auth-card">
                <div className="position-relative image-side ">
                  <p className=" text-white h2">Ercas SSO</p>
                  <p className="white mb-0">
                    <Link to="/" className="white">
                      If you are a member, please login .
                    </Link>
                  </p>
                </div>
                <div className="form-side">
                  <Link to="/dashboard">
                    <span>
                      <img src="/logo.png" alt="logo" />
                    </span>
                  </Link>
                  <AlertNotice
                    message={message}
                    isNotError={isNotError}
                    isError={isError}
                  />
                  <h6 className="mb-4">Register</h6>
                  <Formik
                    initialValues={initialValue}
                    validationSchema={signupScheme}
                    onSubmit={(data) => handleSubmit(data)}
                  >
                    {({ handleSubmit }) => {
                      return (
                        <form onSubmit={handleSubmit}>
                          <TextInput name={"firstname"} label={"First Name"} />

                          <TextInput name={"lastname"} label={"Last Name"} />

                          <TextInput name={"email"} label={"E-mail"} />

                          <TextInput name={"phone"} label={"Phone Number"} />

                          <TextInput
                            type={"password"}
                            name={"password"}
                            label={"Password"}
                          />

                          <TextInput
                            type={"password"}
                            name={"confirmPassword"}
                            label={"Confirm Password"}
                          />
                          <div className="d-flex justify-content-end align-items-center">
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
                              {!isLoading && <span>REGISTER</span>}
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

export default SignupPage;
