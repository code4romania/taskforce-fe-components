import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListHeader } from "../list-header/list-header";
import ReactDatePicker from "react-datepicker";

import ro from "date-fns/locale/ro";

import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

export const DatePicker = ({ question, onAnswer, currentResponse }) => {
  const onChange = date => {
    setStartDate(date);
    const answer = {
      questionId: question.questionId,
      value: date
    };
    onAnswer(answer);
  };

  const [startDate, setStartDate] = useState(
    currentResponse ? currentResponse : new Date()
  );

  // eslint-disable-next-line react/prop-types
  const CustomInput = ({ value, onClick }) => (
    <div className={"field"}>
      <input className="input is-medium" onClick={onClick} value={value} />
    </div>
  );

  return (
    <div className={"date-picker"}>
      <ListHeader title={question.questionText} />
      <ReactDatePicker
        customInput={<CustomInput />}
        selected={startDate}
        onChange={onChange}
        locale={ro}
        dateFormat={"d MMMM yyyy"}
      />
    </div>
  );
};

DatePicker.propTypes = {
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.number
};
