function SignUpForm3(props) {
  return (
    <div className="container">
      <div className="signup-form form">
        <form id="sign-up-form3" className="p-3" onSubmit={props.submit}>
          <div className="form-group">
            <p>
              <b>First Name: </b>
              {props.signupData.firstName}
            </p>
            <p>
              <b>Last Name: </b>
              {props.signupData.lastName}
            </p>
            <p>
              <b>Phone: </b>
              {props.signupData.phone}
            </p>
            <p>
              <b>Address: </b>
              {props.signupData.address}
            </p>
          </div>
          <div className="form-group">
            <label className="checkbox">
              <input required type="checkbox" /> Confirm
            </label>
          </div>
          <div className="form-group">
            <button
              onClick={props.previous}
              className="btn btn-primary btn-block"
            >
              Previous
            </button>
            <button className="m-2 btn btn-success btn-block">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpForm3;
