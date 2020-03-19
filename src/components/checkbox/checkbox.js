import React from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import "./checkbox.scss";

export const Checkbox = ({
  name,
  disabled,
  defaultValue,
  children,
  onChange
}) => (
  <label className="__checkbox-label">
    <input
      type="checkbox"
      name={name}
      disabled={disabled}
      onChange={onChange}
      checked={defaultValue}
    />
    <span className="__checkbox-custom" />
    {children}
  </label>
);

Checkbox.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  defaultValue: false,
  disabled: false
};
