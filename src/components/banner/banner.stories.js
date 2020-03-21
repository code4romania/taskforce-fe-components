import React from "react";
import { Banner } from "./banner";

import "./../../styles.scss";

export default { title: "Banner" };

export const defaultColor = () => (
  <Banner title="15 RECOMANDĂRI privind conduita socială responsabilă în prevenirea răspândirii coronavirus. " link="https://code4.ro" />
);

export const green = () => (
  <Banner color="green"  title="15 RECOMANDĂRI privind conduita socială responsabilă în prevenirea răspândirii coronavirus. " link="https://code4.ro" />
);

export const yellow = () => (
  <Banner color="yellow"  title="15 RECOMANDĂRI privind conduita socială responsabilă în prevenirea răspândirii coronavirus. " link="https://code4.ro" />
);
