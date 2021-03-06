import React, { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, dispatch] = useReducer(AuthReducer, {}, () => {
    //const data = localStorage.getItem("auth");
    const data = Cookies.get("user");
    try {
      return JSON.parse(data);
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    //localStorage.setItem("auth", JSON.stringify(auth));

    if (auth.isAuth === false) {
      Cookies.remove("user");
    } else {
      const user = JSON.stringify(auth);
      Cookies.set("user", user, { domain: ".ercas.ng" });
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
