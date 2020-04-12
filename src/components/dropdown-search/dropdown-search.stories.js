import { DropdownSearch } from "./dropdown-search";
import React from "react";

export default { title: "Dropdown Search" };

const values = [
  "Alba",
  "Arad",
  "Bucuresti",
  "Giurgiu",
  "Ialomita",
  "Ilfov",
  "Constanta"
];

export const DropdownSearchClosed = () => {
  return <DropdownSearch title={"Judet"} values={values} onSelect={() => {}} />;
};

export const DropdownSearchAlwaysOpen = () => {
  return <DropdownSearch title={"Judet"} values={values} isAlwaysOpen={true} />;
};

export const DropdownSearchWithAlert = () => {
  return (
    <DropdownSearch
      title={"Judet"}
      values={values}
      onSelect={selected => {
        alert(selected);
      }}
    />
  );
};

export const DropdownWithoutSearchInput = () => {
  return (
    <DropdownSearch title={"Judet"} values={values} showSearchInput={false} />
  );
};
