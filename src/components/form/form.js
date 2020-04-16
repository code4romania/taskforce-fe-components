import React, { useState } from "react";
import PropTypes from "prop-types";
import { groupBy, mapObject } from "underscore";
import SingleChoice from "./singleChoice";
import "./form.scss";
import { Button } from "../button/button";
import StaticText from "./staticText";
import InputQuestion from "./inputQuestion";
import MultipleChoice from "./multipleChoice";
import { DatePicker } from "./datePicker";

const FIRST_NODE = 1;

export const Form = ({ data, evaluateForm, onFinishingForm }) => {
  const [formState, setFormState] = useState({});
  const [currentNode, setCurrentNode] = useState(data.firstNodeId);
  const [historyOfSteps, setHistoryOfSteps] = useState([]);
  const [started, setStarted] = useState(false);

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

      let answer = formState[id];

      if (question.type === "SINGLE_CHOICE") {
        answer = String(answer);
      }

      return {
        id: question.questionId,
        questionText: question.questionText,
        answer: answer
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
      case "DATE_PICKER": {
        return (
          <DatePicker
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "CUSTOM": {
        return (
          <currentQuestion.children
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
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
      case "INPUT": {
        return (
          <InputQuestion
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "FINAL": {
        return (
          <StaticText
            title={currentQuestion.questionText}
            description={evaluateForm(formState, currentQuestion.options).label}
          />
        );
      }
      default:
        return null;
    }
  };

  const getNextQuestionForOptionValue = (question, optionValue) => {
    if (
      question.type === "INPUT" ||
      question.type === "MULTIPLE_CHOICE" ||
      question.type === "DATE_PICKER" ||
      question.type === "CUSTOM"
    ) {
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

      if (formAsMap[nextNode].type === "FINAL") {
        onFinishingForm(createFormWithAnswers());
      }

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

  const goBackButton = () => {
    return (
      <div className="level-item">
        <Button inverted={true} onClick={goToPreviousQuestion}>
          Inapoi
        </Button>
      </div>
    );
  };
  const goForwardButton = () => {
    return (
      <div className="level-item">
        <Button
          className="forward"
          onClick={goToNextQuestion}
          disabled={isWaitingForChoice()}
        >
          Inainte
        </Button>
      </div>
    );
  };
  const restartButton = () => {
    return (
      <Button inverted={true} onClick={resetForm}>
        Reîncepe testul
      </Button>
    );
  };
  const showQuestion = () => {
    return (
      <div>
        {questionView()}
        <div className="level action-buttons">
          <div className="level-left">
            {currentNode > FIRST_NODE && goBackButton()}
            {areThereQuestionsLeft() && goForwardButton()}
          </div>
          <div className="level-right">{data.form && restartButton()}</div>
        </div>
      </div>
    );
  };

  const startForm = () => setStarted(true);

  const showIntro = () => {
    return (
      <div>
        <StaticText
          title={data.intro.title}
          description={data.intro.description}
        />
        <div className="level action-buttons">
          <div className="level-left">
            <Button inverted={true} onClick={startForm} className={"start"}>
              Incepe testul
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const isIntro = () => {
    return !!(data.intro && !started);
  };

  if (isIntro()) {
    return showIntro();
  } else {
    return showQuestion();
  }
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
    intro: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    form: PropTypes.arrayOf(
      PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        questionText: PropTypes.string.isRequired,
        type: PropTypes.oneOf([
          "FINAL",
          "SINGLE_CHOICE",
          "MULTIPLE_CHOICE",
          "INPUT",
          "DATE_PICKER",
          "CUSTOM"
        ]),
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
