import React from "react";
import PropTypes from "prop-types";
import "./personal-data-table.styles.scss";

export const PersonalDataTable = ({ personalData }) => {
  return (
    <div className="container">
      <div className="personal-data">
        <table className="table personal-data-table">
          <tbody>
            <tr>
              <th>{personalData.age.label}</th>
              <td>{personalData.age.value}</td>
            </tr>
            <tr>
              <th>{personalData.gender.label}</th>
              <td>{personalData.gender.value}</td>
            </tr>
            <tr>
              <th>{personalData.smoking.label}</th>
              <td>{personalData.smoking.value ? "Da" : "Nu"}</td>
            </tr>
            <tr>
              <th>{personalData.comorbidities.label}</th>
              <td>{personalData.comorbidities.value.join(", ")}</td>
            </tr>
            <tr>
              <th>{personalData.inIsolation.label}</th>
              <td>{personalData.inIsolation.value ? "Da" : "Nu"}</td>
            </tr>
            <tr>
              <th>{personalData.othersInHousehold.label}</th>
              <td>{personalData.othersInHousehold ? "Da" : "Nu"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

PersonalDataTable.propTypes = {
  personalData: PropTypes.object.isRequired
};
