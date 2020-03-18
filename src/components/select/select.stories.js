import React, { useState } from "react";
import "./../../styles.scss";
import { Select } from "./select";

export default { title: "Select" };

export const SelectWithChangeEvent = () => {
  let options = [
    { key: "Key1", value: "Option 1" },
    { key: "Key2", value: "Option 2" },
    { key: "Key3", value: "Option 3" }
  ];
  const [textValue, setTextValue] = useState("Option 1");
  const props = {
    onChange: function(el) {
      setTextValue(el.target.value);
    }
  };

  return (
    <div style={{ width: 300 }}>
      <Select
        label={"Select with onChange event"}
        props={props}
        options={options}
      />
      {textValue && `Selected: ${textValue}`}
    </div>
  );
};

export const DependentSelects = () => {
  let options = [
    { key: "Key1", value: "Value 1" },
    { key: "Key2", value: "Value 2" },
    { key: "Key3", value: "Value 3" }
  ];
  const generateOptions = seed => {
    let options = [];
    for (let index = 0; index < 3; index++) {
      options.push({
        key: index,
        value: `child option ${index} (${seed})`
      });
    }
    return options;
  };
  const [childOptions, setChildOptions] = useState(generateOptions("Value 1"));

  const props = {
    onChange: function(el) {
      setChildOptions(generateOptions(el.target.value));
    }
  };
  // setChildOptions(generateOptions("Value 1"));
  return (
    <div style={{ width: 300 }}>
      <Select
        label={"Master select"}
        description={"These are the master options"}
        props={props}
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
