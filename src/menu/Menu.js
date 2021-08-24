import React from "react";
import "./Menu.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
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
    <div className="h-100">
      <Header isLoggedIn={props.isLoggedIn} username={props.username} />
      <Router>
        <div className="row h-100">
          <div className="col-2 bg-light ">
            <ul className="list-group" style={{ marginTop: 100 }}>
              <li className="p-3 nav-item">
                <Link
                  to="/Signup"
                  onClick={!props.isLoggedIn ? undefined : noAccessAlert}
                >
                  <button className="btn btn-light" disabled={props.isLoggedIn}>
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
                    className="btn btn-light"
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
                    className="btn btn-light"
                    disabled={!props.isLoggedIn}
                  >
                    Feedback
                  </button>
                </Link>
              </li>
            </ul>

            {props.isLoggedIn === false && <Redirect to="/Signup" />}
          </div>

          <div class="col-9" style={{ marginTop: 110 }}>
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
          </div>
        </div>
      </Router>
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
