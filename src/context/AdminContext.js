import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AdminReducer } from "../reducers/AdminReducer";
import { AuthContext } from "./AuthContext";
import Cookies from "js-cookie";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const { auth } = useContext(AuthContext);
  const [user, dispatch2] = useReducer(AdminReducer, {}, () => {
    const data = localStorage.getItem("user");
    //const data = Cookies.get("user");
    try {
      return JSON.parse(data);
    } catch (e) {
      return {};
    }
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    //const userDetail = JSON.stringify(user);
    //Cookies.set("user", user);
  }, [user]);

  return (
    <AdminContext.Provider value={{ user, dispatch2 }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
