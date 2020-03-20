import React from "react";
import PropTypes from "prop-types";
import "./radio-list.scss";

/**
 * RadioList component - input radio list
 * @param {string} label
 * @param {string} description
 * @param {[{ key: string, value: string, checked?:boolean }]} options List of select options with key, value and selected properties
 * @param {'vertical'|'horizontal'} type List orientation: 'vertical', 'horizontal'
 */
export const RadioList = ({ label, description, options, onChange, type }) => {
  const classNames = ["field", "radio-list"];
  if (type === "horizontal") {
    classNames.push("horizontal");
  }
  if (type === "vertical") {
    classNames.push("vertical");
  }
  return (
    <div className={classNames.join(" ")}>
      <label className="label">{label}</label>
      <h2 className="subtitle is-2">{description}</h2>
      <div className="control">
        {options &&
          options.map(option => {
            return (
              <label
                className="radio"
                key={`label_${option.value}_${option.key}`}
              >
                <input
                  key={`input_${option.value}_${option.key}`}
                  type="radio"
                  name={label}
                  onChange={args => {
                    onChange && onChange(args.currentTarget.value);
                  }}
                  value={option.value}
                  checked={option.checked}
                />
                {option.value}
              </label>
            );
          })}
      </div>
    </div>
  );
};

RadioList.propTypes = {
  label: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["vertical", "horizontal"]),
  props: PropTypes.node.IsOptional,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool
    })
  ),
  onChange: PropTypes.func
};

RadioList.defaultProps = {
  label: "",
  description: "",
  props: {},
  options: []
};
