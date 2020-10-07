import React from "react";
import { LabelValueList } from "./label-value-list";

export default { title: "Label-value List" };

const objectData = {
  age: {
    label: "Vârsta",
    value: 23
  },
  gender: {
    label: "Sexul",
    value: "feminin"
  },
  name: { label: "Nume", value: "name" },
  smoking: { label: "Fumator/fumatoare", value: true },
  comorbidities: {
    label: "Alte afectiuni",
    value: ["diabet", "hipertensiune"]
  },
  inIsolation: { label: "In izolare", value: true },
  othersInHousehold: { label: "Alte persoane in casă", value: true }
};

const arrayData = [
  {
    label: "Vârsta",
    value: 23
  },
  {
    label: "Alte afectiuni",
    value: ["diabet", "hipertensiune"]
  },
  {
    label: "Fumator/fumatoare",
    value: false
  }
]

export const usingObject = () => (
  <LabelValueList data={objectData} />
);

export const usingArray = () => (
  <LabelValueList data={arrayData} />
);

