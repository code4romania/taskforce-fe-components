import React from "react";
import PropTypes from "prop-types";
import "./header.scss";

export const Header = ({ name, Logo, MenuItems, ProfileItems }) => {
  return (
    <header className="App-header container">
      <div className="App-header__logo">
        {Logo}
        {name ? <span className="App-header__title">{name}</span> : ""}
      </div>
      <nav>
        {MenuItems}
        {ProfileItems}
      </nav>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  Logo: PropTypes.node.isRequired,
  MenuItems: PropTypes.node.isRequired,
  ProfileItems: PropTypes.node
};
