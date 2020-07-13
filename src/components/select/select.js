import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {string} label
 * @param {string} description
 * @param {[{ text: string, value: string | number, disabled?: boolean }]} options
 * List of select options with key, value and disabled properties
 * @param {object} selectProps Contains HTML input attributes:
 * type, value, name, id, etc. https://www.w3schools.com/tags/tag_select.asp
 * @param { string | number } defaultValue
 */
export const Select = ({
  label,
  description,
  options,
  selectProps,
  defaultValue
}) => {
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    const selectedOptions = options.filter((opt) => opt.selected);

    if (selectedOptions.length) {
      const [option] = selectedOptions;
      setCurrentValue(option.value);

      if (selectedOptions.length > 1) {
        console.warn("Only one 'selected' property of 'Select' can be true");
      }
    }

    if (defaultValue) {
      setCurrentValue(defaultValue);
    }
  }, [defaultValue]);

  const onChange = (e) => {
    if (selectProps.onChange && typeof selectProps.onChange === "function") {
      selectProps.onChange(e);
    }

    setCurrentValue(e.target.value);
  };

  return (
    <div className="field">
      <label className="label">{label}</label>
      <p className="subtitle is-2">{description}</p>
      <div className="control">
        <div className="select">
          <select {...selectProps} onChange={onChange} value={currentValue}>
            {options &&
              options.map((option, index) => {
                return (
                  <option
                    key={`key_${option.value}_${index}`}
                    value={option.value}
                    disabled={option.disabled === true}
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
  selectProps: PropTypes.object,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool
    })
  )
};

Select.defaultProps = {
  label: "",
  description: "",
  selectProps: {},
  options: []
};
