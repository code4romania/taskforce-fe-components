import React from "react";
import PropTypes from "prop-types";
import "./form.scss";
import { ListHeader } from "../list-header/list-header";
import { List } from "../list/list";
import { ListItem } from "../list-item/list-item";

function SingleChoice({ question, onAnswer, currentResponse }) {
  const isSelected = option => {
    return currentResponse === option.value;
  };

  return (
    <div>
      <ListHeader title={question.questionText} />
      <div>
        <List>
          {question.options.map(option => (
            <ListItem
              key={`answer_${question.questionId}_${option.value}`}
              title={option.label}
              active={isSelected(option)}
              onClick={() =>
                onAnswer({
                  questionId: question.questionId,
                  value: option.value
                })
              }
            />
          ))}
        </List>
      </div>
    </div>
  );
}

SingleChoice.propTypes = {
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE"]),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    )
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.number
};

export default SingleChoice;
