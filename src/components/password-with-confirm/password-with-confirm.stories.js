import React, { useState } from "react";
import "./../../styles.scss";
import { PasswordWithConfirm } from "./password-with-confirm";

export default { title: "PasswordWithConfirm" };

export const PasswordWithConfirmWithOnChange = () => {
  const [passwordInfo, setPasswordInfo] = useState();
  return (
    <div>
      <PasswordWithConfirm onChange={args => setPasswordInfo(args)} />
      <pre>{JSON.stringify(passwordInfo, null, 1)}</pre>
    </div>
  );
};
