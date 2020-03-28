import React from "react";
import PropTypes from "prop-types";
import { Hero } from "../hero/hero";
import "./sidebar-menu.scss";

export const SidebarMenu = ({ title, children }) => {
  return (
    <div className="__sidebar-menu-container">
      <Hero title={title} useFallbackIcon={true} />
      <ul className="menu-list">{children}</ul>
    </div>
  );
};

SidebarMenu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

SidebarMenu.defaultProps = {
  title: "Navigare rapidă"
};
