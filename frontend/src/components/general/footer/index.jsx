import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid footer-main-container">
      <div className="footer-main-inner-div d-flex col-12 flex-column">
        <div className="footer-inner-div1 d-flex col-12 flex-column flex-md-row flex-lg-row">
          <div className="footer-inner-div1-1 col-12 col-md-6 col-lg-6 ">
            <div className="footer-inner-div1-1-header">
              <p>Trippify</p>
            </div>
            <div className="footer-inner-div1-1-content d-flex ">
              <div className="footer-inner-div1-1-content1 d-flex col-6 col-md-6 col-lg-6 flex-column">
                <p>Careers</p>
                <p>About Us</p>
                <p>Contect Us</p>
                <p>Blog</p>
              </div>
              <div className="footer-inner-div1-1-content2 d-flex col-6 col-md-6 col-lg-6 flex-column">
                <p>Mobile app</p>
                <p>Report security issue</p>
                <p>Browser extension</p>
                <p>Google data disclosure</p>
              </div>
            </div>
            <div className="footer-inner-div1-1-socialLink">
              <button className="social-button">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button className="social-button">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
              <button className="social-button">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className="social-button">
                <FontAwesomeIcon icon={faYoutube} />
              </button>
              <button className="social-button">
                <FontAwesomeIcon icon={faPinterest} />
              </button>
            </div>
          </div>
          <div className="footer-inner-div1-2 col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ">
            <div>
              <p>Get Freshest News by Subsribing!!</p>
            </div>
            <div className="d-flex ">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
        <div className="footer-inner-div2 col-12 d-flex justify-content-center">
          <a href="#" className="footer-link">Website Terms </a> | 
          <a href="#" className="footer-link"> Privacy Policy </a> | 
          <a href="#" className="footer-link"> Accessibility Statement </a> | 
          <a href="#" className="footer-link"> Do Not Sell My Information</a>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
