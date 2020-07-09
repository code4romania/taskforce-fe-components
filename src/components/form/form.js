import React, { useState } from "react";
import PropTypes from "prop-types";
import { mapObject } from "underscore";
import SingleChoice from "./singleChoice";
import "./form.scss";
import { Button } from "../button/button";
import StaticText from "./staticText";
import InputQuestion from "./inputQuestion";
import MultipleChoice from "./multipleChoice";
import { DatePicker } from "./datePicker";
import format from "date-fns/format";

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

  const answerCurrentQuestion = (answer) => {
    setFormState({
      ...formState,
      [answer.questionId]: answer.value,
    });
  };

  const toMap = (form) => {
    return form.reduce((obj, item) => {
      return {
        ...obj,
        [item["questionId"]]: item,
      };
    }, {});
  };

  const formAsMap = toMap(data.form);
  const createFormWithAnswers = () => {
    const answersById = mapObject(formAsMap, (question, id) => {
      //a bit a of hack to get rid of the final entry - needs restructuring of the data model
      if (question.type === "FINAL") {
        return {};
      }

      const rawAnswer = formState[id];

      let answer = rawAnswer;
      if (question.type === "SINGLE_CHOICE") {
        answer = String(rawAnswer);
      }

      if (
        question.type === "DATE_PICKER" ||
        question.type === "DATE_TIME_PICKER"
      ) {
        answer = rawAnswer
          ? format(rawAnswer, "yyyy-MM-dd'T'HH:mm")
          : rawAnswer;
      }

      return {
        id: question.questionId,
        questionText: question.questionText,
        answer: answer,
      };
    });
    return {
      formId: data.formId,
      timestamp: Date.now(),
      answers: Object.values(answersById).filter((answer) => answer.id),
    };
  };

  const questionView = () => {
    const currentQuestion = formAsMap[currentNode];
    // TODO: add components for other question types
    switch (currentQuestion.type) {
      case "DATE_PICKER": {
        return (
          <DatePicker
            key={currentQuestion.questionId}
            withTime={false}
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "DATE_TIME_PICKER": {
        return (
          <DatePicker
            key={currentQuestion.questionId}
            withTime={true}
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "CUSTOM": {
        return (
          <currentQuestion.children
            key={currentQuestion.questionId}
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "SINGLE_CHOICE": {
        return (
          <SingleChoice
            key={currentQuestion.questionId}
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "MULTIPLE_CHOICE": {
        return (
          <MultipleChoice
            key={currentQuestion.questionId}
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "INPUT": {
        return (
          <InputQuestion
            key={currentQuestion.questionId}
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
    if (question.type !== "SINGLE_CHOICE") {
      return;
    }
    const selectedOption = question.options.find(
      (option) => option.value === optionValue
    );
    return selectedOption.nextQuestionId;
  };

  const goToNextQuestion = () => {
    const currentElement = formAsMap[currentNode];
    if (formState[currentElement.questionId] !== undefined) {
      const optionValue = formState[currentElement.questionId];
      const defaultNext = currentElement.nextQuestionId || currentNode + 1;

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
          Înapoi
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
          Înainte
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
    const currentQuestion = formAsMap[currentNode];
    return (
      <div>
        {questionView()}
        <div className="level action-buttons">
          <div className="level-left">{data.form && restartButton()}</div>
          <div className="level-right">
            {currentNode > FIRST_NODE &&
              currentQuestion.showBackButton !== false &&
              goBackButton()}
            {areThereQuestionsLeft() && goForwardButton()}
          </div>
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
              Începe testul
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
        page: PropTypes.string.isRequired,
      })
    ),
    firstNodeId: PropTypes.number.isRequired,
    formId: PropTypes.number,
    intro: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
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
          "DATE_TIME_PICKER",
          "CUSTOM",
        ]),
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            nextQuestionId: PropTypes.number,
          })
        ),
      })
    ),
  }),
  evaluateForm: PropTypes.func,
  onFinishingForm: PropTypes.func,
};
