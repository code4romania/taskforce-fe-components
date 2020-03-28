import React from "react";
import PropTypes from "prop-types";
import "./data-table-item.scss";

export const DataTableItem = ({ children, align, extraStyles }) => {
  return (
    <div
      className={`data-table-item data-table-item--${align}`}
      style={extraStyles}
    >
      {children}
    </div>
  );
};

DataTableItem.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["right", "left", "center"]),
  extraStyles: PropTypes.any
};

DataTableItem.defaultProps = {
  align: "left"
};
