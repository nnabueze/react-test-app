import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TextInput from "../../shared/textInput";
import TopNav from "../../shared/topNav";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { password } from "../../services/AdminService";

const signupScheme = Yup.object().shape({
  confirmpassword: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValue = {
  password: "",
  confirmpassword: "",
};
const PasswordChange = () => {
  const { auth } = useContext(AuthContext);
  const [token, setToken] = useState("");

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
    const param = {
      access: token,
      data: {
        requestedByUserId: auth.data.id,
        userId: auth.data.id,
        password: e.password,
        passwordConfirmation: e.email,
      },
    };
    try {
      const response = await password(param);
      console.log(response);
    } catch (e) {
      console.log(e);
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
                  <div className="card-body">
                    <Formik
                      initialValues={initialValue}
                      validationSchema={signupScheme}
                      onSubmit={(data) => handleSubmit(data)}
                    >
                      {({ handleSubmit }) => {
                        return (
                          <form onSubmit={handleSubmit}>
                            <TextInput
                              name={"password"}
                              type="password"
                              label={"Passord"}
                            />
                            <TextInput
                              name={"confirmpassword"}
                              type="password"
                              label={"Confirm Passord"}
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

export default PasswordChange;
