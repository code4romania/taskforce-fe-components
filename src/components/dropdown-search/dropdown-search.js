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
  showSearchInput = true
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
      <div className="header-filter" onClick={toggleDropdownOptions}>
        <div className="header-filter__name">{dropdownTitle}</div>
        <span className="icon is-small is-right header-filter__icon">
          <ArrowDown />
        </span>
      </div>
      {(showDropdownOptions || isAlwaysOpen) && (
        <div className={"dropdown-search-options"}>
          {showSearchInput && (
            <>
              <SearchInput value={searchInput} onValueChange={filterValues} />
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
  showSearchInput: true
};

DropdownSearch.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  isAlwaysOpen: PropTypes.bool,
  showSearchInput: PropTypes.bool
};
