import React from "react";
import PropTypes from "prop-types";
import "./header.scss";
import GovroSvg from "../../icons/govro.svg";
import Code4Svg from "../../icons/code4romania.svg";

export const Header = ({
  name,
  Logo,
  MenuItems,
  ProfileItems,
  bottomHeader = false
}) => {
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
      {bottomHeader ? (
        <div className="bottom-header">
          <div className="app-credits">
            <span>Un proiect dezvoltat de</span>
            <a
              href="https://code4.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code4Svg />
            </a>
            <span>În parteneriat cu </span>
            <a
              href="https://www.gov.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GovroSvg />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  Logo: PropTypes.element.isRequired,
  MenuItems: PropTypes.array.isRequired,
  ProfileItems: PropTypes.array,
  bottomHeader: PropTypes.bool
};
