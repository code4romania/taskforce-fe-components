import React, { useState } from "react";
import PropTypes from "prop-types";
import "./search-input.scss";
import { FaSearch } from "react-icons/fa";

export const SearchInput = ({
  hasIcon = true,
  onValueChange,
  placeholder = "cauta",
  value
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  return (
    <div className={`__search-input-container ${hasIcon ? "__has_icon" : ""}`}>
      <input
        placeholder={placeholder}
        value={value || currentValue || ""}
        onChange={event => {
          if (onValueChange) {
            onValueChange(event);
          }
          if (!value) {
            setCurrentValue(event.currentTarget.value);
          }
        }}
      ></input>
      {hasIcon ? <FaSearch size={30}></FaSearch> : null}
    </div>
  );
};

SearchInput.propTypes = {
  hasIcon: PropTypes.bool,
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};
