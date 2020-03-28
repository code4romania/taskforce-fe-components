import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./search-input.scss";
import SearchIcon from "../../images/icons/search.svg";

export const SearchInput = ({
  hasIcon = true,
  onValueChange,
  placeholder = "cauta",
  value,
  onClick,
  onEnter
}) => {
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, []);

  const onKeyPress = event => {
    if (onEnter && event.key === "Enter") {
      onEnter(currentValue);
    }
  };

  const onChange = event => {
    if (onValueChange) {
      onValueChange(event.target.value);
    }

    setCurrentValue(event.target.value);
  };

  const handleOnClick = () => {
    if (onClick) {
      onClick(currentValue);
    }
  };

  return (
    <p className="control has-icons-right __search-input-container ">
      <input
        onKeyPress={onKeyPress}
        className={"input"}
        placeholder={placeholder}
        value={currentValue}
        onChange={onChange}
      />
      <span className="icon is-small is-right" onClick={handleOnClick}>
        {hasIcon && <SearchIcon />}
      </span>
    </p>
  );
};

SearchInput.propTypes = {
  hasIcon: PropTypes.bool,
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onEnter: PropTypes.func
};
