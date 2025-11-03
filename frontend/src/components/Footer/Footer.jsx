import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo Section */}
        <div className="footer__section">
          <h2 className="footer__logo">Health First Mobile Academy</h2>
          <p className="footer__tagline">
            Health and education are the twin pillars of a thriving society—when we nurture minds and heal bodies, we build a better future for all.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#updates">Updates</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Contact</h3>
          <p>Email: etwarisewasansthan@gmail.com</p>
          <p>Phone: +91 9871947707, 9870450463</p>
        </div>

        {/* Social Media Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Follow Us</h3>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} HFMA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
