import React, { useRef, useEffect } from "react";
import "./contact.css";
import DeveloperGif from "./outline-male-programmer-having-online-meeting.gif";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91y12l8', 'template_5vhatmu', form.current, 'MBxSBvTT0sv4FOyR_')
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
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" style={{'height' : '100px'}}/>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
