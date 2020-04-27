import React from "react";
import PropTypes from "prop-types";

import { ListHeader } from "../list-header/list-header";
import { Input } from "../input/input";

function InputQuestion({ question, onAnswer, currentResponse }) {
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
      <Input
        usePlaceholder={true}
        onChange={onChange}
        label={""}
        defaultValue={currentResponse}
      />
    </div>
  );
}

InputQuestion.propTypes = {
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "INPUT"]),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    )
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.string
};

export default InputQuestion;
