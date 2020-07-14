import React from "react";
import "../../styles.scss";
import { TemperatureChart } from "./temperature-chart";

export default { title: "Temperature Chart" };

const results = [
  { date: 1588710285, temperature: 35 },
  { date: 1588710285, temperature: 36 },
  { date: 1588710285, temperature: 38 },
  { date: 1588710285, temperature: 39 },
  { date: 1588710285, temperature: 36.6 },
  { date: 1588709754, temperature: 38.2 },
  { date: 1588708675, temperature: 38 },
  { date: 1588277085, temperature: 37 },
  { date: 1588276813, temperature: 36 },
  { date: 1588017389, temperature: 38 }
];

export const temperatureChart = () => <TemperatureChart results={results} />;

export const withTitle = () => (
  <TemperatureChart results={results} title={"Monitorizare Temperatura"} />
);
