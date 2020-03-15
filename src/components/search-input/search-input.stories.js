import React from "react";
import "./../../styles.scss";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { SearchInput } from "./search-input";

export default { title: "Search Input", decorators: [withKnobs] };

export const searchInput = () => <SearchInput></SearchInput>;
export const icon = () => (
  <SearchInput hasIcon={boolean("Has search", true)}></SearchInput>
);
export const placeholder = () => (
  <SearchInput
    placeholder={text("Placeholder", "caută informații aici")}
  ></SearchInput>
);

export const onValueChanged = () => (
  <SearchInput
    onValueChange={event => {
      alert(event.currentTarget.value);
    }}
  ></SearchInput>
);

export const value = () => (
  <SearchInput value={text("Value", "Code4Romania")}></SearchInput>
);
