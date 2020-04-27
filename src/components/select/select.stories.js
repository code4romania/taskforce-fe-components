import React, { useState } from "react";
import "./../../styles.scss";
import { Select } from "./select";

export default { title: "Select" };

export const SelectWithChangeEvent = () => {
  let options = [
    { text: "Option 1", value: "value1", disabled: true },
    { text: "Option 2", value: "value2" },
    { text: "Option 3", value: "value3" }
  ];
  const [textValue, setTextValue] = useState("value3");
  const props = {
    onChange: function(el) {
      setTextValue(el.target.value);
    }
  };

  return (
    <div style={{ width: 300 }}>
      <Select
        label={"Select with onChange event"}
        selectProps={props}
        defaultValue={options[2].value}
        options={options}
      />
      {textValue && `Selected: ${textValue}`}
    </div>
  );
};

export const DependentSelects = () => {
  let options = [
    { text: "Option 1", value: "value1" },
    { text: "Option 2", value: "value2" },
    { text: "Option 3", value: "value3" }
  ];
  const generateOptions = seed => {
    let generatedOptions = [];
    for (let index = 0; index < 3; index++) {
      generatedOptions.push({
        value: index,
        text: `child option ${index} (${seed})`
      });
    }
    return generatedOptions;
  };
  const [childOptions, setChildOptions] = useState(generateOptions("value1"));

  const props = {
    onChange: function(el) {
      setChildOptions(generateOptions(el.target.value));
    }
  };
  return (
    <div style={{ width: 300 }}>
      <Select
        label={"Master select"}
        description={"These are the master options"}
        selectProps={props}
        options={options}
      />
      <Select
        label={"Child select"}
        description={"These are the child options"}
        options={childOptions}
      />
    </div>
  );
};
