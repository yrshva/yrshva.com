import React, { SyntheticEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Resume from "./AboutPage/Resume";
import "../../styles/about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (event: { target: any; preventDefault: () => void }) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "contact_formxcvewr23e4",
        "template_cgw89od",
        event.target,
        "wNuFFCZm6_kMdUYKP"
      )
      .then(() => alert("Thank you! I will be in touch with you soon."))
      .catch((error) => alert(JSON.stringify(error)));
  };
  return (
    <>
      <div className="page bg-blue about-page">
        <div className="cv-wrapper">
          <Resume />
        </div>
      </div>
      <div className="page bg-yellow contact-page" id="contact">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Company name:</label>
            <input type="text" name="company_name" />
            <label>Phone number:</label>
            <input type="tel" name="phone" />
            <label>Message:</label>
            <textarea className="message" name="message" required />
            <input type="submit" value="Submit" className="btn btn-success" />
          </form>
        </div>
      </div>
    </>
  );
};
export default About;
