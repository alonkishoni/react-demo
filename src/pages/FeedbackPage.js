//import React, { useRef } from "react";
//import "./FeedbackPage.module.css";
import { useHistory } from "react-router-dom";

import store from "../app/store";

function FeedbackPage() {
  let history = useHistory();

  function reset() {
    store.dispatch({
      type: "user/loggedIn",
      loggedIn: false,
    });
    localStorage.setItem("currentUser", "");
    history.push("/signup");
  }

  return (
    <div className="container">
      <h2 className="text-center">Feedback</h2>
      <div class="col-md-12 text-center">
        <button onClick={reset} className="btn btn-primary">
          Reset
        </button>
      </div>
    </div>
  );
}

export default FeedbackPage;
