import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AuthContext } from "../../context/AuthContext";
import { getAllUsers } from "../../services/AdminService";
import BasicTable from "../../shared/BasicTable";

const ReportWidget = (props) => {
  const { auth } = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setToken(auth.data.token);
      } else {
        window.location = "/";
      }
    }
  }, [auth]);

  useEffect(() => {
    if (token !== "") {
      const tokenParam = {
        access: token,
      };
      async function callGetUser() {
        const response = await getAllUsers(tokenParam);
        setUsers([...response.data]);
      }

      try {
        callGetUser();
      } catch (e) {
        console.log(e);
      }
    }
  }, [token]);
  const navigatePage = (id) => {
    window.location = `/user-details?id=${id}`;
  };
  return <BasicTable passedData={users} />;
};

export default ReportWidget;
