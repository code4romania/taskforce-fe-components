import React from "react";
import PropTypes from "prop-types";
import "./instruments.scss";

export const Instruments = ({ layout, children }) => {
  return <div className={`instruments ${layout ?? "column"}`}>{children}</div>;
};

Instruments.propTypes = {
  layout: PropTypes.oneOf(["column", "grid"]),
  children: PropTypes.node
};
