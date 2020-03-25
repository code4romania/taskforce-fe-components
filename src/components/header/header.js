import React, { useState } from "react";
import PropTypes from "prop-types";
import "./header.scss";

import Hamburger from "../../images/icons/hamburger.svg";
import HamburgerOpen from "../../images/icons/hamburger-open.svg";

export const Header = ({ name, Logo, MenuItems, ProfileItems }) => {
  const [hamburgerOpened, hamburgerOnClick] = useState(true);
  const HamburgerIcon = hamburgerOpened ? HamburgerOpen : Hamburger;

  return (
    <header className="App-header container">
      <div className="App-header__logo">
        {Logo}
        {name && <span className="App-header__title">{name}</span>}
      </div>
      {
        <div className="App-header__hamburger">
          <HamburgerIcon onClick={() => hamburgerOnClick(!hamburgerOpened)} />
        </div>
      }
      {/* {hamburgerOpened && ( */}
      <nav className={!hamburgerOpened ? "App-header__nav--hidden" : ""}>
        {MenuItems}
        {ProfileItems}
      </nav>
      {/* )} */}
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  Logo: PropTypes.node.isRequired,
  MenuItems: PropTypes.node.isRequired,
  ProfileItems: PropTypes.node
};
