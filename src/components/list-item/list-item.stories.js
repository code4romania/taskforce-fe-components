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

export const withNonOptionState = () => {
  return (
    <div style={{ minWidth: 300, maxWidth: 750 }}>
      <ListItem
        nonOption={true}
        title={`Nu manifești niciun simptom de infecție. Te rugăm să rămâi în siguranță la
          domiciliu și să limitezi la maximum orice ieșire nerelevantă dacă ai posibilitatea.
          Dacă nu poți lucra de acasă și trebuie să ieși din casă atunci consultă secțiunea de
          sfaturi și bune practici pentru cei care nu pot sta în auto-izolare de pe acest website.`}
      />
    </div>
  );
};

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
