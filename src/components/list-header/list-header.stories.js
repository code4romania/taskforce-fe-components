import React from "react";

import { ListHeader } from "./list-header";

export default { title: "ListHeader" };

export const oneLineText = () => (
  <ListHeader title="Bifează care dintre situațiile de mai jos ți se potrivește cel mai bine" />
);

export const twoLinesText = () => (
  <ListHeader title="Ai vreunul dintre simptomele de mai jos? (bifează toate opțiunile care se aplică)" />
);
