import React from "react";
import PropTypes from "prop-types";
import "./select.scss";

export const Select = ({ label, description, options, props }) => {
  // const classNames = ["text-input"];

  return (
    <div className="field">
      <label className="label">{label}</label>
      <h2 className="subtitle is-2">{description}</h2>
      <div className="control">
        <div className="select">
          <select {...props}>
            {options &&
              options.map(option => {
                return (
                  <option
                    key={option.key}
                    value={option.value}
                    selected={option.selected}
                  >
                    {option.value}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  props: PropTypes.node.IsOptional,
  options: PropTypes.node.isRequired
};

Select.defaultProps = {
  label: "",
  description: "",
  props: {},
  options: []
};
