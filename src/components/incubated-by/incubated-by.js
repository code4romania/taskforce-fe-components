import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../logo/logo";
import TaskforceLogo from "../../images/code4romania-color.svg";
import "./incubated-by.scss";

export const IncubatedBy = ({ partnerLogos }) => {
  return (
    <div className="incubated-by-wrapper">
      <div className="incubated-by container">
        <div className="row">
          <p className="caption">proiect dezvoltat în programul</p>
          <Logo url="https://code4.ro">
            <TaskforceLogo width="102" />
          </Logo>
        </div>
        {partnerLogos && (
          <div className="row">
            <p className="caption">cu sprijinul</p>
            <div className="logos">{partnerLogos}</div>
          </div>
        )}
      </div>
    </div>
  );
};

IncubatedBy.propTypes = {
  partnerLogos: PropTypes.arrayOf(PropTypes.node)
};
