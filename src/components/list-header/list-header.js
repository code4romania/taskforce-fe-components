import React from "react";
import PropTypes from "prop-types";

import "./list-header.scss";

export const ListHeader = ({ title }) => {
  return <div className="list-header">{title}</div>;
};

ListHeader.propTypes = {
  title: PropTypes.string.isRequired
};
