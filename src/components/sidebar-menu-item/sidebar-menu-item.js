import React from "react";
import PropTypes from "prop-types";
import "./sidebar-menu-item.scss";

export const SidebarMenuItem = ({ active, isTitle, children, onClick }) => {
  const onClickCb = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li
      className={`__sidebar-menu-item ${active && "active"} ${isTitle &&
        "isTitle"}`}
      onClick={onClickCb}
    >
      {children}
    </li>
  );
};

SidebarMenuItem.propTypes = {
  active: PropTypes.bool,
  isTitle: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

SidebarMenuItem.SidebarMenuItem = {
  active: false,
  isTitle: false
};
