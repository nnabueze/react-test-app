import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { editUser } from "../../services/AdminService";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TextInput from "../../shared/textInput";
import TopNav from "../../shared/topNav";
import * as Yup from "yup";
import AlertNotice from "../../shared/alert";

const signupScheme = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string().required().email(),
  phone: Yup.string().required(),
});

const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
};

const EditUserPage = () => {
  const { auth } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [token, setToken] = useState("");
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

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setFirstName(auth.data.firstName);
        setLastName(auth.data.lastName);
        setEmail(auth.data.email);
        setPhone(auth.data.phone);
        setOtherNames(auth.data.otherNames);
      } else {
        window.location = "/";
      }
    }
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const param = {
      access: token,
      data: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        requestedByUserId: auth.data.id,
        userId: auth.data.id,
      },
    };
    try {
      const response = await editUser(param);
      console.log(`test: ${response.id}`);
      if (response) {
        setisLoading(false);
        setMessage("Edited Successfully!");
        setisNotError(true);
      }
    } catch (e) {
      setisLoading(false);
      setMessage(e.message);
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
                <h1>Edit User</h1>
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
                                paddingBottom: 30,
                              }}
                              className="form-control"
                              name="firstName"
                              onChange={(e) => setFirstName(e.target.value)}
                              value={firstName}
                            />
                            <span>First Name</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <label className="form-group has-float-label mb-4">
                            <input
                              style={{
                                paddingTop: 30,
                                paddingBottom: 30,
                              }}
                              className="form-control"
                              name="lastName"
                              onChange={(e) => setLastName(e.target.value)}
                              value={lastName}
                            />
                            <span>Last Name</span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <label className="form-group has-float-label mb-4">
                            <input
                              style={{
                                paddingTop: 30,
                                paddingBottom: 30,
                              }}
                              className="form-control"
                              name="othername"
                              onChange={(e) => setOtherNames(e.target.value)}
                              value={otherNames}
                            />
                            <span>Other Name</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <label className="form-group has-float-label mb-4">
                            <input
                              style={{
                                paddingTop: 30,
                                paddingBottom: 30,
                              }}
                              className="form-control"
                              name="phone"
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
                              disabled
                            />
                            <span>Phone Number</span>
                          </label>
                        </div>
                      </div>
                      <label className="form-group has-float-label mb-4">
                        <input
                          style={{
                            paddingTop: 30,
                            paddingBottom: 30,
                          }}
                          className="form-control"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          disabled
                        />
                        <span>Email</span>
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

export default EditUserPage;
