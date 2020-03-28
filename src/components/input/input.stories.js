import React, { useState } from "react";
import { Input } from "./input";

export default { title: "Input" };

const style = { width: 500 };

export const types = () => (
  <div style={style}>
    <Input type="text" label="Text" />
    <Input type="email" label="Email" />
    <Input type="tel" label="Telephone" />
    <Input type="password" label="Password" />
  </div>
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
