import React from "react";
import PropTypes from "prop-types";
import "./data-table.scss";

export const DataTable = ({ children }) => {
  return (
    <div className="data-table__container">
      <div className="data-table">{children}</div>
    </div>
  );
};

DataTable.propTypes = {
  children: PropTypes.node.isRequired
};
