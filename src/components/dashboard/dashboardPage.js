import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LogoutAction } from "../../actions/AuthAction";
import TopNav from "../../shared/topNav";
import Menu from "../../shared/menu";
import Footer from "../../shared/footer";
import DashboardNavWidget from "./dashboardNavWidget";
import UserCountWidget from "./userCountWidget";
import LatestUserWidget from "./latestUserWidget";

const Dashboard = (props) => {
  const { auth, dispatch } = useContext(AuthContext);
  const [name, setName] = useState("");

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setName(auth.data.name);
      } else {
        props.history.push("/");
      }
    }
  }, [auth, props]);

  const onClick = () => {
    dispatch(LogoutAction());
  };

  return (
    <div id="app-container" className="menu-default show-spinner">
      <TopNav logout={onClick} name={name} />
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
