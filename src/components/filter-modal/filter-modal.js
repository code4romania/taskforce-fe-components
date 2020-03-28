import React from "react";
import PropTypes from "prop-types";
import "./filter-modal.scss";

import { SearchInput } from "../search-input/search-input";

import ChevronDownIcon from "../../images/icons/chevron-down.svg";
import ChevronUpIcon from "../../images/icons/chevron-up.svg";

export class FilterModal extends React.Component {
  state = {
    selectedValue: ""
  };

  onValueChangedHandler = value => {
    this.setState({
      selectedValue: value
    });
  };

  onValueSelectedHandler = value => {
    if (this.props.selectValue) {
      this.props.selectValue(value);
    }
  };

  render() {
    const { placeholder, values, isOpen } = this.props;
    const { selectedValue } = this.state;

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
            onValueChange={this.onValueChangedHandler}
          />
          <div className="filter-modal__separator" />
          <div className="filter-modal__scrollable-wrapper">
            <WithScrollDiv className="filter-modal__list">
              {(hasReachedTop, hasReachedBottom) => (
                <React.Fragment>
                  {values
                    .filter(
                      value => !selectedValue || value.includes(selectedValue)
                    )
                    .map(value => (
                      <div
                        key={`FilterModalValue${value}`}
                        className="filter-modal__value"
                        onClick={() => this.onValueSelectedHandler(value)}
                      >
                        {value}
                      </div>
                    ))}
                  <div className="filter-modal__scrollarea">
                    <span className="icon">
                      {!hasReachedTop && <ChevronUpIcon />}
                    </span>
                    <span className="icon">
                      {!hasReachedBottom && <ChevronDownIcon />}
                    </span>
                  </div>
                </React.Fragment>
              )}
            </WithScrollDiv>
          </div>
        </div>
      </div>
    );
  }
}

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
  class WrapperComponent extends React.Component {
    state = {
      contentHeight: 0,
      hasReachedTop: true,
      hasReachedBottom: false
    };

    onScrollHandler = event => {
      const { contentHeight, hasReachedBottom, hasReachedTop } = this.state;
      const state = {
        contentHeight
      };

      if (!contentHeight) {
        let updatedContentHeight = 0;

        event.target.children.forEach(child => {
          if (child.className.includes("filter-modal__value")) {
            updatedContentHeight += child.offsetHeight;
          }
        });

        state.contentHeight = updatedContentHeight;
      }

      const target = event.target,
        scrollTop = target.scrollTop,
        height = target.offsetHeight;

      state.hasReachedTop = scrollTop === 0;
      state.hasReachedBottom = scrollTop + height === contentHeight;

      if (
        state.contentHeight !== contentHeight ||
        state.hasReachedTop !== hasReachedTop ||
        state.hasReachedBottom !== hasReachedBottom
      ) {
        this.setState(state);
      }
    };

    render() {
      const { children, ...rest } = this.props;

      return (
        <WrappedComponent {...rest} onScroll={this.onScrollHandler}>
          {children(this.state.hasReachedTop, this.state.hasReachedBottom)}
        </WrappedComponent>
      );
    }
  }

  WrapperComponent.propTypes = {
    children: PropTypes.func
  };

  return WrapperComponent;
};
