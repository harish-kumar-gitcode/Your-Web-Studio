import "./Footer.css";
import logo from "../../assets/Logo_White.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  //Maintaining the state of the form fields
  const [email, setEmail] = useState("");
  //   Maintaining the state of the button
  const [button, setButton] = useState("Subscribe");

  //Handling the submit event.
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email submitted:", email);
    setButton("Subscribed");
    setTimeout(() => {
      setEmail("");
      setButton("Subscribe");
    }, 1000);
  };

  //Creating the Footer section
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-cont">
          <div className="logo-cont">
            <img src={logo} alt="My Logo" />
            <p>
              Empowering businesses with modern, scalable web solutions. We help
              brands grow with technology and design.
            </p>
          </div>
          {/* Quick Links */}
          <div className="quick-links">
            <h2>Company</h2>
            <div className="link">
              <Link to="/">Home</Link>
            </div>
            <div className="link">
              <Link to="/about">About</Link>
            </div>
            <div className="link">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          {/* Products */}
          <div className="products-cont">
            <h2>Products</h2>
            <div className="product">
              <Link to="/pricing">Pricing</Link>
            </div>
            <div className="product">
              <Link to="/features">Features</Link>
            </div>
            <div className="product">
              <Link to="/book-demo">Demo</Link>
            </div>
          </div>
          <div className="news-cont">
            <h2>NewsLetter</h2>
            <p>Subscribe for newsletter</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
              <button type="submit">{button}</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; <span>Your Web Studio.</span> All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
