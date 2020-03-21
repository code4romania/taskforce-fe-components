import React from "react";
import PropTypes from "prop-types";

/**
 * TextInput reusable component - generates input with label and description
 * @param {string} label
 * @param {string} description
 * @param {object} inputProps Contains HTML input attributes: type, value, name, id, etc. https://www.w3schools.com/tags/tag_input.asp
 */
export const FormInput = ({ label, description, inputProps }) => {
  inputProps = inputProps || {};
  inputProps["className"] = inputProps["className"] || "";
  inputProps["className"] += " input";
  inputProps["type"] = inputProps["type"] || "text";

  return (
    <div className="field">
      <label className="label">{label}</label>
      <h2 className="subtitle is-2">{description}</h2>
      <div className="control">
        <input {...inputProps} />
      </div>
      {inputProps &&
        inputProps.errorMessages &&
        inputProps.errorMessages.map((m, index) => (
          <p key={`msg_${index}`} className="help is-danger">
            {m}
          </p>
        ))}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.node.isOptional,
  description: PropTypes.node.isOptional,
  inputProps: PropTypes.node.isOptional
};

FormInput.defaultProps = {
  label: "",
  description: "",
  inputPorps: {}
};
