import React from "react";
import PropTypes from "prop-types";

import logo from "./assets/logo.png";

import "./partner-logo.scss";

export const PartnerLogo = ({ src = null }) => {
  return (
    <div className="partner-logo">
      <img src={src || logo} className="partner-logo" alt="Guvernul Romaniei" />
    </div>
  );
};

PartnerLogo.propTypes = {
  src: PropTypes.string
};
