import "./hero.css";
import Me from "./avatar.png";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Hiteshwar Kaushik.', 'a web developer.', 'good at what I do.'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    // <div>
    <div className="hero-main">
      <div className="hero-content">
        {/* <div className="inner-content"> */}
        <h1 className="hey">Hey there!</h1>
        <div className="name-container">
          <h2 className="name">
            <p className="my-name" id="animated-text">I am <span className="name name-animated">{text}</span>
            <span style={{color: 'dodgerblue'}}><Cursor cursorStyle='|' /></span>
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
            href="https://drive.google.com/file/d/1UWDDwagBM0VBlQwjP8XZ7FkmQQkHBU_t/view"
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
