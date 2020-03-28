import React from "react";
import "./../../styles.scss";
import { FilteredList } from "./filtered-list";

export default { title: "FilteredList" };

const config = {
  filter: {
    onSelect: value => console.log("Selected: ", value),
    label: "View for:",
    placeholder: "Select a person",
    options: [
      {
        label: "John Doe",
        value: "John Doe"
      },
      {
        label: "Bob",
        value: "Bob"
      }
    ]
  },
  listItems: [
    {
      data: { somedata: "123" },
      clickHandler: data => console.log(data),
      styles: {
        iconSectionColor: "blue"
      },
      label: "28.03.2020",
      rows: [
        {
          value: "Rezultat formular - esti in siguratna daca ramai acasa"
        },
        {
          value: "Simptome - nu prezinti simptome specifice COVID-19"
        }
      ]
    },
    {
      data: { somedata: "234" },
      clickHandler: data => console.log(data),
      styles: {
        iconSectionColor: "red"
      },
      label: "28.03.2020",
      rows: [
        {
          value: "Rezultat formular - esti in siguratna daca ramai acasa"
        },
        {
          value: "Simptome - nu prezinti simptome specifice COVID-19"
        }
      ]
    }
  ]
};

export const example = () => (
  <div style={{ width: "800px" }}>
    <FilteredList config={config}>
      <button className="button is-warning" style={{ marginBottom: "10px" }}>
        Complete form
      </button>
    </FilteredList>
  </div>
);
