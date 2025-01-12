import logo from "../../assets/logo.svg";
import "./Header.css";
import NavBar from "../Navbar";
const Header = () => {
  return (
    <div className="main">
      <div>
        <a href="/" target="_blank">
          <img src={logo} className="logo" alt="Ai Demo" />
        </a>
      </div>

      <NavBar />

      <div className="user">
        <a href="/" target="_blank">
          <img
            src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png"
            className="avatar"
            alt="user"
          />
        </a>
        <p style={{ marginTop: "10px" }}> Contact Sales </p>
      </div>
    </div>
  );
};

export default Header;
