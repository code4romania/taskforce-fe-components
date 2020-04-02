import React from "react";
import PropTypes from "prop-types";
import CaretSvg from "../../images/icons/caret-down.svg";
import "./completed-form-table.styles.scss";
import { Label } from "../label/label";
import format from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";

export const CompletedFormTable = ({ title, headers, dataRows = [] }) => {
  return (
    <div className="container">
      {title && <Label text={title} />}
      <table className="table result-history-table">
        <thead>
          <tr>
            {headers.length && headers.map(item => <th key={item}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {dataRows.map(item => (
            <tr key={item.id}>
              <td>{format(fromUnixTime(item.date), "dd.MM.yyyy / HH:mm")}</td>
              <td>{item.temperature > 37 ? "Da" : "Nu"}</td>
              <td>{item.soreThroat ? "Da" : "Nu"}</td>
              <td>{item.cough ? "Da" : "Nu"}</td>
              <td>{item.shortnessBreath ? "Da" : "Nu"}</td>
              <td onClick={item.onClick}>
                <CaretSvg />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CompletedFormTable.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.array.isRequired,
  dataRows: PropTypes.array.isRequired
};
