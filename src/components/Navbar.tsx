import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">About</li>
        <li className="navbar-item">Products</li>
        <li className="navbar-item">Support</li>
        <li className="navbar-item">Consulting</li>
        <li className="navbar-item active">Quick Demo</li>
      </ul>
    </nav>
  );
};

export default NavBar;
