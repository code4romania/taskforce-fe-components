import React from "react";
import "./../../styles.scss";
import { PartnerLogo } from "./partner-logo";

export default { title: "Partner Logo" };

export const Default = () => <PartnerLogo />;
export const WithSrc = () => (
  <PartnerLogo src="https://via.placeholder.com/150x90.png?text=Partner Logo" />
);
