import React from "react";
import PropTypes from "prop-types";

import logo from "./assets/logo.png";

import "./developer-logo.scss";

export const DeveloperLogo = ({ src }) => {
  return (
    <div className="developer-logo">
      <img src={src || logo} alt="Code for Romania" />
    </div>
  );
};

DeveloperLogo.propTypes = {
  src: PropTypes.string
};
