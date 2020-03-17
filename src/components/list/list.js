import React from "react";
import PropTypes from "prop-types";
import "./list.styles.scss";

export const List = ({ columns, children }) => {
  return (
    <div className={`__list-wrapper __list-grid-${columns}`}>{children}</div>
  );
};

List.defaultProps = {
  columns: 1
};

List.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node.isRequired
};
