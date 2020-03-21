import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {string} label
 * @param {string} description
 * @param {[{ text: string, value: string, selected?:boolean }]} options List of select options with key, value and selected properties
 * @param {object} selectProps Contains HTML input attributes: type, value, name, id, etc. https://www.w3schools.com/tags/tag_select.asp
 */
export const Select = ({ label, description, options, selectProps }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <h2 className="subtitle is-2">{description}</h2>
      <div className="control">
        <div className="select">
          <select {...selectProps}>
            {options &&
              options.map((option, index) => {
                return (
                  <option
                    key={`key_${option.value}_${index}`}
                    value={option.value}
                    selected={option.selected}
                  >
                    {option.text}
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
  selectProps: PropTypes.node.IsOptional,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
      selected: PropTypes.bool
    })
  )
};

Select.defaultProps = {
  label: "",
  description: "",
  selectProps: {},
  options: []
};
