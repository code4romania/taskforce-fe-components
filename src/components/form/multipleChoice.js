import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListHeader } from "../list-header/list-header";
import { List } from "../list/list";
import { ListItem } from "../list-item/list-item";
import { Input } from "../input/input";
import "./multipleChoice.scss";

function MultipleChoice({ question, onAnswer, currentResponse = [] }) {
  const [answers, setAnswers] = useState([]);
  const isSelected = option => {
    return currentResponse.includes(option.value);
  };

  const handleClick = option => {
    let newAnswers;
    if (answers.includes(option.value)) {
      newAnswers = answers.filter(item => item !== option.value);
    } else {
      newAnswers = [...answers, option.value];
    }
    setAnswers(newAnswers);
    onAnswer({
      questionId: question.questionId,
      value: newAnswers
    });
  };

  const onInputForOther = event => {
    let newValueForAnswers = [...answers];
    if (event.target.value !== "") {
      newValueForAnswers = [...answers, event.target.value];
    }

    onAnswer({
      questionId: question.questionId,
      value: newValueForAnswers
    });
  };

  const choiceFor = option => {
    if (option.type === "OTHER") {
      const size = currentResponse.length;
      let existingValue = "";
      if (size > 0 && isNaN(currentResponse[size - 1])) {
        existingValue = currentResponse[size - 1];
      }
      return (
        <div
          className={"__list-item other"}
          key={`answer_${question.questionId}_${option.value}`}
        >
          <Input
            usePlaceholder={false}
            onChange={onInputForOther}
            defaultValue={existingValue}
            label={option.label}
          />
        </div>
      );
    }

    return (
      <ListItem
        key={`answer_${question.questionId}_${option.value}`}
        title={option.label}
        active={isSelected(option)}
        onClick={() => handleClick(option)}
      />
    );
  };
  return (
    <div>
      <ListHeader title={question.questionText} />
      <div>
        <List>{question.options.map(option => choiceFor(option))}</List>
      </div>
    </div>
  );
}
MultipleChoice.propTypes = {
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
      "FINAL",
      "SINGLE_CHOICE",
      "MULTIPLE_CHOICE",
      "FREE_TEXT"
    ]),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    )
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.arrayOf(PropTypes.number)
};
export default MultipleChoice;
