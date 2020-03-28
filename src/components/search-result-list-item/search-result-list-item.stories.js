import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import "./../../styles.scss";
import { SearchResultListItem } from "./search-result-list-item";

export default { title: "SearchResultListItem", decorators: [withKnobs] };

const label = "Colors";
const options = {
  Blue: "blue",
  Cyan: "cyan",
  None: null
};
const defaultValue = "null";

export const SimpleSearchResultListItem = () => {
  return (
    <SearchResultListItem
      color={select(label, options, defaultValue)}
      date="12 martie 2020 12:45"
      title="Apel de la Guvernul României. Ce trebuie să facă cetățenii
       când primesc mesaje pe Facebook și WhatsApp despre coronavirus"
      readMoreText="Citeste mai mult"
      readMoreLink="/"
    >
      <p>
        Guvernul României face apel la cetățenii români, prin intermediul unui
        clip video postat pe rețelele de socializare, să se informeze despre
        coronavirus doar din su.....
      </p>
    </SearchResultListItem>
  );
};
