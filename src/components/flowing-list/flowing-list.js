import React from "react";
import PropTypes from "prop-types";
import "./flowing-list.styles.scss";

export const FlowingList = ({ children }) => {
  return <div className={"__flowing-list"}>{children}</div>;
};

FlowingList.propTypes = {
  children: PropTypes.node.isRequired
};
