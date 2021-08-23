import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../app/store";
import "./SignUpPage.module.css";
import SignUpForm1 from "./SignUpForm1";
import SignUpForm2 from "./SignUpForm2";
import SignUpForm3 from "./SignUpForm3";

function SignUpPage() {
  let history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);
  const signupData = useSelector((state) => state.formDetails);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();

  function next(event) {
    event.preventDefault();
    if (currentPage === 1) {
      store.dispatch({
        type: "user/firstName",
        firstName: firstNameInputRef?.current.value,
      });
      store.dispatch({
        type: "user/lastName",
        lastName: lastNameInputRef?.current.value,
      });
    }
    if (currentPage === 2) {
      store.dispatch({
        type: "user/phone",
        phone: phoneInputRef?.current.value,
      });
      store.dispatch({
        type: "user/address",
        address: addressInputRef?.current.value,
      });
    }
    setCurrentPage(currentPage + 1);
  }

  function previous(event) {
    event.preventDefault();
    setCurrentPage(currentPage - 1);
  }

  function submit(event) {
    event.preventDefault();
    store.dispatch({
      type: "user/loggedIn",
      loggedIn: true,
    });
    localStorage.setItem("currentUser", signupData.firstName);
    history.push("/Shopping");
  }

  return (
    <div className="container">
      <h2 className="text-center">Signup</h2>
      {currentPage === 1 && (
        <SignUpForm1
          signupData={signupData}
          firstNameInputRef={firstNameInputRef}
          lastNameInputRef={lastNameInputRef}
          next={next}
        />
      )}
      {currentPage === 2 && (
        <SignUpForm2
          signupData={signupData}
          phoneInputRef={phoneInputRef}
          addressInputRef={addressInputRef}
          previous={previous}
          next={next}
        />
      )}
      {currentPage === 3 && (
        <SignUpForm3
          signupData={signupData}
          previous={previous}
          submit={submit}
        />
      )}
    </div>
  );
}

export default SignUpPage;
