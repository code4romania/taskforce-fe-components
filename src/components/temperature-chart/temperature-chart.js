import React from "react";
import PropTypes from "prop-types";
import ReactEcharts from "echarts-for-react";
import { Label } from "../label/label";
import format from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";

export const TemperatureChart = ({ results = [], title }) => {
  const xAxisData = results.map(item =>
    format(fromUnixTime(item.date), "dd.MM.yyyy / HH:mm")
  );
  const yAxisData = results.map(item => ({
    value: item.temperature,
    itemStyle: { color: item.temperature > 37 ? "red" : "blue" }
  }));

  const option = {
    xAxis: {
      type: "category",
      data: xAxisData,
      axisLine: { show: false, lineStyle: { color: "#fff" } },
      axisLabel: {
        textStyle: { color: "#000" }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      axisLine: { show: true, lineStyle: { color: "#B0BEC5" } },
      axisLabel: { show: false },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        data: yAxisData,
        type: "bar",
        barWidth: "10",
        markLine: {
          lineStyle: { width: 0.5, color: "#8CA0B3", style: "dashed" },
          data: [{ name: "hightemp", yAxis: 37 }],
          symbol: ["none", "none"]
        }
      }
    ]
  };

  return (
    <div className="container">
      {title && <Label text={title} />}
      <ReactEcharts option={option} height={300} />
    </div>
  );
};

TemperatureChart.propTypes = {
  title: PropTypes.string,
  results: PropTypes.array.isRequired
};
