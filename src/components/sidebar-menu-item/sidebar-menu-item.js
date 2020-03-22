import React from "react";
import PropTypes from "prop-types";
import "./sidebar-menu-item.scss";

export const SidebarMenuItem = ({ active, isTitle, children }) => {
  return (
    <li
      className={`__sidebar-menu-item ${active && "active"} ${isTitle &&
        "isTitle"}`}
    >
      {children}
    </li>
  );
};

SidebarMenuItem.propTypes = {
  active: PropTypes.bool,
  isTitle: PropTypes.bool,
  children: PropTypes.node.isRequired
};

SidebarMenuItem.SidebarMenuItem = {
  active: false,
  isTitle: false
};
