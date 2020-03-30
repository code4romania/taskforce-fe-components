import React from "react";
import PropTypes from "prop-types";

import { ListHeader } from "../list-header/list-header";
import { Input } from "../input/input";

function FreeText({ question, onAnswer }) {
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
      <Input usePlaceholder={true} onChange={onChange} label={""} />
    </div>
  );
}

FreeText.propTypes = {
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "FREE_TEXT"]),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    )
  }),
  onAnswer: PropTypes.func
};

export default FreeText;
