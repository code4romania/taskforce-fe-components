import React from "react";
import { Label } from "./label";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Label",
  decorators: [withKnobs]
};

export const types = () => (
  <Label
    text={text("Text", "Some Label")}
    isSecondary={boolean("Is Secondary")}
  />
);
