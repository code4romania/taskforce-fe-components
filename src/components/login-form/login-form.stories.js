import React, { useState } from "react";
import "../../styles.scss";
import { LoginForm } from "./login-form";

export default { title: "Login Form" };

export const usage = () => {
  const [loginData, setState] = useState({});
  return (
    <div style={{ width: 400 }}>
      <pre>{JSON.stringify(loginData)}</pre>
      <LoginForm
        rightContent={<a href="#">Ai uitat parola?</a>}
        onSubmit={setState}
      />
    </div>
  );
};
