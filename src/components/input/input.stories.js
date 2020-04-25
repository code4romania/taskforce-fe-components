import React, { useState } from "react";
import { Input } from "./input";

export default { title: "Input" };

const style = { width: 500 };

export const types = () => (
  <form
    style={style}
    onSubmit={e => {
      e.preventDefault();
    }}
  >
    <Input type="text" label="Text" />
    <Input type="email" label="Email" />
    <Input
      type="tel"
      label="Telephone"
      minLength={10}
      maxLength={13}
      pattern="(?:00|07)[0-9]*"
      title="07xxxxxxxx sau 00xxxxxxxxxx - doar cifre"
    />
    <Input type="password" label="Password" />
    <Input type="number" label="Free-range number" />
    <Input type="number" min="1" max="3" label="Restricted number" />
    <Input type="number" min="0" max="10" step="2" label="Number with step" />

    <input type="submit" value="Validate inputs" />
    {/* Please see
    https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Constraint_validation_process
    on how to trigger native form validation from JS */}
  </form>
);

export const sizes = () => (
  <div style={style}>
    <Input label="Small" size="small" />
    <Input label="Normal" />
    <Input label="Medium" size="medium" />
    <Input label="Large Input" size="large" />
  </div>
);

export const styles = () => (
  <div style={style}>
    <Input label="Rounded" rounded={true} />
  </div>
);

export const colors = () => (
  <div style={style}>
    <Input label="Primary" color="primary" />
    <Input label="Info" color="info" />
    <Input label="Success" color="success" />
    <Input label="Warning" color="warning" />
    <Input label="Danger" color="danger" />
  </div>
);

export const other = () => (
  <div style={style}>
    <Input label="Disabled Input" disabled={true} />
    <Input label="With Placeholder" usePlaceholder={true} />
    <Input label="With Default Value" defaultValue="Some default Value" />
    <Input label="With Loading State" loading={true} />
    <Input label="With Secondary Label" secondaryLabel="Secondary Label" />
  </div>
);

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
    onSubmit={e => {
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
        min="1"
        max="7"
        step="2"
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
        usePlaceholder="true"
        onChange={e => setInputValue(e.target.value)}
      />
      <label>{inputValue}</label>
    </div>
  );
};
