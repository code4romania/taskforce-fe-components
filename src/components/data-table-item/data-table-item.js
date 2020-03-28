import React from "react";
import PropTypes from "prop-types";
import "./data-table-item.scss";

export const DataTableItem = ({ content, align, extraStyles }) => {
  return (
    <div
      className={`data-table-item data-table-item--${align}`}
      style={extraStyles}
    >
      {content}
    </div>
  );
};

DataTableItem.propTypes = {
  content: PropTypes.any,
  align: PropTypes.oneOf(["right", "left", "center"]),
  extraStyles: PropTypes.any
};

DataTableItem.defaultProps = {
  align: "left"
};
