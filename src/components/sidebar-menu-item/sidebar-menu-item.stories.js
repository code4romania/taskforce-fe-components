import React from "react";
import "./../../styles.scss";
import { SidebarMenuItem } from "./sidebar-menu-item";
import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Sidebar Menu Item", decorators: [withKnobs] };

export const sectionTitle = () => (
  <SidebarMenuItem isTitle>Transmitere și simptome</SidebarMenuItem>
);
export const activeSectionTitle = () => (
  <SidebarMenuItem isTitle active>
    Transmitere și simptome
  </SidebarMenuItem>
);

export const subSection = () => (
  <SidebarMenuItem>Transmitere și simptome</SidebarMenuItem>
);

export const activeSubSection = () => (
  <SidebarMenuItem active>Transmitere și simptome</SidebarMenuItem>
);
