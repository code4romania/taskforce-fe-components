import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const Button = ({ children }) => {
  return <button className="button is-danger is-outlined">{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};
