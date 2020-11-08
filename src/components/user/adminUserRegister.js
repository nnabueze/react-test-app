import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { signupService } from "../../services/AuthService";
import AlertNotice from "../../shared/alert";
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

const AdminUserRegister = (props) => {
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
    <div
      className="modal fade modal-right"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <Formik
          initialValues={initialValue}
          validationSchema={signupScheme}
          onSubmit={(data) => handleSubmit(data)}
        >
          {({ handleSubmit }) => {
            return (
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
                <AlertNotice
                  message={message}
                  isNotError={isNotError}
                  isError={isError}
                />
                <div className="modal-body">
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
                        type="button"
                        className="btn btn-outline-primary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <button
                        type="submit"
                        className="btn btn-primary"
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
                </div>
                <div className="modal-footer"></div>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AdminUserRegister;
