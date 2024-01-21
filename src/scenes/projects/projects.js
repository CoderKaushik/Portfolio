import React from "react";
import "./projects.css";
import LaptopImage from "./New Website Blue Mockup Instagram - Laptop-PhotoRoom.png-PhotoRoom.png";
import { motion } from "framer-motion";

const projects = () => {
  return (
    <div className="top" id="projects">
      <div className="heading-projects">
        <h1>Projects</h1>
      </div>
      <div className="main-projects">
        <div className="container-projects">
          <div className="project">
            <div className="image-project">
              <img src={LaptopImage} />
            </div>
            <div className="content-project">
              <div className="content-p">
                <h2>The Red Apple Shop</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >Check it out</motion.button>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="image-project">
              <img src={LaptopImage} />
            </div>
            <div className="content-project">
              <div className="content-p">
              <h2>The Red Apple Shop</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >Check it out</motion.button>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="image-project">
              <img src={LaptopImage} />
            </div>
            <div className="content-project">
              <div className="content-p">
              <h2>The Red Apple Shop</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >Check it out</motion.button>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="image-project">
              <img src={LaptopImage} />
            </div>
            <div className="content-project">
              <div className="content-p">
              <h2>The Red Apple Shop</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >Check it out</motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
