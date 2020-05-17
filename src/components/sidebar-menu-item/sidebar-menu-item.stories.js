import React, { useState } from "react";
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

export const withTheme = () => (
  <>
    <SidebarMenuItem
      isTitle
      theme={{ highlightColor: "#F6DD62", backgroundColor: "#F6F9FC" }}
    >
      Transmitere și simptome
    </SidebarMenuItem>
    <SidebarMenuItem
      isTitle
      active
      theme={{ highlightColor: "#F6DD62", backgroundColor: "#F6F9FC" }}
    >
      Transmitere și simptome
    </SidebarMenuItem>
    <SidebarMenuItem
      theme={{ highlightColor: "#F6DD62", backgroundColor: "#F6F9FC" }}
    >
      Transmitere și simptome
    </SidebarMenuItem>
    <SidebarMenuItem
      active
      theme={{ highlightColor: "#F6DD62", backgroundColor: "#F6F9FC" }}
    >
      Transmitere și simptome
    </SidebarMenuItem>
  </>
);

export const sectionTitleWithCallback = () => {
  const [data, setData] = useState({});
  const documentExample = {
    title: "Ce spune legea",
    doc_type: "STATIC_PAGE",
    doc_id: 101,
    active: true,
    display_order: 2,
    content: "Lorem Ipsum...",
    nodes: null,
    buttons: [
      {
        title: "Vezi toate legile",
        link: "https://test.com"
      }
    ]
  };

  return (
    <div style={{ minWidth: 300, maxWidth: 800 }}>
      <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data)}</pre>
      <SidebarMenuItem isTitle onClick={() => setData(documentExample)}>
        Transmitere și simptome
      </SidebarMenuItem>
    </div>
  );
};
