import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and Email */}
        <div className="footer-left">
          <img src={assets.logo} alt="App Logo" className="footer-logo" />
          <div className="footer-email">
            <p>Email us at:</p>
            <a href="mailto:info@example.com">info@example.com</a>
          </div>
        </div>

        {/* Middle Section: Important Links */}
        <div className="footer-middle">
          <h3>Important Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/company">Company</a></li>
          </ul>
        </div>

        {/* Right Section: Contact & Social Links */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>1234 Street Name, City</p>
          <p>Phone: (123) 456-7890</p>
          <div className="footer-social">
  <a href="https://twitter.com" className="social-icon">
    <img src={assets.twitter_icon} alt="Twitter" />
  </a>
  <a href="https://facebook.com" className="social-icon">
    <img src={assets.facebook_icon} alt="Facebook" />
  </a>
  <a href="https://linkedin.com" className="social-icon">
    <img src={assets.linkedin_icon} alt="LinkedIn" />
  </a>
</div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your App Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
