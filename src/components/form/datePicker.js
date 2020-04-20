import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListHeader } from "../list-header/list-header";
import ReactDatePicker from "react-datepicker";

import ro from "date-fns/locale/ro";

import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

export const DatePicker = ({
  withTime,
  question,
  onAnswer,
  currentResponse
}) => {
  const onChange = date => {
    setStartDate(date);
    const answer = {
      questionId: question.questionId,
      value: date
    };
    onAnswer(answer);
  };

  const getDate = () => {
    const date = new Date();
    date.setSeconds(0, 0);
    if (!withTime) {
      date.setHours(0, 0);
    }
    return date;
  };
  const [startDate, setStartDate] = useState(
    currentResponse ? currentResponse : getDate()
  );

  const getDatePicker = () => {
    if (withTime) {
      return <DateTimePicker startDate={startDate} onChange={onChange} />;
    } else {
      return <DateOnlyPicker startDate={startDate} onChange={onChange} />;
    }
  };

  return (
    <div className={"date-picker"}>
      <ListHeader title={question.questionText} />
      {getDatePicker()}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const DateOnlyPicker = ({ startDate, onChange }) => {
  return (
    <ReactDatePicker
      customInput={<CustomInput />}
      selected={startDate}
      onChange={onChange}
      locale={ro}
      dateFormat={"d MMMM yyyy"}
    />
  );
};

// eslint-disable-next-line react/prop-types
const DateTimePicker = ({ startDate, onChange }) => {
  return (
    <ReactDatePicker
      customInput={<CustomInput />}
      selected={startDate}
      onChange={onChange}
      locale={ro}
      dateFormat={"d MMMM yyyy HH:mm"}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Ora"
    />
  );
};

// eslint-disable-next-line react/prop-types
const CustomInput = ({ value, onClick }) => (
  <div className={"field"}>
    <input className="input is-medium" onClick={onClick} value={value} />
  </div>
);

DatePicker.propTypes = {
  withTime: PropTypes.bool,
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.number
};
