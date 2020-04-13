import React, { useState } from "react";
import PropTypes from "prop-types";
import "./dropdown-search.scss";
import ArrowDown from "../../images/icons/arrow-down.svg";
import { SearchInput } from "../search-input/search-input";

export const DropdownSearch = ({
  title,
  options,
  onSelect,
  isAlwaysOpen,
  showSearchInput = true,
  searchPlaceholder
}) => {
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState(title);
  const [dropdownOptions, setDropDownOptions] = useState(options);
  const [searchInput, setSearchInput] = useState("");

  const selectDropdownOption = option => {
    setDropdownTitle(option.label);
    setShowDropdownOptions(!showDropdownOptions);
    setSearchInput("");
    setDropDownOptions(options);
    onSelect(option);
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
    setDropDownOptions(filterCaseInsensitiveElementsContaining(searchText));
  };

  return (
    <div>
      <div className="dropdown-search-filter" onClick={toggleDropdownOptions}>
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
                    className={"dropdown-search-options__value"}
                    key={option.value}
                    id={option.value}
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

DropdownSearch.defaults = {
  title: "",
  values: [],
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
