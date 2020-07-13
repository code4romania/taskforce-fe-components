import React from "react";
import PropTypes from "prop-types";
import "./data-table-row.scss";

export const DataTableRow = ({ children }) => {
  return <div className="data-table-row">{children}</div>;
};

DataTableRow.propTypes = {
  children: PropTypes.node.isRequired
};
