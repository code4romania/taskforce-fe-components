import React from "react";
import "../../styles.scss";
import { TestResults } from "./test-results";

export default { title: "Test Results" };

const personalData = {
  age: 23,
  gender: 21,
  name: "Andreea Popa",
  smoking: true,
  comorbidities: ["diabet", "hipertensiune"],
  inIsolation: true,
  othersInHousehold: true
};

const results = [
  {
    id: "134",
    date: "1585409321",
    temperature: 38.6,
    soreThroat: true,
    cough: true,
    shortnessBreath: true
  },
  {
    id: "136",
    date: "1585409421",
    temperature: 38.6,
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

export const base = () => (
  <TestResults personalData={personalData} results={results} />
);
