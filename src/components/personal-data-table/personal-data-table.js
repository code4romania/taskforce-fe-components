import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { LabelValueList } from "../label-value-list/label-value-list";

export const PersonalDataTable = ({ personalData }) => {
  const dataClone = Object.assign(personalData);
  delete dataClone.name;

  useEffect(
    function warnOnMount() {
      console.warn("PersonalDataTable is deprecated. Please use the more generic LabelValueList component.")
    }, []
  )

  return (
    <LabelValueList data={personalData} />
  );
};

PersonalDataTable.propTypes = {
  personalData: PropTypes.object.isRequired
};
