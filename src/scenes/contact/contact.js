import React, { useRef, useEffect } from "react";
import "./contact.css";
import DeveloperGif from "./outline-male-programmer-having-online-meeting.gif";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91y12l8', 'template_f1ow0hm', form.current, 'MBxSBvTT0sv4FOyR_')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    // Initialize emailjs library with your user ID
    emailjs.init('MBxSBvTT0sv4FOyR_');
  }, []);

  return (
    <div id="contact" className="contact-main">
      <div className="contact-sub">
        <div className="contact-gif">
          <img src={DeveloperGif} alt="Developer" className="Developer" />
        </div>
        <div className="contact-info">
          <div className="contact-form">
            <h1>Connect with me</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Name"/>
              <input type="email" name="user_email" placeholder="Email"/>
              <textarea name="message" placeholder="Message" style={{'height' : '30vh', 'padding-top' : ' 1rem', 'fontFamily' : 'Cambria'}}/>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
