import React, { useState } from "react";
import PropTypes from "prop-types";
import "./header.scss";

import { ReactComponent as Hamburger } from "../../images/icons/hamburger.svg";
import { ReactComponent as HamburgerOpen } from "../../images/icons/hamburger-open.svg";

export const Header = ({ name, Logo, MenuItems, ProfileItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const HamburgerIcon = isOpen ? HamburgerOpen : Hamburger;

  return (
    <header className="App-header container">
      <div className="App-header__logo">
        {Logo}
        {name && <span className="App-header__title">{name}</span>}
      </div>
      <div className="App-header__menu-icon">
        <HamburgerIcon onClick={() => setIsOpen(!isOpen)} />
      </div>
      <nav className={!isOpen ? "App-header__nav--hidden" : ""}>
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
  ProfileItems: PropTypes.node,
};
