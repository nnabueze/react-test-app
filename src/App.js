import React from "react";
import "./App.css";
import Login from "./components/login/login";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </div>
  );
}

export default App;
