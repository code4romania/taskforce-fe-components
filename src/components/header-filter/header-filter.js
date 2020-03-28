import React from "react";
import PropTypes from "prop-types";
import "./header-filter.scss";

import FilterIcon from "../../images/icons/filter.svg";

export class HeaderFilter extends React.Component {
  render() {
    const { name, onFilterIconClick } = this.props;

    return (
      <div className="header-filter">
        <div className="header-filter__name">{name}</div>
        <span className="icon is-small is-right header-filter__icon">
          <FilterIcon onClick={onFilterIconClick} />
        </span>
      </div>
    );
  }
}

HeaderFilter.defaultProps = {};

HeaderFilter.propTypes = {
  name: PropTypes.string,
  onFilterIconClick: PropTypes.func
};
