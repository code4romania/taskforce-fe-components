import React from "react";
import { Label } from "./label";
import "../../styles.scss";

export default { title: "Label" };

export const types = () => (
  <>
    <Label text="Some Label" />
    <Label text="Some Secondary Label" isSecondary={true} />
  </>
);
