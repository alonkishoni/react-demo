function SignUpForm1(props) {
  return (
    <div className="container">
      <div className="signup-form form">
        <form id="sign-up-form1" className="p-3" onSubmit={props.next}>
          <div className="form-group">
            <b>First Name: </b>
            <input
              defaultValue={props.signupData.firstName}
              type="text"
              className="form-control mb-2"
              placeholder="First Name"
              required="required"
              minLength="2"
              maxLength="15"
              ref={props.firstNameInputRef}
            ></input>
          </div>
          <div className="form-group">
            <b>Last Name: </b>
            <input
              defaultValue={props.signupData.lastName}
              type="text"
              className="form-control mb-2"
              placeholder="Last Name"
              required="required"
              minLength="2"
              maxLength="15"
              ref={props.lastNameInputRef}
            ></input>
          </div>
          <div className="form-group">
            <button className="mt-2 btn btn-primary btn-block">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpForm1;
