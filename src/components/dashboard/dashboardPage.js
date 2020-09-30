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

const Dashboard = (props) => {
  const { auth, dispatch } = useContext(AuthContext);
  const [firstName, setfisrtName] = useState("");
  const [lastName, setlastName] = useState("");

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setfisrtName(auth.data.firstName);
        setlastName(auth.data.lastName);
      } else {
        props.history.push("/");
      }
    }
  }, [auth, props]);

  const onClick = () => {
    handleRemoveCookie();
    dispatch(LogoutAction());
  };

  const handleGetCookie = () => {
    const user = JSON.parse(Cookies.get("user"));
    return user;
  };

  const handleRemoveCookie = () => {
    Cookies.remove("user", { domain: ".ercas.ng" });
  };

  return (
    <div id="app-container" className="menu-default show-spinner">
      <TopNav logout={onClick} firstName={firstName} lastName={lastName} />
      <Menu />
      <main>
        <div className="container-fluid">
          <div className="row">
            <DashboardNavWidget />
            <UserCountWidget />
            <LatestUserWidget />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
