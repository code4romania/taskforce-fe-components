import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./search-input.scss";
import SearchIcon from "../../images/icons/search.svg";

export const SearchInput = ({
  hasIcon = true,
  onValueChange,
  placeholder = "cauta",
  value
}) => {
  const [currentValue, setCurrentValue] = useState("");
  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, []);

  return (
    <p className="control has-icons-right __search-input-container ">
      <input
        className={"input"}
        placeholder={placeholder}
        value={currentValue}
        onChange={event => {
          if (onValueChange) {
            onValueChange(event.target.value);
          }

          setCurrentValue(event.target.value);
        }}
      />
      <span className="icon is-small is-right">
        {hasIcon && <SearchIcon />}
      </span>
    </p>
  );
};

SearchInput.propTypes = {
  hasIcon: PropTypes.bool,
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};
