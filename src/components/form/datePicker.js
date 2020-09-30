import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import { ListHeader } from "../list-header/list-header";

import ro from "date-fns/locale/ro";
import { setHours, setMinutes, isSameDay } from "date-fns";

import "./datePicker.scss";

export const DatePicker = ({
  withTime,
  question,
  onAnswer,
  currentResponse,
  onlyFutureTime
}) => {
  const [startDate, setStartDate] = useState(
    currentResponse ? currentResponse : null
  );

  const maxDate = !question.allowFuture ? new Date() : null;

  const onChange = (date) => {
    setStartDate(date);
    const answer = {
      questionId: question.questionId,
      value: date
    };
    onAnswer(answer);
  };

  const getDatePicker = () => {
    if (withTime) {
      return (
        <DateTimePicker
          startDate={startDate}
          maxDate={maxDate}
          onChange={onChange}
          onlyFutureTime={onlyFutureTime}
        />
      );
    } else {
      return (
        <DateOnlyPicker
          startDate={startDate}
          maxDate={maxDate}
          onChange={onChange}
          onlyFutureTime={onlyFutureTime}
        />
      );
    }
  };

  return (
    <div className={"date-picker"}>
      <ListHeader title={question.questionText} />
      {getDatePicker()}
    </div>
  );
};

const DateOnlyPicker = ({ startDate, maxDate, onChange, onlyFutureTime }) => {
  return (
    <ReactDatePicker
      customInput={<CustomInput />}
      placeholderText={"Introdu data"}
      selected={startDate}
      onChange={onChange}
      locale={ro}
      dateFormat={"d MMMM yyyy"}
      maxDate={maxDate}
      minDate={onlyFutureTime ? new Date() : null}
    />
  );
};

const DateTimePicker = ({ startDate, maxDate, onChange, onlyFutureTime }) => {
  const computeMinTime = (date) => {
    if (!maxDate) {
      return;
    }

    if (isSameDay(date, maxDate)) {
      return setHours(setMinutes(new Date(), 0), 0);
    }
  };

  const computeMaxTime = (date) => {
    if (!maxDate) {
      return;
    }

    if (isSameDay(date, maxDate)) {
      return maxDate;
    }
  };

  const [minTime, setMinTime] = useState(
    computeMinTime(startDate || new Date())
  );
  const [maxTime, setMaxTime] = useState(
    computeMaxTime(startDate || new Date())
  );

  const handleDatetimeChange = (date) => {
    setMinTime(computeMinTime(date));
    setMaxTime(computeMaxTime(date));
    onChange(date);
  };

  return (
    <ReactDatePicker
      customInput={<CustomInput />}
      placeholderText={"Introdu data si ora"}
      selected={startDate}
      onChange={handleDatetimeChange}
      locale={ro}
      dateFormat={"d MMMM yyyy HH:mm"}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Ora"
      maxDate={maxDate}
      minTime={minTime}
      maxTime={maxTime}
      minDate={onlyFutureTime ? new Date() : null}
    />
  );
};

// this fixes browser warning about passing ref to a functional component
// the cause of the warning is that the react-datepicker is passing a ref to the custom input

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ value, onClick, placeholder, onChange }, ref) => {
    return (
      <input
        ref={ref}
        className="input is-medium"
        onClick={onClick}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

DatePicker.propTypes = {
  withTime: PropTypes.bool,
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    allowFuture: PropTypes.bool
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.object,
  onlyFutureTime: PropTypes.bool
};

DateTimePicker.propTypes = {
  startDate: PropTypes.object,
  maxDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  onlyFutureTime: PropTypes.bool
};

DateOnlyPicker.propTypes = {
  startDate: PropTypes.object,
  maxDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  onlyFutureTime: PropTypes.bool
};
