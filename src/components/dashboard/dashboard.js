import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LogoutAction } from "../../actions/AuthAction";

const Dashboard = (props) => {
  const { auth, dispatch } = useContext(AuthContext);
  const [name, setName] = useState("");

  useEffect(() => {
    if (auth.isAuth) {
      setName(auth.data.name);
    } else {
      props.history.push("/");
    }
  }, [auth, props]);

  const onClick = () => {
    dispatch(LogoutAction());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h3> Welcome {name}</h3>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default Dashboard;
