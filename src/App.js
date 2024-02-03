import React, { useState, useEffect } from "react";
import Navbar from "./scenes/navbar/navbar";
import Social from "./scenes/social/social";
import Hero from "./scenes/Hero/Hero";
import About from "./scenes/about/about";
import Projects from "./scenes/projects/projects";
import Contact from "./scenes/contact/contact";
import Footer from "./scenes/footer/footer";
import PacmanLoader from "react-spinners/PacmanLoader";
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? <div className="App-main">
        <PacmanLoader
          color={"#FFFFFF"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div> : (
        <>
          <Navbar />
          <Social />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
