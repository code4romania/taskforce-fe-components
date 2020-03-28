import React from "react";
import "./../../styles.scss";
import { DataTableItem } from "./data-table-item";

export default { title: "Data Table Item" };

const extraStyles = {
  minWidth: "250px"
};

export const withDefaultAlignment = () => {
  return (
    <DataTableItem
      content={"With Default Alignment"}
      extraStyles={extraStyles}
    />
  );
};

export const withRightAlignment = () => {
  return (
    <DataTableItem
      content={"With Right Alignment"}
      extraStyles={extraStyles}
      align="right"
    />
  );
};

export const withCenterAlignment = () => {
  return (
    <DataTableItem
      content={"Centered Content"}
      extraStyles={extraStyles}
      align="center"
    />
  );
};
