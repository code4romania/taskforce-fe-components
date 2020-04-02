import React, { useState } from "react";
import PropTypes from "prop-types";
import "./filter-modal.scss";

import { SearchInput } from "../search-input/search-input";

export const FilterModal = ({ placeholder, values, isOpen, selectValue }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const onValueChangedHandler = value => {
    setSelectedValue(value);
  };

  const onValueSelectedHandler = value => {
    if (selectValue) {
      selectValue(value);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="filter-modal__container">
      <div className="filter-modal">
        <SearchInput
          hasIcon
          value={selectedValue}
          placeholder={placeholder}
          onValueChange={onValueChangedHandler}
        />
        <div className="filter-modal__separator" />
        <div className="filter-modal__scrollable-wrapper">
          <div className="filter-modal__list">
            <>
              {values
                .filter(
                  value =>
                    !selectedValue ||
                    value.toLowerCase().includes(selectedValue.toLowerCase())
                )
                .map(value => (
                  <div
                    key={`FilterModalValue${value}`}
                    className="filter-modal__value"
                    onClick={() => onValueSelectedHandler(value)}
                  >
                    {value}
                  </div>
                ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

FilterModal.defaultProps = {
  isOpen: false,
  values: [],
  placeholder: "cauta"
};

FilterModal.propTypes = {
  isOpen: PropTypes.bool,
  placeholder: PropTypes.string,
  values: PropTypes.array,
  selectValue: PropTypes.func
};
