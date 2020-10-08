import React from "react";
import { DataTableItem } from "./data-table-item";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "Data Table Item",
  decorators: [withKnobs]
};

const alignOptions = {
  "Default (left)": null,
  Right: "right",
  Center: "center"
};


const extraStyles = {
  minWidth: "250px"
};


export const dataTableItem = () => {
  return (
    <DataTableItem
      extraStyles={extraStyles}
      align={select("Alignment", alignOptions) || undefined}
    >
      With {select("Alignment", alignOptions) || "default (left)"} Alignment
    </DataTableItem>
  );
};
