import React from "react";
import PropTypes from "prop-types";
import "../../styles.scss";

export const Label = ({ text }) => <label className="label">{text}</label>;

Label.propTypes = {
  text: PropTypes.string.isRequired
};
