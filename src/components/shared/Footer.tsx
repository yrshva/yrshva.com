import React from "react";
import "../../styles/footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container p-3">
        <div className="d-flex justify-content-center">
          <a
            id="email"
            href="mailto:anastasia.yershova@yahoo.com"
            title="Anastasiia's email"
          >
            anastasia.yershova@yahoo.com
          </a>
        </div>
        <div className="social-networks d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/anastasiia-yershova/"
            title="Anastasiia's LinkedIn"
          >
            <i className="fa-brands fa-linkedin m-3"></i>
          </a>
          <a href="https://t.me/anastasia_yrshv" title="Anastasiia's Telegram">
            {" "}
            <i className="fa-brands fa-telegram m-3"></i>
          </a>
          <a href="https://github.com/yrshva" title="Anastasiia's Github">
            {" "}
            <i className="fa-brands fa-github-square m-3"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
