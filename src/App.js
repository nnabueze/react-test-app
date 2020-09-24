import React from "react";
import "./App.css";
import Login from "./components/login/login";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboardPage";
import ProtectedRoute from "./route/ProtectedRoute";
import ErrorPage from "./components/error/error";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <Route path="" component={ErrorPage} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
