import React from "react";

import logo from "./assets/logo.png";

import "./partner-logo.scss";

export const PartnerLogo = () => {
  return (
    <div className="partner-logo">
      <img src={logo} className="partner-logo" alt="Guvernul Romaniei" />
    </div>
  );
};
