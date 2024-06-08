import React from "react";
import "./footer.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <FooterCol
            title="company"
            links={[
              "about us",
              "our services",
              "privacy policy",
              "affiliate program",
            ]}
          />
          <FooterCol
            title="get help"
            links={["FAQ", "services", "products", "associates", "reach"]}
          />
          <FooterCol
            title="careers"
            links={["jobs", "apprenticeship", "vacancy", "courses"]}
          />
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterColProps {
  title: string;
  links: string[];
}

const FooterCol: React.FC<FooterColProps> = ({ title, links }) => {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
