import React from "react";
import "./App.css";
import Login from "./components/login/login";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboardPage";
import ProtectedRoute from "./route/ProtectedRoute";
import ErrorPage from "./components/error/error";
import SignupPage from "./components/signup/signupPage";
import AdminContextProvider from "./context/AdminContext";
import UserPage from "./components/user/userPage";
import UserDetail from "./components/user/userDetailPage";
import ActiveUserPage from "./components/user/activeUserPage";
import InactiveUserPage from "./components/user/inactiveUserPage";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AdminContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/register" component={SignupPage} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <ProtectedRoute path="/active-users" component={ActiveUserPage} />
              <ProtectedRoute
                path="/inactive-users"
                component={InactiveUserPage}
              />
              <ProtectedRoute path="/users" component={UserPage} />
              <ProtectedRoute path="/user-details" component={UserDetail} />
              <Route path="/:id" component={Login} />
              <Route path="" component={ErrorPage} />
            </Switch>
          </Router>
        </AdminContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
