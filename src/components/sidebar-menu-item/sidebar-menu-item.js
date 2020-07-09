import React from "react";
import PropTypes from "prop-types";
import "./sidebar-menu-item.scss";
import classNames from "classnames";
import { onEnterOrSpace } from "../../a11y";
import { useCssVars } from "../../hooks/useCssVars";

export const SidebarMenuItem = ({
  active,
  isTitle,
  children,
  onClick,
  theme,
}) => {
  const style = useCssVars(theme);
  const onClickCb = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li
      role="menuitem"
      tabIndex={0}
      className={classNames("__sidebar-menu-item", {
        isTitle,
        active,
      })}
      onClick={onClickCb}
      onKeyPress={onEnterOrSpace(onClickCb)}
      style={style}
    >
      {children}
    </li>
  );
};

SidebarMenuItem.propTypes = {
  active: PropTypes.bool,
  isTitle: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
};

SidebarMenuItem.SidebarMenuItem = {
  active: false,
  isTitle: false,
  theme: false,
};
