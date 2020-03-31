import React, { useState } from "react";
import PropTypes from "prop-types";
import "./filter-modal.scss";

import { SearchInput } from "../search-input/search-input";

import ChevronUpIcon from "../../images/icons/chevron-up.svg";

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

  const WithScrollDiv = WithScrollHandler(({ children, ...props }) =>
    React.createElement("div", props, children)
  );

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
          <WithScrollDiv className="filter-modal__list">
            {(hasReachedTop, hasReachedBottom) => (
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
                <div className="filter-modal__scrollbar">
                  <span className="icon">
                    {!hasReachedTop && <ChevronUpIcon />}
                  </span>
                  <span className="icon">
                    {!hasReachedBottom && (
                      <ChevronUpIcon className="filter-modal__scrollbar--down" />
                    )}
                  </span>
                </div>
              </>
            )}
          </WithScrollDiv>
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

const WithScrollHandler = WrappedComponent => {
  const WrapperComponent = ({ children, ...rest }) => {
    const [contentHeight, setContentHeight] = useState(0);
    const [hasReachedTop, setHasReachedTop] = useState(true);
    const [hasReachedBottom, setHasReachedBottom] = useState(false);

    const onScrollHandler = event => {
      let updatedContentHeight = contentHeight || 0;

      if (!updatedContentHeight) {
        event.target.children.forEach(child => {
          if (child.className.includes("filter-modal__value")) {
            updatedContentHeight += child.offsetHeight;
          }
        });

        setContentHeight(updatedContentHeight);
      }

      const target = event.target,
        scrollTop = target.scrollTop,
        height = target.offsetHeight;

      const currentHasReachedTop = scrollTop === 0;
      const currentHasReachedBottom =
        scrollTop + height === updatedContentHeight;

      if (currentHasReachedTop !== hasReachedTop) {
        setHasReachedTop(currentHasReachedTop);
      }

      if (currentHasReachedBottom !== hasReachedBottom) {
        setHasReachedBottom(currentHasReachedBottom);
      }
    };

    return (
      <WrappedComponent {...rest} onScroll={onScrollHandler}>
        {children(hasReachedTop, hasReachedBottom)}
      </WrappedComponent>
    );
  };

  WrapperComponent.propTypes = {
    children: PropTypes.func
  };

  return WrapperComponent;
};
