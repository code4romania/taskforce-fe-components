import React from "react";
import PropTypes from "prop-types";
import { ListHeader } from "../list-header/list-header";

export const CustomQuestion = ({ question, onAnswer }) => {
  const onChange = event => {
    const answer = {
      questionId: question.questionId,
      value: event.target.value
    };
    onAnswer(answer);
  };

  return (
    <div>
      <ListHeader title={question.questionText} />
      <p>Here is a custom component: </p>
      <input onChange={onChange} type="date" />
    </div>
  );
};

CustomQuestion.propTypes = {
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired
  }),
  onAnswer: PropTypes.func
};
