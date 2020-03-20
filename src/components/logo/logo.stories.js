import React from "react";
import { Logo } from "./logo";
import Code4Logo from "./assets/logo.png";

import "./../../styles.scss";

export default { title: "Logo" };

export const regular = () => <Logo src={Code4Logo} alt={"Taskforce"} />;
export const withUrl = () => <Logo src={Code4Logo} url="https://code4.ro" />;
export const withClass = () => (
  <Logo src={Code4Logo} url="https://code4.ro" imgClass="smaller" />
);
