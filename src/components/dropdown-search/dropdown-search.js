import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./dropdown-search.scss";
import ArrowDown from "../../images/icons/arrow-down.svg";
import { SearchInput } from "../search-input/search-input";

export const DropdownSearch = ({
  title,
  options,
  onSelect,
  isAlwaysOpen,
  showSearchInput,
  searchPlaceholder
}) => {
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState(title);
  const [dropdownOptions, setDropdownOptions] = useState(options);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setDropdownOptions(options);
  }, [options]);

  const selectDropdownOption = option => {
    setDropdownTitle(option.label);
    setShowDropdownOptions(!showDropdownOptions);
    setSearchInput("");
    setDropdownOptions(options);
    onSelect(option);
  };

  const onDropdownKeyPress = event => {
    if (event.key === "Enter") {
      toggleDropdownOptions();
    }
  };

  const onItemKeyPress = (event, option) => {
    if (event.key === "Enter") {
      selectDropdownOption(option);
    }
  };

  const toggleDropdownOptions = () => {
    setShowDropdownOptions(!showDropdownOptions);
  };

  const filterCaseInsensitiveElementsContaining = text => {
    if (text && text.trim() === "") {
      return options;
    }
    return options.filter(element =>
      element.label.toLowerCase().includes(text.toLowerCase())
    );
  };

  const filterValues = searchText => {
    setSearchInput(searchText);
    setDropdownOptions(filterCaseInsensitiveElementsContaining(searchText));
  };

  return (
    <div>
      <div
        tabIndex={0}
        className="dropdown-search-filter"
        onKeyPress={onDropdownKeyPress}
        onClick={toggleDropdownOptions}
      >
        <div className="dropdown-search-filter__name">{dropdownTitle}</div>
        <span className="icon is-small is-right dropdown-search-filter__icon">
          <ArrowDown />
        </span>
      </div>
      {(showDropdownOptions || isAlwaysOpen) && (
        <div className={"dropdown-search-options"}>
          {showSearchInput && (
            <>
              <SearchInput
                value={searchInput}
                onValueChange={filterValues}
                placeholder={searchPlaceholder}
              />
              <hr />
            </>
          )}
          <div className="dropdown-search-options__scrollable-wrapper">
            <div className="dropdown-search-options__list">
              {dropdownOptions.map(option => {
                return (
                  <div
                    tabIndex={0}
                    className="dropdown-search-options__value"
                    key={option.value}
                    id={option.value}
                    onKeyPress={e => onItemKeyPress(e, option)}
                    onClick={() => {
                      selectDropdownOption(option);
                    }}
                  >
                    {option.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

DropdownSearch.defaultProps = {
  title: "",
  options: [],
  onSelect: () => {},
  isAlwaysOpen: false,
  showSearchInput: true,
  searchPlaceholder: ""
};

DropdownSearch.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  isAlwaysOpen: PropTypes.bool,
  showSearchInput: PropTypes.bool,
  searchPlaceholder: PropTypes.string
};
