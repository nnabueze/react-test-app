import React from "react";
import "./App.css";
import Login from "./components/login/login";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import ProtectedRoute from "./route/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
