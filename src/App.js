import React from "react";
import Menu from "./menu/Menu";
import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const user = useSelector((state) => state.formDetails.firstName);

  return <Menu username={user} isLoggedIn={loggedIn} className="h-100" />;
}

export default App;
