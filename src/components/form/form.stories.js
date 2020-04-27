import React from "react";

import ceMaFacData from "./data/ceMaFac";
import decisionTree from "./data/decisionTree";
import datePickers from "./data/datePickers";
import { Form } from "./form";

export default { title: "Form" };

let evaluate = function(formData, options) {
  return options[0];
};
export const withCeMaFacData = () => (
  <Form
    data={ceMaFacData}
    evaluateForm={evaluate}
    onFinishingForm={results => console.log(results)}
  />
);

export const withDecisionAndIntro = () => (
  <Form
    data={decisionTree}
    evaluateForm={evaluate}
    onFinishingForm={results => console.log(results)}
  />
);

export const withDatePickers = () => (
  <Form
    data={datePickers}
    evaluateForm={evaluate}
    onFinishingForm={results => console.log(results)}
  />
);
