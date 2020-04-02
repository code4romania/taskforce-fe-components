import React from "react";
import "../../styles.scss";
import { PersonalDataTable } from "./personal-data-table";

export default { title: "Personal Data" };

const personalData = {
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

export const personalDataTable = () => (
  <PersonalDataTable personalData={personalData} />
);
