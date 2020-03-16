import React from "react";
import PropTypes from "prop-types";
import "./header.scss";
import GovLogoSVG from "../../icons/gov_logo.svg";
import C4RLogoSvg from "../../icons/c4r_logo.svg";

export const Header = ({ name, Logo, MenuItems, ProfileItems }) => {
  return (
    <header className="App-header">
      <div className="top-header">
        <div className="app-logo">{Logo}</div>
        <div className="title">{name}</div>
        <nav>
          {MenuItems}
          <span>{ProfileItems}</span>
        </nav>
      </div>
      <div className="bottom-header">
        <div className="app-credits">
          <span>Un proiect dezvoltat de</span>
          <a href="https://code4.ro/" target="_blank" rel="noopener noreferrer">
            <C4RLogoSvg />
          </a>
          <span>În parteneriat cu </span>
          <a
            href="https://www.gov.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GovLogoSVG />
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  Logo: PropTypes.element.isRequired,
  MenuItems: PropTypes.array.isRequired,
  ProfileItems: PropTypes.array
};
