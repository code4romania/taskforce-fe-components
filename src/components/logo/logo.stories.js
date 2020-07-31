import React from "react";
import { Logo } from "./logo";
import { ReactComponent as Code4Logo } from "../../images/code4romania-color.svg";

export default { title: "Logo" };

export const regular = () => (
  <Logo>
    <Code4Logo />
  </Logo>
);
export const openUrlInSameTab = () => (
  <Logo url="https://code4.ro" target="_self">
    <Code4Logo />
  </Logo>
);
export const withUrl = () => (
  <Logo url="https://code4.ro">
    <Code4Logo />
  </Logo>
);
export const withClass = () => (
  <Logo url="https://code4.ro" imgClass="smaller">
    <Code4Logo />
  </Logo>
);
