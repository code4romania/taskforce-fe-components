import React from "react";
import "./../../styles.scss";

import { FilterModal } from "./filter-modal";

export default { title: "Filter Modal" };

export const usage = () => {
  return (
    <FilterModal
      isOpen
      placeholder="nume judet"
      values={[
        "Alba",
        "Arad",
        "Arges",
        "Bacau",
        "Bihor",
        "Bistrita - Nasaud",
        "Botoșani",
        "Brașov",
        "Brăila",
        "București",
        "etc"
      ]}
    />
  );
};
