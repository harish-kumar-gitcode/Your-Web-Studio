//Importing all the required files.
import logo from "../../assets/Main_Logo.png";
import Nav from "../Nav/Nav";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  //returning my Logo and my Navigation to the sites.
  return (
    <>
      <div className="head-wrapper">
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: "200px" }} />
        </Link>
        <Nav></Nav>
      </div>
    </>
  );
}

export default Header;
