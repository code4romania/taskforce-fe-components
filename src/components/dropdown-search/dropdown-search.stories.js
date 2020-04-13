import React from "react";
import { DropdownSearch } from "./dropdown-search";

export default { title: "Dropdown Search" };

const title = "Judet";

const options = [
  { value: 1, label: "Alba" },
  { value: 2, label: "Arad" },
  { value: 3, label: "Bucuresti" },
  { value: 4, label: "Giurgiu" },
  { value: 5, label: "Ialomita" },
  { value: 6, label: "Ilfov" },
  { value: 7, label: "Constanta" }
];

export const DropdownSearchClosed = () => {
  return (
    <DropdownSearch title={"Judet"} options={options} onSelect={() => {}} />
  );
};

export const DropdownSearchAlwaysOpen = () => {
  return (
    <DropdownSearch
      title={title}
      options={options}
      onSelect={() => {}}
      isAlwaysOpen={true}
    />
  );
};

export const DropdownSearchWithAlert = () => {
  return (
    <DropdownSearch
      title={title}
      options={options}
      onSelect={selected => {
        alert(JSON.stringify(selected));
      }}
    />
  );
};

export const DropdownWithSearchPlaceholder = () => {
  return (
    <DropdownSearch
      title={title}
      options={options}
      onSelect={() => {}}
      searchPlaceholder={"Type to search in the list below"}
    />
  );
};

export const DropdownWithoutSearchInput = () => {
  return (
    <DropdownSearch
      title={title}
      options={options}
      onSelect={() => {}}
      showSearchInput={false}
    />
  );
};
