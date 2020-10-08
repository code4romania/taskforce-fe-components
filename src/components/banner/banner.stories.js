import React from "react";
import { Banner } from "./banner";
import { withKnobs, select } from "@storybook/addon-knobs";


export default {
  title: "Banner",
  decorators: [withKnobs]
};

const colorOptions = {
  Default: null,
  Yellow: "yellow",
  Green: "green"
};


export const banner = () => (
  <Banner
    color={select("Color", colorOptions) || undefined}
    title="15 RECOMANDĂRI privind conduita socială responsabilă în prevenirea răspândirii coronavirus. "
    link="https://code4.ro"
  />
);
