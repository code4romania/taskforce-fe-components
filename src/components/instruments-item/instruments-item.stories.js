import React from "react";
import "./../../styles.scss";
import { InstrumentsItem } from "./instruments-item";

export default { title: "InstrumentsItem" };

export const basic = () => (
  <InstrumentsItem
    color="#FF1616"
    title="Stiri oficiale si informații la zi"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
    ctaText="Cele mai noi informații oficiale"
    ctaOnClick={() => alert("Button Clicked")}
  />
);

export const withHeaderOnly = () => (
  <InstrumentsItem color="#FF1616" title="Stiri oficiale si informații la zi" />
);

export const withoutButton = () => (
  <InstrumentsItem
    color="#FF1616"
    title="Stiri oficiale si informații la zi"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
  />
);

export const withoutContent = () => (
  <InstrumentsItem
    color="#F5BCD6"
    title="Stiri oficiale si informații la zi"
    ctaText="Cele mai noi informații oficiale"
    ctaOnClick={() => alert("Button Clicked")}
  />
);
