import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./search-input.scss";
import SearchIcon from "../../icons/search.svg";
import classNames from "classnames";

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
    <div
      className={classNames({
        "__search-input-container": true,
        "__has-icon": hasIcon
      })}
    >
      <input
        placeholder={placeholder}
        value={currentValue}
        onChange={event => {
          if (onValueChange) {
            onValueChange(event.target.value);
          }

          setCurrentValue(event.target.value);
        }}
      ></input>
      {hasIcon ? <img src={SearchIcon}></img> : null}
    </div>
  );
};

SearchInput.propTypes = {
  hasIcon: PropTypes.bool,
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};
