import React from "react";
import "./social.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const social = () => {
  return (
    <div>
      <div className="container-social">
        <ul className="list-social">
          <li className="icon-social linkedin">
            <a href="https://www.linkedin.com/in/hiteshwar-kaushik-79202a248/?originalSubdomain=in" target="_blank" rel="noreferrer"><FaLinkedin title="Let's connect!"/></a>
          </li>
          <li className="icon-social github">
            <a href="https://github.com/CoderKaushik" target="_blank" rel="noreferrer"><FaGithub title="My GitHub Profile"/></a>
          </li>
          <li className="icon-social instagram">
            <a href="https://www.instagram.com/_hiteshwarkaushik/" target="_blank" rel="noreferrer"><FaInstagram title="My Instagram"/></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default social;
