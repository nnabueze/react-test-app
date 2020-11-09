import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { editUser } from "../../services/AdminService";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TextInput from "../../shared/textInput";
import TopNav from "../../shared/topNav";
import * as Yup from "yup";

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
  const [values, setValues] = useState({});

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
    const param = {
      access: token,
      data: {
        firstName: e.firstname,
        lastName: e.lastname,
        phone: e.phone,
        email: e.email,
      },
    };
    try {
      const response = await editUser(param);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    console.log(event);
    setFirstName(event.terget.firstName);
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
                  <div className="card-body">
                    <Formik
                      initialValues={initialValue}
                      validationSchema={signupScheme}
                      onSubmit={(data) => handleSubmit(data)}
                    >
                      {({ handleSubmit }) => {
                        return (
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
                                    onChange={(e) => handleChange(e)}
                                    value={firstName}
                                  />
                                  <span>First Name</span>
                                </label>
                              </div>
                              <div className="col-6">
                                <TextInput
                                  name={"lastname"}
                                  label={"Last Name"}
                                  value={lastName}
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <TextInput
                                  value={otherNames}
                                  name={"othername"}
                                  label={"Other Names"}
                                />
                              </div>
                              <div className="col-6">
                                <TextInput
                                  name={"phone"}
                                  label={"Phone Number"}
                                  value={phone}
                                />
                              </div>
                            </div>
                            <TextInput
                              name={"email"}
                              label={"E-mail"}
                              value={email}
                            />
                            <div className="d-flex justify-content-end align-items-center">
                              <button
                                className="btn btn-primary btn-lg btn-shadow"
                                type="submit"
                              >
                                <span>SUBMIT</span>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditUserPage;
