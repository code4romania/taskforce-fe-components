import React from "react";
import "./../../styles.scss";
import { DataTableItem } from "../data-table-item/data-table-item";
import { DataTableRow } from "./data-table-row";

export default { title: "Data Table Row" };

export const usage = () => {
  return (
    <DataTableRow>
      <DataTableItem>Brasov</DataTableItem>
      <DataTableItem>65</DataTableItem>
      <DataTableItem>Diabet</DataTableItem>
      <DataTableItem>38.5</DataTableItem>
      <DataTableItem>Da</DataTableItem>
    </DataTableRow>
  );
};
