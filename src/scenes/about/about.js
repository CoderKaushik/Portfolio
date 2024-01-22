import React from "react";
import "./about.css";
import Cpp from "./logos/icons8-c++-96.svg";
import C from "./logos/icons8-c-96.svg";
import Py from "./logos/icons8-python.svg";
import Js from "./logos/icons8-javascript.svg";
import Html from "./logos/icons8-html.svg";
import Css from "./logos/icons8-css.svg";
import Ts from "./logos/icons8-typescript.svg";
import Mongo from "./logos/icons8-mongodb.svg";
import Ex from "./logos/icons8-express-js-96.png";
import R from "./logos/icons8-react-native.svg";
import Bootstrap from "./logos/icons8-bootstrap.svg";
import Node from "./logos/icons8-nodejs.svg";
import Twnd from "./logos/icons8-tailwindcss.svg";
import Ss from "./logos/icons8-sass.svg";
import Git from "./logos/icons8-git.svg";
import Github from "./logos/icons8-github-96.png";
import IIIT from "./logos/iiitkota.png";
import Fcc from "./logos/fcc_primary_small.svg";
import Udemy from "./logos/logo-udemy.svg";

const about = () => {
  return (
    <div className="top">
      <div className="main">
        <div className="heading">
          <h1 id="about" className="aboutt">About</h1>
        </div>
        <div className="content">
          <div className="content-skills">
            <div className="heading">
              <h2>Skills</h2>
            </div>
            <div className="skill-cards">
              <div>
                <div className="card">
                  <img src={Cpp} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={C} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Py} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Html} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Css} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Js} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Ts} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Mongo} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Ex} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={R} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Node} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Bootstrap} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Twnd} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Ss} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Git} />
                </div>
              </div>
              <div>
                <div className="card">
                  <img src={Github} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-edu">
            <div className="heading">
              <h2>Education</h2>
            </div>
            <div className="education">
              <div className="ed-section">
                <div className="ed-logo">
                  <img src={IIIT} />
                </div>
                <div className="ed-info">
                  <h2>IIIT Kota</h2>
                  <div className="paras">
                    <p>B.Tech. Computer Science and Engineering (2022-2026)</p>
                    
                  </div>
                </div>
              </div>
              <div className="ed-section">
                <div className="ed-logo">
                  <img src={Udemy} />
                </div>
                <div className="ed-info">
                  <h2>Udemy</h2>
                  <div className="paras">
                    <p>
                      The Complete 2023 Web Development Bootcamp (2023)
                    </p>

                  </div>
                </div>
              </div>
              <div className="ed-section">
                <div className="ed-logo">
                  <img src={Fcc} />
                </div>
                <div className="ed-info">
                    <h2>FreeCodeCamp</h2>
                  <div className="paras">
                    <p>Web Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
