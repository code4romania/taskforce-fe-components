import React from "react";
import "./../../styles.scss";
import { SidebarMenu } from "./sidebar-menu";
import { withKnobs } from "@storybook/addon-knobs";
import { SidebarMenuItem } from "../sidebar-menu-item/sidebar-menu-item";

export default { title: "Sidebar Menu", decorators: [withKnobs] };

export const withDefaultTitle = () => (
  <SidebarMenu>
    <SidebarMenuItem isTitle>Transmitere si simptome</SidebarMenuItem>
    <SidebarMenuItem isTitle>Cum ne protejam</SidebarMenuItem>
    <SidebarMenuItem>Cum se răspândește</SidebarMenuItem>
    <SidebarMenuItem active>
      Ce măsuri trebuie să iei pentru a te proteja
    </SidebarMenuItem>
    <SidebarMenuItem>
      Ce măsuri trebuie să iei pentru a-i proteja pe ceilalți
    </SidebarMenuItem>
    <SidebarMenuItem>Cum să cureți și să dezinfectezi</SidebarMenuItem>
    <SidebarMenuItem>
      Cum să îți creezi un plan de acțiune la tine acasă
    </SidebarMenuItem>
    <SidebarMenuItem isTitle>Ai simptome?</SidebarMenuItem>
    <SidebarMenuItem isTitle>Adaptare si rezistenta</SidebarMenuItem>
    <SidebarMenuItem>Sfaturi pentru parinti</SidebarMenuItem>
    <SidebarMenuItem>Ajutor pentru copii</SidebarMenuItem>
    <SidebarMenuItem>Reactii obisnuite pentru copii</SidebarMenuItem>
    <SidebarMenuItem isTitle>Pentru cei care ofera ajutor</SidebarMenuItem>
    <SidebarMenuItem isTitle>Intrebari frecvente</SidebarMenuItem>
  </SidebarMenu>
);
