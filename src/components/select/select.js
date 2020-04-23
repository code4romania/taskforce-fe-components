import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import deprecated from "deprecated-prop-type";
import warning from "warning";

/**
 *
 * @param {string} label
 * @param {string} description
 * @param {[{ text: string, value: string | number, disabled?: boolean }]} options
 * List of select options with key, value and disabled properties
 * @param {object} selectProps Contains HTML input attributes:
 * type, value, name, id, etc. https://www.w3schools.com/tags/tag_select.asp
 * @param {string | number} defaultValue
 */
export const Select = ({
  label,
  description,
  options,
  selectProps,
  defaultValue
}) => {
  const selectEl = useRef(null);

  useEffect(() => {
    const selectedOptions = options.filter(opt => opt.selected);

    if (selectedOptions.length) {
      const [option] = selectedOptions;
      selectEl.current.value = option.value;

      if (selectedOptions.length > 1) {
        warning(false, "Only one 'selected' property of 'Select' can be true");
      }
    }
  }, []);

  return (
    <div className="field">
      <label className="label">{label}</label>
      <p className="subtitle is-2">{description}</p>
      <div className="control">
        <div className="select">
          <select ref={selectEl} {...selectProps} defaultValue={defaultValue}>
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
      value: PropTypes.string,
      disabled: PropTypes.bool,
      selected: deprecated(PropTypes.bool, "Use `defaultValue` prop instead.")
    })
  )
};

Select.defaultProps = {
  label: "",
  description: "",
  selectProps: {},
  defaultValue: null,
  options: []
};
