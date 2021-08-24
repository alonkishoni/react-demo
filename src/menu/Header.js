import "./Menu.module.css";

function Header(props) {
  return (
    <nav
      style={{ justifyContent: "space-between" }}
      className="shadow bg-white rounded navbar navbar-light fixed-top"
    >
      <a href={props.isLoggedIn === true ? "#" : "/signup"}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/19/58/glass-2026842_960_720.png"
          width="60"
          height="60"
          alt=""
        />
      </a>
      <b>Wine Online</b>
      <ul className="navbar-nav pull-right">
        <li></li>
        <li style={{ justifyContent: "flex-end" }} className="p-3 nav-item ">
          Hello {props.isLoggedIn === true && props.username}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
