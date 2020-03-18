import React from "react";
import PropTypes from "prop-types";
import "./text-input.scss";

export const TextInput = ({ label, description, props }) => {
  const classNames = ["text-input"];

  return (
    <label className={classNames.join(" ")}>
      {label}
      {description && <p> {description}</p>}
      <input type="text" {...props} />
    </label>
  );
};

TextInput.propTypes = {
  label: PropTypes.node.isOptional,
  description: PropTypes.node.isOptional,
  props: PropTypes.node.isOptional
};

TextInput.defaultProps = {
  label: "",
  description: "",
  props: {}
};
