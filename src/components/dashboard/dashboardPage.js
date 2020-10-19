import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LogoutAction } from "../../actions/AuthAction";
import TopNav from "../../shared/topNav";
import Menu from "../../shared/menu";
import Footer from "../../shared/footer";
import DashboardNavWidget from "./dashboardNavWidget";
import UserCountWidget from "./userCountWidget";
import LatestUserWidget from "./latestUserWidget";
import Cookies from "js-cookie";
import { AdminContext } from "../../context/AdminContext";
import { getAllUsers } from "../../services/AdminService";
import { GetAllUser } from "../../actions/AdminAction";

const Dashboard = (props) => {
  const { auth } = useContext(AuthContext);
  const { dispatch2 } = useContext(AdminContext);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setToken(auth.data.token);
      } else {
        props.history.push("/");
      }
    }
  }, [auth, props]);

  useEffect(() => {
    if (token !== "") {
      const tokenParam = {
        access: token,
      };
      async function callGetUser() {
        const response = await getAllUsers(tokenParam);
        dispatch2(GetAllUser(response));
      }

      try {
        callGetUser();
      } catch (e) {
        console.log(e);
      }
    }
  }, [token]);

  // const handleGetCookie = () => {
  //   const user = JSON.parse(Cookies.get("user"));
  //   return user;
  // };

  // const handleRemoveCookie = () => {
  //   Cookies.remove("user", { domain: ".ercas.ng" });
  // };

  return (
    <div>
      <TopNav />
      <Menu />
      <main>
        <div className="container-fluid">
          <div className="row">
            <DashboardNavWidget />
            <UserCountWidget />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
