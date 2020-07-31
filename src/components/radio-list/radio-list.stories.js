import React, { useState } from "react";
import { RadioList } from "./radio-list";

export default { title: "RadioList" };

export const HorizontalRadioListWithChangeEvent = () => {
  let options = [
    { key: "Key1", value: "Option 1" },
    { key: "Key2", value: "Option 2" },
    { key: "Key3", value: "Option 3" }
  ];
  const [textValue, setTextValue] = useState();
  const onChange = (el) => {
    setTextValue(el);
  };

  return (
    <div>
      <RadioList
        label={"Radio list with onChange event"}
        description={"radio list description"}
        type="horizontal"
        options={options}
        onChange={onChange}
      />
      {textValue && `Selected: ${textValue}`}
    </div>
  );
};

export const VerticalRadioListWithChangeEvent = () => {
  let options = [
    { key: "Key1", value: "Option 1", disabled: true },
    { key: "Key2", value: "Option 2" },
    { key: "Key3", value: "Option 3" }
  ];
  const [textValue, setTextValue] = useState();
  const onChange = (el) => {
    setTextValue(el);
  };

  return (
    <div>
      <RadioList
        label={"Radio list with onChange event"}
        description={"radio list description"}
        type="vertical"
        options={options}
        onChange={onChange}
      />
      {textValue && `Selected: ${textValue}`}
    </div>
  );
};
