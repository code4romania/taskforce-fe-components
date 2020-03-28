import React from "react";

import ceMaFacData from "./ce-ma-fac";
import Form from "./form";

export default { title: "Form" };

let evaluate = function(formData, options) {
  if (formData[1]) {
    return options[1];
  } else {
    return options[0];
  }
};
export const withCeMaFacData = () => (
  <Form data={ceMaFacData} evaluateForm={evaluate} />
);
