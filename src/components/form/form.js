import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SingleChoice from "./singleChoice";
import MultipleChoice from "./multipleChoice";
import "./form.scss";
import { Button } from "../button/button";
import Results from "./results";
import _ from "underscore";

const FIRST_NODE = 1;

function Form({ data, evaluateForm }) {
  // TODO: at some point, allow for answers to some questions to affect the visibility of other questions
  const [formState, setFormState] = useState({});
  const [currentNode, setCurrentNode] = useState(FIRST_NODE);
  const [historyOfSteps, setHistoryOfSteps] = useState([]);
  const init = () => {
    setCurrentNode(data.firstNodeId);
    setFormState({});
  };

  useEffect(() => {
    init();
  }, [data.form]);

  const answerCurrentQuestion = answer => {
    setFormState({
      ...formState,
      [answer.questionId]: answer.value
    });
  };

  const toMap = form => {
    const groupedById = _.groupBy(form, question => question.questionId);
    const map = _.mapObject(groupedById, listOfQuestions => listOfQuestions[0]);
    return map;
  };

  const formAsMap = toMap(data.form);

  const questionView = () => {
    const currentQuestion = formAsMap[currentNode];
    // TODO: add components for other question types
    switch (currentQuestion.type) {
      case "SINGLE_CHOICE": {
        return (
          <SingleChoice
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "MULTIPLE_CHOICE": {
        return (
          <MultipleChoice
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "FINAL": {
        return (
          <Results
            option={evaluateForm(formState, currentQuestion.options)}
            question={currentQuestion}
          />
        );
      }
      default:
        return null;
    }
  };

  const getNextQuestionForOptionValue = (options, optionValue) => {
    const selectedOption = _.find(
      options,
      option => option.value === optionValue
    );
    return selectedOption.nextQuestionId;
  };
  const goToNextQuestion = () => {
    // TODO use the disabled prop once the Button component implements it

    const currentElement = formAsMap[currentNode];
    if (formState[currentElement.questionId] !== undefined) {
      const optionValue = formState[currentElement.questionId];
      const defaultNext = currentNode + 1;

      const nextNode =
        getNextQuestionForOptionValue(currentElement.options, optionValue) ||
        defaultNext;

      historyOfSteps.push(currentNode);
      setHistoryOfSteps(historyOfSteps);
      setCurrentNode(nextNode);
    }
  };
  const goToPreviousQuestion = () => {
    const newNode = historyOfSteps.pop();
    setHistoryOfSteps(historyOfSteps);
    setCurrentNode(newNode);
  };

  const areThereQuestionsLeft = () => {
    return formAsMap[currentNode].type !== "FINAL";
  };

  return (
    <div>
      {questionView()}
      <div className="level action-buttons">
        <div className="level-left">
          {currentNode > FIRST_NODE && (
            <div className="level-item">
              <Button inverted={true} onClick={goToPreviousQuestion}>
                Inapoi
              </Button>
            </div>
          )}
          {areThereQuestionsLeft() && (
            <div className="level-item">
              <Button onClick={goToNextQuestion}>Inainte</Button>
            </div>
          )}
        </div>
        <div className="level-right">
          {data.form && (
            <Button inverted={true} onClick={init}>
              Reîncepe testul
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        page: PropTypes.string.isRequired
      })
    ),
    firstNodeId: PropTypes.number.isRequired,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        questionText: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            nextQuestionId: PropTypes.number
          })
        )
      })
    )
  }),
  evaluateForm: PropTypes.func
};

export default Form;
