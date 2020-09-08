import React, { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const intialState = {
    isAuth: false,
    isError: false,
    data: {},
  };
  const { Authenticate, dispatch } = useReducer(AuthReducer, intialState);
  return (
    <AuthContext.Provider value={{ Authenticate, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
