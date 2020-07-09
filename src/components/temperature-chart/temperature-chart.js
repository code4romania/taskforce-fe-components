import React from "react";
import PropTypes from "prop-types";
import ReactEcharts from "echarts-for-react";
import { Label } from "../label/label";
import format from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";

export const TemperatureChart = ({ results = [], title }) => {
  // NOTE: Because of the way the Axes are displayed, we need
  // to reverse the items order to show the original order
  const itemsListReversed = results.reverse();
  const yAxisData = itemsListReversed.map((item) =>
    format(fromUnixTime(item.date), "dd.MM.yyyy / HH:mm")
  );
  const xAxisData = itemsListReversed.map((item) => ({
    value: item.temperature,
    itemStyle: { color: item.temperature > 37 ? "red" : "blue" },
  }));

  const option = {
    grid: {
      containLabel: true,
    },
    yAxis: {
      type: "category",
      data: yAxisData,
      axisLine: { show: false, lineStyle: { color: "#fff" } },
      axisLabel: {
        textStyle: { color: "#000" },
      },
      splitLine: {
        show: false,
      },
    },
    xAxis: {
      type: "value",
      axisLine: { show: true, lineStyle: { color: "#B0BEC5" } },
      axisLabel: { show: false },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: xAxisData,
        type: "bar",
        barWidth: "10",
        markLine: {
          lineStyle: { width: 0.5, color: "#8CA0B3", style: "dashed" },
          data: [{ name: "hightemp", xAxis: 37 }],
          symbol: ["none", "none"],
        },
      },
    ],
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
  results: PropTypes.array.isRequired,
};
