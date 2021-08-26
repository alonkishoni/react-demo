import React from "react";
import "./Menu.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import FeedbackPage from "../pages/FeedbackPage";
import ShoppingPage from "../pages/ShoppingPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Header from "./Header";
import Alert from "./Alert";

function Menu(props) {
  function noAccessAlert(event) {
    event.preventDefault();
    document.getElementById("myAlert").hidden = false;
    setTimeout(() => {
      document.getElementById("myAlert").hidden = true;
    }, 1800);
  }

  return (
    <div className="h-100">
      <Header isLoggedIn={props.isLoggedIn} username={props.username} />
      <Router>
        <div className="row h-100">
          <div className="col-2 bg-light navbar-light ">
            <ul className="navbar-nav" style={{ marginTop: 100 }}>
              <li
                className="p-3 nav-item"
                onClick={!props.isLoggedIn ? undefined : noAccessAlert}
              >
                <NavLink
                  className={
                    !props.isLoggedIn ? "nav-link" : "nav-link disabled"
                  }
                  to="/Signup"
                  disabled={props.isLoggedIn}
                >
                  Signup
                </NavLink>
              </li>
              <li
                className="p-3 nav-item"
                onClick={props.isLoggedIn ? undefined : noAccessAlert}
              >
                <NavLink
                  className={
                    props.isLoggedIn ? "nav-link" : "nav-link disabled"
                  }
                  to="/Shopping"
                  disabled={!props.isLoggedIn}
                >
                  Start Shopping
                </NavLink>
              </li>

              <li
                className="p-3 nav-item"
                onClick={!props.isLoggedIn ? noAccessAlert : undefined}
              >
                <NavLink
                  className={
                    props.isLoggedIn ? "nav-link" : "nav-link disabled"
                  }
                  to="/Feedback"
                  disabled={!props.isLoggedIn}
                >
                  Feedback
                </NavLink>
              </li>
            </ul>

            {props.isLoggedIn === false && <Redirect to="/Signup" />}
          </div>

          <div className="col-10" style={{ marginTop: 110 }}>
            <Switch>
              <Route path="/Feedback">
                <FeedbackPage />
              </Route>
              <Route path="/Shopping">
                <ShoppingPage />
              </Route>
              <Route path="/Signup">
                {props.isLoggedIn ? (
                  <Redirect to="/Shopping" />
                ) : (
                  <SignUpPage />
                )}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <Alert isLoggedIn={props.isLoggedIn} />
    </div>
  );
}

export default Menu;
