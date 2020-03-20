import React, { useState } from "react";
import "./../../styles.scss";
import { ListItem } from "./list-item";

export default { title: "ListItem" };

export const withInactiveState = () => (
  <ListItem title={"Simptome și tratament"} />
);

export const withActiveState = () => (
  <ListItem active={true} title={"Simptome și tratament"} />
);

export const withActiveStateAndArrow = () => (
  <ListItem active={true} hasNext={true} title={"Simptome și tratament"} />
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
