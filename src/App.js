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

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AdminContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Login} />
              <Route exact path="/register" component={SignupPage} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
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
