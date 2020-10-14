import React, { createContext, useEffect, useReducer } from "react";
import { AdminReducer } from "../reducers/AdminReducer";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [user, dispatch2] = useReducer(AdminReducer, {}, () => {
    const data = localStorage.getItem("user");
    try {
      return JSON.parse(data);
    } catch (e) {
      return {};
    }
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AdminContext.Provider value={{ user, dispatch2 }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
