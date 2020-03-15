import React from "react";
import "./../../styles.scss";
import { InstrumentsItem } from "./intruments-item";

export default { title: "InstrumentsItem" };

export const basic = () => 
  <div style={{width: 500}}>
    <InstrumentsItem 
      color="#FF1616" 
      title="Stiri oficiale si informații la zi" 
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
      ctaText="Cele mai noi informații oficiale"
      ctaOnClick={() => alert("Button Clicked")} />
  </div>;

export const withHeaderOnly = () => 
  <div style={{width: 500}}>
    <InstrumentsItem 
      color="#FF1616" 
      title="Stiri oficiale si informații la zi" />
  </div>;

export const withoutButton = () => 
  <div style={{width: 500}}>
    <InstrumentsItem 
      color="#FF1616" 
      title="Stiri oficiale si informații la zi" 
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium." />
  </div>;

export const withoutContent = () => 
  <div style={{width: 500}}>
    <InstrumentsItem 
      color="#FF1616" 
      title="Stiri oficiale si informații la zi" 
      ctaText="Cele mai noi informații oficiale"
      ctaOnClick={() => alert("Button Clicked")} />
  </div>;