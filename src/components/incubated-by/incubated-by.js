import React from "react";
import { Logo } from "../logo/logo";

import "./incubated-by.scss";

export const IncubatedBy = () => {
  return (
    <div className="incubated-by-wrapper">
      <div className="incubated-by container">
        <p className="caption">proiect incubat în programul</p>
        <div className="logo">
          <a href={"https://code4.ro"}>
            <Logo />
          </a>
        </div>
      </div>
    </div>
  );
};
