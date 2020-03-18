import React, { useState } from "react";
import "./../../styles.scss";
import { TextInput } from "./text-input";

export default { title: "TextInput" };

export const LargeInputWithDescription = () => {
  return (
    <div style={{ width: 500 }}>
      <TextInput
        label={"Long input"}
        description={"Long input with description"}
      />
    </div>
  );
};

export const LargeInputWithNoDescription = () => {
  return (
    <div style={{ width: 500 }}>
      <TextInput label={"Long input"} />
    </div>
  );
};

export const InputWithChangeEvent = () => {
  const [textValue, setTextValue] = useState(0);
  const props = {
    onChange: function(el) {
      setTextValue(el.target.value);
    }
  };

  return (
    <div style={{ width: 300 }}>
      <TextInput label={"Input with onChange event"} props={props} />
      {textValue && `Value: ${textValue}`}
    </div>
  );
};
