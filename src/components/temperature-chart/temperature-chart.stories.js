import React from "react";
import "../../styles.scss";
import { TemperatureChart } from "./temperature-chart";

export default { title: "Temperature Chart" };

const results = [
  {
    id: "134",
    date: "1585409321",
    temperature: 36.6
  },
  {
    id: "136",
    date: "1585409421",
    temperature: 36
  },
  {
    id: "139",
    date: "1585409521",
    temperature: 38.6
  },
  {
    id: "140",
    date: "1585409621",
    temperature: 38.6
  }
];

export const temperatureChart = () => <TemperatureChart results={results} />;

export const withTitle = () => (
  <TemperatureChart results={results} title={"Monitorizare Temperatura"} />
);
