import React, { useState } from "react";
import "./../../styles.scss";
import { FormInput } from "./form-input";

export default { title: "FormInput" };

export const LargeInputWithDescription = () => {
  return (
    <div style={{ width: 500 }}>
      <FormInput
        label={"Long input"}
        description={"Long input with description"}
      />
    </div>
  );
};

export const PasswordInput = () => {
  return (
    <div style={{ width: 500 }}>
      <FormInput label={"Checkbox"} inputProps={{ type: "password" }} />
    </div>
  );
};

export const CheckboxInput = () => {
  return (
    <div style={{ width: 500 }}>
      <FormInput label={"Long input"} inputProps={{ type: "checkbox" }} />
    </div>
  );
};

export const InputWithChangeEvent = () => {
  const [textValue, setTextValue] = useState();
  const props = {
    onChange: function(el) {
      setTextValue(el.target.value);
    },
    className: "is-warning"
  };

  return (
    <div style={{ width: 300 }}>
      <FormInput label={"Input with onChange event"} inputProps={props} />
      {textValue && `Value: ${textValue}`}
    </div>
  );
};
