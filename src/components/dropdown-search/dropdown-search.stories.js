import React, { useState } from "react";
import { DropdownSearch } from "./dropdown-search";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Dropdown Search",
  decorators: [withKnobs]
};

const options = [
  { value: 1, label: "Alba" },
  { value: 2, label: "Arad" },
  { value: 3, label: "Bucuresti" },
  { value: 4, label: "Giurgiu" },
  { value: 5, label: "Ialomita" },
  { value: 6, label: "Ilfov" },
  { value: 7, label: "Constanta" }
];

export const dropdownSearch = () => {
  const showSearchInput = boolean("Show Search Input", false);

  return (
    <DropdownSearch
      options={options}
      title={text("Title", "Județ")}
      isAlwaysOpen={boolean("Always Open", false)}
      showSearchInput={showSearchInput}
      searchPlaceholder={showSearchInput && text("Search Placeholder", "Type to search in the list below")}
      onSelect={(selected) => {
        alert(JSON.stringify(selected));
      }}
    />
  );
};

const countiesWithCities = {
  Alba: ["Somewhere in Alba", "Somewhere else in Alba"],
  Prahova: ["Somewhere in Prahova", "Somewhere else in Prahova"],
  Tulcea: ["Somewhere in Tulcea", "Somewhere else in Tulcea"]
};

export const DropdownsDependingOnEachOther = () => {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const counties = Object.keys(countiesWithCities).map((county) => ({
    label: county,
    value: county
  }));

  const citiesIn = (county) =>
    county
      ? countiesWithCities[county].map((city) => ({ label: city, value: city }))
      : [];
  return (
    <div>
      <DropdownSearch
        title={"Counties"}
        options={counties}
        onSelect={(option) => setSelectedCounty(option.value)}
        showSearchInput={true}
      />
      <DropdownSearch
        title={"Cities"}
        options={citiesIn(selectedCounty)}
        onSelect={() => {}}
        showSearchInput={true}
      />
    </div>
  );
};
