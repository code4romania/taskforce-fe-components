import React from "react";
import PropTypes from "prop-types";
import "./form.scss";
import { ListHeader } from "../list-header/list-header";

function Results({ question, option }) {
  // TODO: use a real component for this
  return (
    <div>
      <ListHeader title={question.questionText} />
      <div>
        <div className={"__list-item no-hover"}>
          <div className="__list-item__left-side" />
          <div className="__list-item__content">{option.label}</div>
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
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
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })
};

export default Results;
