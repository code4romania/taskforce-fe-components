import React from "react";
import "./../../styles.scss";
import { DataTable } from "./data-table";
import { DataTableItem } from "../data-table-item/data-table-item";
import { DataTableRow } from "../data-table-row/data-table-row";

export default { title: "Data Table" };

export const usage = () => {
  return (
    <DataTable>
      <DataTableRow>
        <DataTableItem content={"Brasov"} />
        <DataTableItem content={"65"} />
        <DataTableItem content={"Diabet"} />
        <DataTableItem content={"38.5"} />
        <DataTableItem content={"Da"} />
      </DataTableRow>
      <DataTableRow>
        <DataTableItem content={"Calarasi"} />
        <DataTableItem content={"54"} />
        <DataTableItem content={"Hipertensiune"} />
        <DataTableItem content={"39"} />
        <DataTableItem content={"Nu"} />
      </DataTableRow>
    </DataTable>
  );
};
