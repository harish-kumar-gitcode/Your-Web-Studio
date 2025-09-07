import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  //Creating the navigation of the page.
  return (
    <>
      <div className="nav-container">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}

export default Nav;
