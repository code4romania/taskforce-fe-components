import React, { useState } from "react";
import "../../styles.scss";
import { LoginForm } from "./login-form";
import { Hero } from "../hero/hero";

export default { title: "Login Form" };

const style = { minWidth: 300, maxWidth: 400 };

export const usage = () => {
  const [loginData, setState] = useState({});
  return (
    <div style={style}>
      <pre>{JSON.stringify(loginData)}</pre>
      <LoginForm
        rightContent={<a href="#">Ai uitat parola?</a>}
        onSubmit={setState}
      />
    </div>
  );
};
export const usageWithDifferentHeader = () => {
  const [loginData, setState] = useState({});
  return (
    <div style={style}>
      <pre>{JSON.stringify(loginData)}</pre>
      <LoginForm header={<Hero title="Date la zi" />} onSubmit={setState} />
    </div>
  );
};
export const usageWithInitialState = () => {
  const initialState = {
    email: "anon@code4.ro",
    password: "",
    remember: true
  };
  const [loginData, setState] = useState(initialState);

  return (
    <div style={style}>
      <pre>{JSON.stringify(loginData)}</pre>
      <LoginForm
        rightContent={<a href="#">Ai uitat parola?</a>}
        initialState={loginData}
        onSubmit={setState}
      />
    </div>
  );
};
