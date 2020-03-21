import React from "react";
import "./../../styles.scss";
import { FlowingList } from "./flowing-list";
import { ListItem } from "../list-item/list-item";

export default { title: "FlowingList" };

export const flowingList = () => (
  <div>
    <FlowingList>
      <ListItem title={"Simptome și tratament"} />
      <ListItem title={"Completeaza formularul de evaluare"} />
      <ListItem title={"Simptome și tratament"} />
      <ListItem title={"Simptome și tratament"} />
      <ListItem title={"Simptome și tratament"} />
    </FlowingList>
  </div>
);
