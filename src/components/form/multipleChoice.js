import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListHeader } from "../list-header/list-header";
import { List } from "../list/list";
import { ListItem } from "../list-item/list-item";
import { Input } from "../input/input";
import "./multipleChoice.scss";

function MultipleChoice({ question, onAnswer, currentResponse = {} }) {
  const [answers, setAnswers] = useState(currentResponse);
  const isSelected = (option) => {
    return answers[option.value];
  };

  const handleClick = (option) => {
    if (answers[option.value]) {
      delete answers[option.value];
    } else {
      answers[option.value] = true;
    }
    setAnswers(answers);
    onAnswer({
      questionId: question.questionId,
      value: answers
    });
  };

  const onInputForOther = (optionId, optionValue) => {
    answers[optionId] = optionValue;

    if (optionValue === "") {
      delete answers[optionId];
    }

    setAnswers(answers);
    onAnswer({
      questionId: question.questionId,
      value: answers
    });
  };

  const choiceFor = (option) => {
    if (option.type === "OTHER") {
      const value = answers[option.value];
      return (
        <div
          className={"__list-item other"}
          key={`answer_${question.questionId}_${option.value}`}
        >
          <Input
            usePlaceholder={false}
            onChange={(event) => {
              onInputForOther(String(option.value), event.target.value);
            }}
            defaultValue={value ? value : ""}
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
        <List>{question.options.map((option) => choiceFor(option))}</List>
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
      "INPUT"
    ]),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    )
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.object
};
export default MultipleChoice;
