import React from "react";
import PropTypes from "prop-types";
import "./list.scss";

export const List = ({ columns, children }) => {
  return (
    <ul role="list" className={`__list-wrapper __list-grid-${columns}`}>
      {children}
    </ul>
  );
};

List.defaultProps = {
  columns: 1
};

List.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node.isRequired
};
