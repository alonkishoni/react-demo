function SignUpForm2(props) {
  return (
    <div className="container">
      <div className="signup-form form">
        <form id="sign-up-form2" className="p-3" onSubmit={props.next}>
          <div className="form-group">
            <b>Phone: </b>
            <input
              defaultValue={props.signupData.phone}
              type="phone"
              className="form-control mb-2"
              placeholder="Phone"
              required="required"
              pattern="[0-9]{10}"
              title="Please enter your phone number. 10 digits"
              ref={props.phoneInputRef}
            ></input>
          </div>
          <div className="form-group">
            <b>Address: </b>
            <input
              defaultValue={props.signupData.address}
              type="text"
              className="form-control mb-2"
              placeholder="Address"
              required="required"
              pattern="^[#.0-9a-zA-Z\s,-]+$"
              title="Please enter your street address. no symbols allowed"
              ref={props.addressInputRef}
            ></input>
          </div>
          <div className="form-group">
            <button
              onClick={props.previous}
              className="btn btn-primary btn-block "
            >
              Previous
            </button>
            <button className="m-2 btn btn-primary btn-block">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpForm2;
