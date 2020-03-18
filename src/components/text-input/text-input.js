import React from "react";
import PropTypes from "prop-types";
import "./text-input.scss";

export const TextInput = ({ label, description, props }) => {
  // const classNames = ["text-input"];

  return (
    <div className="field">
      <label className="label">{label}</label>
      <h2 className="subtitle is-2">{description}</h2>
      <div className="control">
        <input className="input" type="text" {...props} />
      </div>
    </div>
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
