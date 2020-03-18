import React from "react";

import logo from "./assets/logo.png";

import "./logo.scss";

export const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Code for Romania Task Force" />
    </div>
  );
};
