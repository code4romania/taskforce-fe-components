import React from "react";
import PropTypes from "prop-types";
import "./../../styles.scss";
import Code4RomaniaGrayLogo from "../../../images/code4romania-gray.svg";
import "./footer.scss";

export const Footer = ({ children }) => {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        {children}
        <div className="code4-branding">
          <a
            href="https://code4.ro/ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code4RomaniaGrayLogo style={{ height: 40 }} />
          </a>
          <p>© {new Date().getFullYear()} Code for Romania.</p>
          <p>
            Organizație neguvernamentală independentă, neafiliată politic și
            apolitică.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired
};
