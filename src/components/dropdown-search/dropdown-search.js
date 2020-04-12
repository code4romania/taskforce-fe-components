import React, { useState } from "react";
import PropTypes from "prop-types";
import "./dropdown-search.scss";
import ArrowDown from "../../images/icons/arrow-down.svg";
import { SearchInput } from "../..";

export const DropdownSearch = ({
  title,
  values,
  onSelect,
  isAlwaysOpen,
  showSearchInput = true,
  searchPlaceholder
}) => {
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState(title);
  const [dropdownOptions, setDropDownOptions] = useState(values);
  const [searchInput, setSearchInput] = useState("");

  const selectDropdownOption = option => {
    setDropdownTitle(option);
    setShowDropdownOptions(!showDropdownOptions);
    setSearchInput("");
    setDropDownOptions(values);
    onSelect(option);
  };

  const toggleDropdownOptions = () => {
    setShowDropdownOptions(!showDropdownOptions);
  };

  const filterCaseInsensitiveElementsContaining = text => {
    if (text && text.trim() === "") {
      return values;
    }
    return values.filter(element =>
      element.toLowerCase().includes(text.toLowerCase())
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
              {dropdownOptions.map((option, index) => {
                return (
                  <div
                    className={"dropdown-search-options__value"}
                    key={index}
                    id={option}
                    onClick={() => {
                      selectDropdownOption(option);
                    }}
                  >
                    {option}
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
  values: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  isAlwaysOpen: PropTypes.bool,
  showSearchInput: PropTypes.bool,
  searchPlaceholder: PropTypes.string
};
