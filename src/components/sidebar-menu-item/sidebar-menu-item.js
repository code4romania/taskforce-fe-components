import React from "react";
import PropTypes from "prop-types";
import "./sidebar-menu-item.scss";
import classNames from "classnames";
import { onEnterOrSpace } from "../../a11y";

export const SidebarMenuItem = ({ active, isTitle, children, onClick }) => {
  const onClickCb = () => {
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <li
      role="menuitem"
      tabIndex="0"
      className={classNames("__sidebar-menu-item", {
        isTitle,
        active
      })}
      onClick={onClickCb}
      onKeyPress={onEnterOrSpace(() => onClick && onClick(value))}      
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
