import React from "react";
import PropTypes from "prop-types";
import "./header.scss";

export const Header = ({ name, Logo, MenuItems, ProfileItems }) => {
  return (
    <header className="App-header">
      <div className="container top-header">
        <div className="app-logo">{Logo}</div>
        <div className="title">{name || ""}</div>
        <nav>
          {MenuItems}
          <span>{ProfileItems}</span>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  Logo: PropTypes.element.isRequired,
  MenuItems: PropTypes.element.isRequired,
  ProfileItems: PropTypes.element
};
