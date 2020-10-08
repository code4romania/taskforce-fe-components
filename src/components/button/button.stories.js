import React from "react";
import { Button } from "./button";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs]
};

function sayMyName() {
  alert("Hello Friend");
}

const colorOptions = [
  "primary",
  "danger",
  "warning"
];

export const button = () => {
  return (
    <Button
      inverted={boolean("Inverted", false)}
      disabled={boolean("Disabled", false)}
      color={select("Color", colorOptions, "primary")}
      onClick={sayMyName}
    >
      {text("Text", "Hello Friend")}
    </Button>
  );
};
