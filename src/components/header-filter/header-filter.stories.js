import React from "react";
import "./../../styles.scss";

import { HeaderFilter } from "./header-filter";
import { FilterModal } from "../filter-modal/filter-modal";

export default { title: "Header Filter" };

export const simpleFilter = () => {
  return <HeaderFilter name="Judet" onFilterIconClick={() => {}} />;
};

export const withFilterModal = () => {
  return (
    <div>
      <HeaderFilter
        name="Judet"
        onFilterIconClick={() => {
          alert("Open modal");
        }}
      />
      <FilterModal
        placeholder="nume judet"
        isOpen
        selectValue={value => alert("Select value " + value)}
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
    </div>
  );
};
