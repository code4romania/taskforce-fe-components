import React from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import "./label.scss";

export const Label = ({ text, isSecondary }) => (
  <label className={`label${isSecondary ? " secondary" : ""}`}>{text}</label>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  isSecondary: PropTypes.bool
};
