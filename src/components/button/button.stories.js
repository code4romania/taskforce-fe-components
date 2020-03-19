import React from "react";
import "./../../styles.scss";
import { Button } from "./button";

export default { title: "Button" };

function sayMyName() {
  alert("Hello Friend");
}

export const primary = () => {
  return (
    <Button type="primary" onClick={sayMyName}>
      Hello Friend
    </Button>
  );
};

export const inverted = () => {
  return (
    <Button inverted={true} onClick={sayMyName}>
      Hello Friend
    </Button>
  );
};

export const danger = () => {
  return (
    <Button type="danger" onClick={sayMyName}>
      Hello Friend
    </Button>
  );
};
