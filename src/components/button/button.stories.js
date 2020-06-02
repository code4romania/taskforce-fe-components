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

const typeOptions = {
  Primary: "primary",
  Danger: "danger",
  Warning: "warning"
};

export const primary = () => {
  return (
    <Button
      inverted={boolean("Inverted", false)}
      disabled={boolean("Disabled", false)}
      type={select("Type", typeOptions, "primary")}
      onClick={sayMyName}
    >
      {text("Text", "Hello Friend")}
    </Button>
  );
};
