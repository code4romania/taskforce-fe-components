import React from "react";
import "./../../styles.scss";
import { DataTableItem } from "./data-table-item";

export default { title: "Data Table Item" };

const extraStyles = {
  minWidth: "250px"
};

export const withDefaultAlignment = () => {
  return (
    <DataTableItem extraStyles={extraStyles}>
      With Default Alignment
    </DataTableItem>
  );
};

export const withRightAlignment = () => {
  return (
    <DataTableItem extraStyles={extraStyles} align="right">
      With Right Alignment
    </DataTableItem>
  );
};

export const withCenterAlignment = () => {
  return (
    <DataTableItem extraStyles={extraStyles} align="center">
      Centered Content
    </DataTableItem>
  );
};
