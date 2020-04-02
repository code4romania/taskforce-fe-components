import React from "react";
import "../../styles.scss";
import { CompletedFormTable } from "./completed-form-table";

export default { title: "Completed Forms" };

const results = [
  {
    id: "134",
    date: "1585409321",
    temperature: 36.6,
    soreThroat: true,
    cough: true,
    shortnessBreath: true
  },
  {
    id: "136",
    date: "1585409421",
    temperature: 36,
    soreThroat: true,
    cough: true,
    shortnessBreath: true
  },
  {
    id: "139",
    date: "1585409521",
    temperature: 38.6,
    soreThroat: true,
    cough: true,
    shortnessBreath: true
  },
  {
    id: "140",
    date: "1585409621",
    temperature: 38.6,
    soreThroat: true,
    cough: true,
    shortnessBreath: true
  }
];

const headers = [
  "Data/ora",
  "Peste 37 grade",
  "Durere in gat si/sau dificultate in a inghiti?",
  "Tuse intensa",
  "Dificultate in a respira",
  ""
];

export const completedForms = () => (
  <CompletedFormTable headers={headers} dataRows={results} />
);
