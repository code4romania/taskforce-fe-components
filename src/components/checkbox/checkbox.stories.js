import React, { useState } from "react";
import "../../styles.scss";
import { Checkbox } from "./checkbox";
import { Label } from "../label/label";
import "./checkbox.scss";

export default { title: "Checkbox" };

export const usage = () => {
  const [state, setState] = useState({ rememberMe: false });

  return (
    <React.Fragment>
      <Label
        text={`Checkbox is ${state.rememberMe ? "checked" : "unchecked"}`}
      />
      <Checkbox
        onChange={e => setState({ rememberMe: e.target.checked })}
        defaultValue={state.rememberMe}
      >
        Remember Me
      </Checkbox>
    </React.Fragment>
  );
};
