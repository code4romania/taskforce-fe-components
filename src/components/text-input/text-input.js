import React from "react";
import PropTypes from "prop-types";
import "./text-input.scss";

/**
 * TextInput reusable component - generates input with label and description
 * @param {string} label
 * @param {string} description
 * @param {object} inputProps Contains HTML input attributes: type, value, name, id, etc. https://www.w3schools.com/tags/tag_input.asp
 */
export const TextInput = ({ label, description, inputProps }) => {
  const classNames = ["input"];

  if (inputProps) {
    if (!inputProps["type"]) {
      inputProps["type"] = "text";
    }

    if (inputProps["class"]) {
      classNames.push(inputProps["class"]);
      delete inputProps["class"];
    }
  }

  return (
    <div className="field">
      <label className="label">{label}</label>
      <h2 className="subtitle is-2">{description}</h2>
      <div className="control">
        <input className={classNames.join(" ")} {...inputProps} />
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

TextInput.propTypes = {
  label: PropTypes.node.isOptional,
  description: PropTypes.node.isOptional,
  inputProps: PropTypes.node.isOptional
};

TextInput.defaultProps = {
  label: "",
  description: "",
  inputPorps: {}
};
