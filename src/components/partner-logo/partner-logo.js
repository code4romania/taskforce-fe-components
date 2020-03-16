import React from "react";

import logoBig from "./assets/logo.png";
import logoSmall from "./assets/logo-small.png";

import "./partner-logo.scss";

export const PartnerLogo = () => {
  return (
    <div className="partner-logo">
      <img
        src={logoBig}
        className="partner-logo--big"
        alt="Guvernul Romaniei"
      />
      <img
        src={logoSmall}
        className="partner-logo--small"
        alt="Guvernul Romaniei"
      />
    </div>
  );
};
