import React from "react";
import { DropdownSearch } from "./dropdown-search";

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

export const DropdownWithSearchPlaceholder = () => {
  return (
    <DropdownSearch
      title={"Judet"}
      values={values}
      searchPlaceholder={"Type to search in the list below"}
    />
  );
};

export const DropdownWithoutSearchInput = () => {
  return (
    <DropdownSearch title={"Judet"} values={values} showSearchInput={false} />
  );
};
