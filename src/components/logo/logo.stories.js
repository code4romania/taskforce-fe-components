import React from "react";
import { Logo } from "./logo";
import Code4Logo from "../../images/code4romania-color.svg";

import "./../../styles.scss";

export default { title: "Logo" };

export const regular = () => (
  <Logo>
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
