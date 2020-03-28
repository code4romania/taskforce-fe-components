import React from "react";
import PropTypes from "prop-types";
import "./form.scss";
import { ListItem, ListHeader } from "../..";

function Results({ question, option }) {
  return (
    <div>
      <ListHeader title={question.questionText} />
      <div>
        <ListItem nonOption={true} title={option.label} />
      </div>
    </div>
  );
}

Results.propTypes = {
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
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })
};

export default Results;
