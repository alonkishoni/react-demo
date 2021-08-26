import "./Menu.module.css";

function Alert(props) {
  return (
    <div
      id="myAlert"
      hidden={true}
      className="shadow alert alert-warning alert-dismissible fixed-top fade show"
      role="alert"
    >
      <strong>No access!</strong>
      {!props.isLoggedIn
        ? " Signup first"
        : " Already signed up. Click 'Feedback' to reset"}
    </div>
  );
}

export default Alert;
