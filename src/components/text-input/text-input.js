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
  label: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  props: PropTypes.node.isRequired
};

// TextInput.defaultProps = {
//     type: "primary",
//     inverted: false
// };
