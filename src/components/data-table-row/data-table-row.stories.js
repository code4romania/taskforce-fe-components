import React from "react";
import "./../../styles.scss";
import { DataTableItem } from "../data-table-item/data-table-item";
import { DataTableRow } from "./data-table-row";

export default { title: "Data Table Row" };

export const usage = () => {
  return (
    <DataTableRow>
      <DataTableItem content={"Brasov"} />
      <DataTableItem content={"65"} />
      <DataTableItem content={"Diabet"} />
      <DataTableItem content={"38.5"} />
      <DataTableItem content={"Da"} />
    </DataTableRow>
  );
};
