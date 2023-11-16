import React from "react";
import "./footer.css";
// import logo from "../../images/eeti-logo.png";
import logo1 from "../../images/logo-eeti.svg";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io";

const Footer = () => {
  return (
    <div id="footer" className="text-center bg-dark ">
      <div className="f-container">
        <div className="copyright  container justify text-white py-lg-4">
          <div className="logo">
            <a href="https://eetifoundation.org">
              <img className="f-logo" src={logo1} alt="logo" />
            </a>
          </div>
          <ul className="social-media list-inline social-media">
            <li className="list-inline-item social-media-item">
              <a href="https://www.linkedin.com/company/eetic/">
                <IoLogoLinkedin size="1.7rem" color="grey" />
              </a>
            </li>

            <li className="list-inline-item social-media-item">
              <a href="https://www.instagram.com/eeti_foundation/">
                <IoLogoInstagram size="1.7rem" color="grey" />
              </a>
            </li>
            <li className="list-inline-item social-media-item">
              <a href="https://chat.whatsapp.com/LFxXV0QWFgd330aSbZcEqY">
                <IoLogoWhatsapp size="1.7rem" color="grey" />
              </a>
            </li>
          </ul>
          <p className="text-muted mb-0">
            {" "}
            © 2023 EETI Foundation-All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
