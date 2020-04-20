import React, { forwardRef, useState } from "react";
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
  const [startDate, setStartDate] = useState(
    currentResponse ? currentResponse : null
  );

  const onChange = date => {
    setStartDate(date);
    const answer = {
      questionId: question.questionId,
      value: date
    };
    onAnswer(answer);
  };

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

const DateOnlyPicker = ({ startDate, onChange }) => {
  return (
    <ReactDatePicker
      customInput={<CustomInput />}
      placeholderText={"Introdu data"}
      selected={startDate}
      onChange={onChange}
      locale={ro}
      dateFormat={"d MMMM yyyy"}
    />
  );
};

const DateTimePicker = ({ startDate, onChange }) => {
  return (
    <ReactDatePicker
      customInput={<CustomInput />}
      placeholderText={"Introdu data si ora"}
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
    questionText: PropTypes.string.isRequired
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.object
};

DateTimePicker.propTypes = {
  startDate: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

DateOnlyPicker.propTypes = {
  startDate: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};
