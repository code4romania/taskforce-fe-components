import React from "react";
import "./../../styles.scss";
import { Link } from "react-router-dom";
import Code4RomaniaGrayLogo from "../../../images/code4romania-gray.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <ul className="useful-links">
          <li>Linkuri utile</li>
          <li>
            <Link to="/termeni-si-conditii">Termeni și condiții</Link>
          </li>
          <li>
            <Link to="/politica-confidentialitate">
              Politică de confidențialitate
            </Link>
          </li>
          <li>
            <a
              href="https://code4.ro/ro/codul-de-conduita/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codul de Conduită
            </a>
          </li>
          <li>
            <a
              href="https://code4.ro/ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code for Romania
            </a>
          </li>
          <li>
            <a href="mailto:contact@code4.ro">Contact</a>
          </li>
        </ul>
        <div className="code4-branding">
          <a
            href="https://code4.ro/ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={Code4romania_gray} alt="Code for Romania gray logo"></img> */}
            <Code4RomaniaGrayLogo />
          </a>
          <p>© 2020 Code for Romania.</p>
          <p>
            Organizație neguvernamentală independentă, neafiliată politic și
            apolitică.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
