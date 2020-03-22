import React from "react";
import { Logo } from "../logo/logo";
import TaskforceLogo from "../../images/code4romania-color.svg";
import "./incubated-by.scss";

export const IncubatedBy = () => {
  return (
    <div className="incubated-by-wrapper">
      <div className="incubated-by container">
        <p className="caption">proiect incubat în programul</p>
        <Logo url="https://code4.ro">
          <TaskforceLogo width="102" />
        </Logo>
      </div>
    </div>
  );
};
