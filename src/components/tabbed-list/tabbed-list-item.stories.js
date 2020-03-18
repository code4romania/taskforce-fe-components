import React from "react";
import "./../../styles.scss";
import { TabbedListItem } from "./tabbed-list-item";

export default { title: "TabbedListItem" };

export const Blue = () => (
  <TabbedListItem
    color={"blue"}
    onClick={() => {}}
    date={new Date()}
    resultText={"Rezultat Formular - esti in siguranta daca ramai in casa"}
    symptomText={"Simptome - nu prezinti simptome specifice COVID-19"}
  />
);
