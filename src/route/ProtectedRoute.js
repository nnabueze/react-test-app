import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = (props) => {
  const { auth } = useContext(AuthContext);
  const Component = props.component;
  const isAuthenticated = auth !== null ? auth.isAuth : false;

  //return isAuthenticated ? <Component /> : <Redirect to={{ pathname: "/" }} />;
  return (
    <Route
      render={(props) =>
        isAuthenticated ? <Component /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};

export default ProtectedRoute;
