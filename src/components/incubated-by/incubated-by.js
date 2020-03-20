import React from "react";
import { Logo } from "../logo/logo";
import TaskforceLogo from "./assets/logo.png";
import "./incubated-by.scss";

export const IncubatedBy = () => {
  return (
    <div className="incubated-by-wrapper">
      <div className="incubated-by container">
        <p className="caption">proiect incubat în programul</p>
        <Logo
          src={TaskforceLogo}
          imgClass={"rem2"}
          alt={"Code for Romania Task Force"}
          url="https://code4.ro"
        />
      </div>
    </div>
  );
};
