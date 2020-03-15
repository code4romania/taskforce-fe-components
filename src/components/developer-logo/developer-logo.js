import React from "react";

import logo from "./assets/logo.png";

import "./developer-logo.scss";

export const DeveloperLogo = () => {
  return (
    <div className="developer-logo">
      <img src={logo} alt="Partener" />
    </div>
  );
};
