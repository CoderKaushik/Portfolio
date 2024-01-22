import React from "react";
import "./projects.css";
import LaptopImage from "./New Website Blue Mockup Instagram - Laptop-PhotoRoom.png-PhotoRoom.png";
import LaptopImage2 from "./New_Website_Blue_Mockup_Instagram_-_Laptop-removebg.png";
import LaptopImage3 from "./Untitled design (3)-PhotoRoom.png-PhotoRoom (1).png";
import LaptopImage4 from "./sociopeida.png";
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
                <p>Crafted a responsive front-end for a grocery shop website using HTML, CSS, and Bootstrap. Integrated dynamic features like interactive sliders and real-time updates with JavaScript. Employed Git for version control, hosted the project on GitHub, and implemented client-side form validation for enhanced user input accuracy.</p>
                <div className="button-container">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >GitHub Repo</motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >View Live</motion.button>
                </div>
              </div>
            </div>
          </div>


          <div className="project">
            <div className="image-project">
              <img src={LaptopImage3} />
            </div>
            <div className="content-project">
              <div className="content-p">
              <h2>Portfolio Website</h2>
                <p>Designed and developed a portfolio website using React, hosted on Vercel with a custom domain. Integrated Framer Motion for smooth animations, creating an engaging and visually appealing user experience. Highlighted skills, projects, and achievements, showcasing a dynamic and interactive presentation of professional information.</p>
                <div className="button-container"><motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >GitHub Repo</motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >View Live</motion.button></div>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="image-project">
              <img src={LaptopImage4} />
            </div>
            <div className="content-project">
              <div className="content-p">
              <h2>Sociopedia</h2>
                <p>Created a MERN stack social media app with RESTful API design for seamless front-end to back-end communication. Implemented secure user authentication, used MongoDB for flexible data modeling, and employed serverless architecture on Vercel for scalability and cost-effectiveness.</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >GitHub Repo</motion.button>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="image-project">
              <img src={LaptopImage2} />
            </div>
            <div className="content-project">
              <div className="content-p">
              <h2>Trvl</h2>
                <p>Built a responsive React.js FrontEnd for a travel agency website, incorporating React Router for seamless navigation. Ensured optimal user experience across devices, applied modern design principles for aesthetics, and deployed the project efficiently on Vercel for hosting.</p>
                <div className="button-container"><motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >GitHub Repo</motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >View Live</motion.button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
