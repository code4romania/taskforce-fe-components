import React from "react";
import PropTypes from "prop-types";
import ReactEcharts from "echarts-for-react";
import CaretSvg from "../../images/icons/caret-down.svg";
import "./test-results.styles.scss";
import { Label } from "../label/label";
import format from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";

export const TestResults = ({ personalData = {}, results = [] }) => {
  const xAxisData = results.map(item =>
    format(fromUnixTime(item.date), "dd.MM.yyyy / HH:mm")
  );
  const yAxisData = results.map(item => ({
    value: item.temperature,
    itemStyle: { color: item.value > 37 ? "blue" : "red" }
  }));

  const option = {
    xAxis: {
      type: "category",
      data: xAxisData
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: yAxisData,
        type: "bar",
        barWidth: "5",
        markLine: {
          lineStyle: { width: 0.5, color: "#8CA0B3", style: "dashed" },
          data: [{ name: "febra", yAxis: 37 }]
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="personal-data">
        <table className="table personal-data-table">
          <tbody>
            <tr>
              <th>Vârstă</th>
              <td>{personalData.age}</td>
            </tr>
            <tr>
              <th>Sexul</th>
              <td>{personalData.gender}</td>
            </tr>
            <tr>
              <th>Fumător/fumătoare</th>
              <td>{personalData.smoking ? "Da" : "Nu"}</td>
            </tr>
            <tr>
              <th>Afectiuni agravante</th>
              <td>{personalData.comorbidities.join(", ")}</td>
            </tr>
            <tr>
              <th>În izolare</th>
              <td>{personalData.inIsolation ? "Da" : "Nu"}</td>
            </tr>
            <tr>
              <th>Alte persoane in casă</th>
              <td>{personalData.othersInHousehold ? "Da" : "Nu"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={{ width: "80%", margin: "auto" }} />

      <div className={"section"}>
        <Label text="Monitorizare temperatura" />
        <ReactEcharts option={option} height={300} />
      </div>

      <div className={"section"}>
        <Label text="Istoric Formular" />
        <table className="table result-history-table">
          <thead>
            <tr>
              <th>Data/ora</th>
              <th>Peste 37 grade</th>
              <th>Durere in gat si/sau dificultate in a inghiti?</th>
              <th>Tuse intensa</th>
              <th>Dificultate in a respira</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {results.map(item => (
              <tr key={item.id}>
                <td>{format(fromUnixTime(item.date), "dd.MM.yyyy / HH:mm")}</td>
                <td>{item.temperature > 37 ? "Da" : "Nu"}</td>
                <td>{item.soreThroat ? "Da" : "Nu"}</td>
                <td>{item.cough ? "Da" : "Nu"}</td>
                <td>{item.shortnessBreath ? "Da" : "Nu"}</td>
                <td>
                  {/* TODO action for click? */}
                  <CaretSvg />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TestResults.defaultProps = {
  active: false,
  hasNext: false
};

TestResults.propTypes = {
  personalData: PropTypes.object.isRequired,
  results: PropTypes.array
};
