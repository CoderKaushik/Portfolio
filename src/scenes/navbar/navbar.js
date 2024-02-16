import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const modalRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (windowWidth <= 963 && isOpen) {
    }
  }, [windowWidth, isOpen]);

  return (
    <div id="hero">
      <div className="main-nav">
        <div className="logo-nav">
          <p className="myname">
            Hiteshwar <span className="surname">Kaushik</span>
          </p>
        </div>
        <div className={`links-nav ${isOpen ? "is-open" : ""}`}>
          <ul>
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="item-nav"
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
              >
                Contact
              </ScrollLink>
            </li>
            <li className="item-nav">
              <a
                href="https://drive.google.com/file/d/1UWDDwagBM0VBlQwjP8XZ7FkmQQkHBU_t/view"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-navbar">
          {windowWidth <= 963 && (
            <div onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose
                  className="close-icon"
                  style={{
                    fontSize: "1.8rem",
                    color: "#e5e7eb",
                    marginRight: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={toggleMenu}
                />
              ) : (
                <GiHamburgerMenu
                  className="hamburger-icon"
                  style={{
                    fontSize: "1.8rem",
                    color: "#e5e7eb",
                    marginRight: "1rem",
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={"modal"} ref={modalRef}  style={{ boxShadow: '0px 0px 100px rgba(0, 0, 0, 0.1)', padding: '1rem'}}>
          <ul>
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="item-nav"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
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
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact-form"
                smooth={true}
                duration={500}
                className="item-nav"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Contact
              </ScrollLink>
            </li>
            <li className="item-nav">
              <a
                href="https://drive.google.com/file/d/1UWDDwagBM0VBlQwjP8XZ7FkmQQkHBU_t/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "-1.5rem",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
