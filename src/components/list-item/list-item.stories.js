import React, { useState } from "react";
import { ListItem } from "./list-item";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "ListItem",
  decorators: [withKnobs]
};

export const listItem = () => (
  <ListItem
    title={text("Title", "Simptome și tratament")}
    active={boolean("Active")}
    nonOption={boolean("Non-option")}
    hasNext={boolean("Has Next")}
  />
);

export const onClickWithValue = () => {
  const [data, setData] = useState({});
  const documentExample = {
    title: "Ce spune legea",
    doc_type: "STATIC_PAGE",
    doc_id: 101,
    active: true,
    display_order: 2,
    content: "Lorem Ipsum...",
    nodes: null,
    buttons: [
      {
        title: "Vezi toate legile",
        link: "https://test.com"
      }
    ]
  };

  return (
    <div style={{ minWidth: 300, maxWidth: 800 }}>
      <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(data)}</pre>
      <ListItem
        title={documentExample.title}
        onClick={setData}
        value={documentExample}
      />
    </div>
  );
};
