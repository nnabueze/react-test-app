import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signupService } from "../../services/AuthService";

const SignupPage = (props) => {
  const { dispatch } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signupService({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
      passwordConfirmation: confirmPassword,
    });

    responseDisplay(response);
  };

  const responseDisplay = (data) => {};

  return (
    <div className="background show-spinner no-footer">
      <div className="fixed-background"></div>
      <main>
        <div className="container">
          <div className="row h-100">
            <div className="col-12 col-md-10 mx-auto my-auto">
              <div className="card auth-card">
                <div className="position-relative image-side ">
                  <p className=" text-white h2">Ercas SSO Register Page</p>
                  <p className="white mb-0">
                    Please use this form to register.
                    <br />
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
                  <h6 className="mb-4">Register</h6>
                  <form onSubmit={handleSubmit}>
                    <label className="form-group has-float-label mb-4">
                      <input
                        className="form-control"
                        value={firstName}
                        name="firstname"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <span>First Name</span>
                    </label>
                    <label className="form-group has-float-label mb-4">
                      <input
                        className="form-control"
                        value={lastName}
                        name="lastname"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <span>Last Name</span>
                    </label>
                    <label className="form-group has-float-label mb-4">
                      <input
                        className="form-control"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span>E-mail</span>
                    </label>
                    <label className="form-group has-float-label mb-4">
                      <input
                        className="form-control"
                        value={phone}
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <span>Phone Number</span>
                    </label>
                    <label className="form-group has-float-label mb-4">
                      <input
                        className="form-control"
                        type="password"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span>Password</span>
                    </label>
                    <label className="form-group has-float-label mb-4">
                      <input
                        className="form-control"
                        type="password"
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <span>Confirm Password</span>
                    </label>
                    <div className="d-flex justify-content-end align-items-center">
                      <button
                        className="btn btn-primary btn-lg btn-shadow"
                        type="submit"
                      >
                        REGISTER
                      </button>
                    </div>
                  </form>
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
