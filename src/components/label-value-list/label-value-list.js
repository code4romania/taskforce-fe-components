import React from "react";
import PropTypes from "prop-types";
import "./label-value-list.scss";

function renderValue(value) {
  if (typeof value === "boolean") {
    return value ? "Da" : "Nu";
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return value;
}

export const LabelValueList = ({ data }) => {
  let rows = data;

  if (!Array.isArray(data)) {
    rows = Object.values(data);
  }

  return (
    <div className="container">
      <div className="label-value-list">
        <table className="table">
          <tbody>
            { rows.map((row, index) => (
              <tr key={index}>
                <th>{row.label}</th>
                <td>{renderValue(row.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

LabelValueList.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};
