import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h1>Contact Info</h1>
      </div>

      <div className="container-grid">
        <div className="footer-about">
          <h3>Shreya Maurya</h3>
          <p>
           I'm currently a 3rd year CSE student, studying at NIT Silchar.
            I have keen interest in front-end development. I am also learning
            back-end developement.
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          {/* <div className="footer-social-icons">
            <div>
              <a href="https://www.linkedin.com/in/shreya-maurya-657b42226/">
                <FaLinkedin className="icons" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100076179082075"
                target="blank"
              >
                <FaFacebook className="icons" />
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/shrvi0239/">
                <FaInstagram className="icons" />
              </a>
            </div>

            <div>
              <a
                href="https://www.youtube.com/channel/UCNVfdpoF37dicWrygyjfi3g"
                target="blank"
              >
                <FaYoutube className="icons" />
              </a>
            </div>
          </div> */}

<ul className="footer-social-icons">
            <li>
              <a href="https://www.linkedin.com/in/shreya-maurya-657b42226/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100076179082075">
                <FaFacebook />
              </a>{" "}
            </li>
            <li>
              <a href="https://www.instagram.com/shrvi0239/">
                <FaInstagram/>
              </a>{" "}
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCNVfdpoF37dicWrygyjfi3g">
                <FaYoutube />
              </a>{" "}
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Call Us</h3>
          <h3>+91 9976452868</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
