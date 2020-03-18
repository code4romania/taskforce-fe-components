import React from "react";
import "./../../styles.scss";
import { DeveloperLogo } from "./developer-logo";

export default { title: "Developer Logo" };

export const Default = () => <DeveloperLogo />;
export const WithSrc = () => (
  <DeveloperLogo src="https://via.placeholder.com/150x90.png?text=Developer Logo" />
);
