import React from "react";
import "./Menu.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FeedbackPage from "../pages/FeedbackPage";
import ShoppingPage from "../pages/ShoppingPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Header from "./Header";

function Menu(props) {
  function noAccessAlert(event) {
    event.preventDefault();
    document.getElementById("myAlert").hidden = false;
    setTimeout(() => {
      document.getElementById("myAlert").hidden = true;
    }, 1800);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header isLoggedIn={props.isLoggedIn} username={props.username} />

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="p-3 nav-item">
                  <Link
                    to="/Signup"
                    onClick={!props.isLoggedIn ? undefined : noAccessAlert}
                  >
                    <button
                      className="btn btn-info"
                      disabled={props.isLoggedIn}
                    >
                      Signup
                    </button>
                  </Link>
                </li>
                <li className="p-3 nav-item">
                  <Link
                    onClick={props.isLoggedIn ? undefined : noAccessAlert}
                    to="/Shopping"
                  >
                    <button
                      className="btn btn-info"
                      disabled={!props.isLoggedIn}
                    >
                      Start Shopping
                    </button>
                  </Link>
                </li>

                <li className="p-3 nav-item">
                  <Link
                    onClick={!props.isLoggedIn ? noAccessAlert : undefined}
                    to="/Feedback"
                  >
                    <button
                      className="btn btn-info"
                      disabled={!props.isLoggedIn}
                    >
                      Feedback
                    </button>
                  </Link>
                </li>
              </ul>

              {/* {props.isLoggedIn === false && <Redirect to="/Signup" />} */}
            </div>
          </nav>
          <Switch>
            <Route path="/Feedback">
              <FeedbackPage />
            </Route>
            <Route path="/Shopping">
              <ShoppingPage />
            </Route>
            <Route path="/Signup">
              <SignUpPage />
            </Route>
          </Switch>
        </Router>
      </header>
      <div
        id="myAlert"
        hidden={true}
        className="alert alert-warning alert-dismissible fixed-top fade show"
        role="alert"
      >
        <strong>No access!</strong>
        {!props.isLoggedIn
          ? " Signup first"
          : " Already signed up. Click 'Feedback' to reset"}
      </div>
    </div>
  );
}

export default Menu;
