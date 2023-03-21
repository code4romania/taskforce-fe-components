import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { SearchInput } from "./search-input";

export default { title: "Search Input", decorators: [withKnobs] };

export const searchInput = () => (
  <SearchInput
    hasIcon={boolean("Show Search Icon", false)}
    placeholder={text("Placeholder", "Caută informații aici")}
    value=""
    onValueChange={(value) => {
      alert("Value:", value);
    }}
    onClick={(searchValue) => {
      alert("Search clicked: " + searchValue);
    }}
    onEnter={(searchValue) => {
      alert("Search value: " + searchValue);
    }}
  />
);
