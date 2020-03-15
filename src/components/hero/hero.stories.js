import React from "react";
import { Hero } from "./hero";

const title = "Ce pasi ai de urmat";
const subtitle = "Pentru a te putea ajuta ...";
const icon = <img src={require("./covid-all.svg")} alt={"foo"} />;

export default { title: "Hero" };

export const withTitle = () => <Hero title={title} />;

export const withTitleSubtitle = () => (
  <Hero title={title} subtitle={subtitle} />
);

export const withTitleSubtitleIcon = () => (
  <Hero title={title} subtitle={subtitle}>
    {icon}
  </Hero>
);
