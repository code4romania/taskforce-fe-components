import React, { useState } from "react";
import { Input } from "./input";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

export default {
  title: "Input",
  decorators: [withKnobs]
};

const style = { width: 500 };

const typeOptions = [
  "text",
  "email",
  "tel",
  "password",
  "number"
];

const sizeOptions = {
  normal: null,
  small: "small",
  medium: "medium",
  large: "large"
}

const colorOptions = {
  default: null,
  primary: "primary",
  info: "info",
  success: "success",
  warning: "warning",
  danger: "danger"
}

export const input = () => {
  const type = select("Type", typeOptions, "text");

  return (
    <form
      style={style}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        label={text("Label", "Input Label")}
        secondaryLabel={text("Secondary Label")}
        type={type}
        size={select("Size", sizeOptions) || undefined}
        color={select("Color", colorOptions) || undefined}
        defaultValue={text("Default Value")}
        title={text("Title")}
        rounded={boolean("Rounded", false)}
        disabled={boolean("Disabled", false)}
        usePlaceholder={boolean("Use Placeholder", false)}
        loading={boolean("Loading", false)}
      />

      <input type="submit" value="Validate inputs" />
      {/* Please see
      https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Constraint_validation_process
      on how to trigger native form validation from JS
      */}
    </form>
  )
}

const emailMessage = {
  typeMismatch: "Un email valid trebuie sa contina @"
};

const telephoneMessage = {
  patternMismatch: "Va rog introduceti un numar de telefon valid"
};

const numberMessages = {
  rangeOverflow: "Valoarea trebuie sa fie mai mica sau egala cu 7",
  rangeUnderflow: "Valoarea trebuie sa fie mai mare sau egala cu 1",
  valueMissing: "Te rog completeaza acest camp",
  stepMismatch: "Valoarea trebuie sa fie impara"
};

export const validation = () => (
  <form
    style={style}
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <div style={style}>
      <Input type="email" validationMessages={emailMessage} label="Email" />
      <Input
        validationMessages={telephoneMessage}
        type="tel"
        label="Telephone"
        minLength={10}
        maxLength={13}
        pattern="(?:00|07)[0-9]*"
        title="07xxxxxxxx sau 00xxxxxxxxxx - doar cifre"
      />
      <Input
        type="number"
        validationMessages={numberMessages}
        min={1}
        max={7}
        step={2}
        required
        label="Restircted number validation (required, min(3), max(7), step(2))"
      />

      <input type="submit" value="Validate input" />
    </div>
    {/* Please see
     https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
    on all the available validation properties */}
  </form>
);

export const events = () => {
  const [inputValue, setInputValue] = useState();
  return (
    <div style={style}>
      <Input
        label="Type something..."
        usePlaceholder={true}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>{inputValue}</div>
    </div>
  );
};
