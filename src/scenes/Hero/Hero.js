import "./hero.css";
// import Me from "./isometric-data-dashboard-with-infographics-and-statistics.gif";
import Me from "./techny-finding-bugs-in-the-code.gif";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hiteshwar Kaushik", "a web developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    // <div>
    <div className="hero-main">
      <div className="hero-content">
        <h1 className="hey">Hey there!</h1>
        <div className="name-container">
          <h2 className="name">
            <p className="my-name" id="animated-text">
              I am
              <br /> <span className="name name-animated">{text}</span>
              <span style={{ color: "dodgerblue" }}>
                <Cursor cursorStyle="|" />
              </span>
            </p>
          </h2>
        </div>
        <p className="bio">
          A Full Stack Web Developer and Programmer based in India. Sophomore at
          IIIT Kota.
        </p>
        <p className="email">
          <a href="mailto:hiteshwarkaushik@gmail.com">
            hiteshwarkaushik@gmail.com
          </a>
        </p>
        <p className="email resume">
          <a
            href="https://drive.google.com/file/d/1v0_EVsDMn6gTcWsmof2zEE6Tbcj1ikIk/view?usp=sharing"
            target="_blank"
          >
            resume
          </a>
        </p>
        {/* </div> */}
      </div>
      <div className="hero-me">
        <img src={Me} className="my-image" />
      </div>
    </div>
    // </div>
  );
};

export default Hero;
