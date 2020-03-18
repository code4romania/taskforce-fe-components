import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";
import "./tabbed-list.scss";
import CaretSvg from "../../icons/caret.svg";

export const TabbedListItem = ({
  color,
  date,
  resultText,
  symptomText,
  onClick
}) => {
  return (
    <div className={"tli-container"}>
      <div className={"tli-date"}>{format(date, "dd.MM.yyyy")}</div>
      <div className={"tli-text-wrapper"} onClick={onClick}>
        <div className={"tli-text"} onClick={onClick}>
          <div className={"tli-result"}>{resultText}</div>
          <div className={"tli-symptom"}>{symptomText}</div>
        </div>
        <div className={"tli-icon"} style={{ backgroundColor: color }}>
          <CaretSvg />
        </div>
      </div>
    </div>
  );
};

TabbedListItem.propTypes = {
  color: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  resultText: PropTypes.string,
  symptomText: PropTypes.string,
  onClick: PropTypes.func
};
