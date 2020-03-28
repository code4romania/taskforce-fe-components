import React from "react";

import ceMaFacData from "./ce-ma-fac";
import Form from "./form";

export default { title: "Form" };

export const withCeMaFacData = () => <Form data={ceMaFacData} />;
