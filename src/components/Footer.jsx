import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file
import logo from "../images/1.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Sikharthy Infotech Logo" />
        </div>
        {/* About Section */}
        <div className="footer-section">
          <h2>About Elpis</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam id consectetur autem, aliquid necessitatibus, amet vel pariatur error atque est recusandae. Excepturi dolorem quo quibusdam omnis sit debitis vitae architecto?
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon youtube"><FaYoutube /></a>
            <a href="#" className="social-icon facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
            <a href="#" className="social-icon instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h2>Contact Details</h2>
          <p>+91-00000000</p>
          <p>info@demo.com</p>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h2>Address</h2>
          <p>
            hbfv ihbfrgg sdf sjdfb jdfb  <br />
            78ns,1st floor <br />
            Kolkata, West Bengal 700091
          </p>
        </div>

        {/* Instagram Posts */}
        {/* <div className="footer-section">
          <h2>Instagram Post</h2>
          <div className="instagram-posts">
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
          </div>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2023 All Rights Reserved by Sikharthy Infotech</p>
        <div className="footer-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
