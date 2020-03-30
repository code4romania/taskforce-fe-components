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
        <DataTableItem>Brasov</DataTableItem>
        <DataTableItem>65</DataTableItem>
        <DataTableItem>Diabet</DataTableItem>
        <DataTableItem>38.5</DataTableItem>
        <DataTableItem>Da</DataTableItem>
      </DataTableRow>
      <DataTableRow>
        <DataTableItem>Calarasi</DataTableItem>
        <DataTableItem>54</DataTableItem>
        <DataTableItem>Hipertensiune</DataTableItem>
        <DataTableItem>39</DataTableItem>
        <DataTableItem>Nu</DataTableItem>
      </DataTableRow>
    </DataTable>
  );
};
