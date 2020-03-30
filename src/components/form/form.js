import React, { useState } from "react";
import PropTypes from "prop-types";
import SingleChoice from "./singleChoice";
import "./form.scss";
import { Button } from "../button/button";
import Results from "./results";
import { groupBy, mapObject } from "underscore";
import FreeText from "./freeText";

const FIRST_NODE = 1;

export const Form = ({ data, evaluateForm, onFinishingForm }) => {
  const [formState, setFormState] = useState({});
  const [currentNode, setCurrentNode] = useState(data.firstNodeId);
  const [historyOfSteps, setHistoryOfSteps] = useState([]);

  const resetForm = () => {
    setCurrentNode(data.firstNodeId);
    setFormState({});
    setHistoryOfSteps([]);
  };

  const answerCurrentQuestion = answer => {
    setFormState({
      ...formState,
      [answer.questionId]: answer.value
    });
  };

  const toMap = form => {
    const groupedById = groupBy(form, question => question.questionId);
    return mapObject(groupedById, listOfQuestions => listOfQuestions[0]);
  };

  const formAsMap = toMap(data.form);

  const createFormWithAnswers = () => {
    const answersById = mapObject(formAsMap, (question, id) => {
      //a bit a of hack to get rid of the final entry - needs restructuring of the data model
      if (question.type === "FINAL") {
        return {};
      }

      return {
        id: question.questionId,
        questionText: question.questionText,
        answer: String(formState[id])
      };
    });
    return {
      formId: data.formId,
      timestamp: Date.now(),
      answers: Object.values(answersById).filter(answer => answer.id)
    };
  };

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
      case "FREE_TEXT": {
        return (
          <FreeText
            question={currentQuestion}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "FINAL": {
        onFinishingForm(createFormWithAnswers());
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

  const getNextQuestionForOptionValue = (question, optionValue) => {
    if (question.type === "FREE_TEXT") {
      return;
    }
    const selectedOption = question.options.find(
      option => option.value === optionValue
    );
    return selectedOption.nextQuestionId;
  };
  const goToNextQuestion = () => {
    const currentElement = formAsMap[currentNode];
    if (formState[currentElement.questionId] !== undefined) {
      const optionValue = formState[currentElement.questionId];
      const defaultNext = currentNode + 1;

      const nextNode =
        getNextQuestionForOptionValue(currentElement, optionValue) ||
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

  const isWaitingForChoice = () => {
    return formState[currentNode] === undefined;
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
              <Button
                className="forward"
                onClick={goToNextQuestion}
                disabled={isWaitingForChoice()}
              >
                Inainte
              </Button>
            </div>
          )}
        </div>
        <div className="level-right">
          {data.form && (
            <Button inverted={true} onClick={resetForm}>
              Reîncepe testul
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

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
    formId: PropTypes.number,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        questionText: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "FREE_TEXT"]),
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
  evaluateForm: PropTypes.func,
  onFinishingForm: PropTypes.func
};
