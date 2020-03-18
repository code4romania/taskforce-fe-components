import React from "react";
import PropTypes from "prop-types";
import "./select.scss";

export const Select = ({ label, description, options, props }) => {
  const classNames = ["text-input"];

  return (
    <label className={classNames.join(" ")}>
      {label}
      {description && <p> {description}</p>}
      <select type="text" {...props}>
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
    </label>
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
