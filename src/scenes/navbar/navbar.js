import { useState } from "react";
import React from "react";
import "./navbar.css";
import hkLogo from "../../scenes/hkLogo.jpg";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log("Toggle Menu Clicked");
    setIsOpen((open) => !open);
  }
  return (
    <div id="hero">
      <div className="main-nav">
        <div className="logo-nav">
          <img src={hkLogo} alt="HK Logo" />
          <p className="myname">
            Hiteshwar <span className="surname">Kaushik</span>
          </p>
        </div>
        <div className = {`links-nav ${isOpen ? "is-open" : ""}`}>

          <ul>
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="item-nav"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="item-nav"
                >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="item-nav"
                >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="item-nav"
              >
                Contact
              </ScrollLink>
            </li>
            <li className="item-nav"><a
              href="https://drive.google.com/file/d/1UWDDwagBM0VBlQwjP8XZ7FkmQQkHBU_t/view"
              target="_blank"
            >Resume</a></li>
          </ul>
        </div>
        {/* <div id="Mobile">
        <i id="bar" className={this.state.clicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
