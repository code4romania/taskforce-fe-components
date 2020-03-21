import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormInput } from "../form-input/form-input";

export const PasswordWithConfirm = ({ onChange }) => {
  const [passwordInfo, setPasswordInfo] = useState({
    password: {
      value: "",
      isValid: false,
      errorMessages: []
    },
    password2: {
      value: "",
      isValid: false,
      errorMessages: []
    }
  });
  const isFieldValid = args => {
    let isValid = true;
    if (args.target.required) {
      isValid = args.target.value.length > 0;
      if (args.target.minLength) {
        isValid = args.target.value.length >= args.target.minLength;
      }
    }
    return isValid;
  };
  const password_onChange = args => {
    let error_messages = [];
    let is_valid = isFieldValid(args);
    if (!is_valid) {
      error_messages.push(
        `* Lungimea minima este de ${args.target.minLength}!`
      );
    }

    let changedInfo = {
      ...passwordInfo,
      password: {
        value: args.target.value,
        isValid: is_valid,
        errorMessages: error_messages
      }
    };
    setPasswordInfo(changedInfo);
    onChange({
      password: changedInfo.password.value,
      isValid: changedInfo.password.isValid && changedInfo.password2.isValid
    });
  };
  const validatePassword_onChange = args => {
    let errorMessages = [];
    let is_valid = passwordInfo.password.value === args.target.value;
    if (!is_valid) {
      errorMessages.push("* Parolele nu se portrivesc!");
    }
    let changedInfo = {
      ...passwordInfo,
      password2: {
        value: args.target.value,
        isValid: is_valid,
        errorMessages
      }
    };
    setPasswordInfo(changedInfo);
    onChange({
      password: changedInfo.password.value,
      isValid: changedInfo.password.isValid && changedInfo.password2.isValid
    });
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <FormInput
          label={"Seteaza parola"}
          inputProps={{
            onKeyUp: password_onChange,
            minLength: 9,
            errorMessages: passwordInfo.password.errorMessages,
            type: "password",
            required: true
          }}
        />
      </div>
      <div className="column is-half">
        <FormInput
          label={"Confirmă parola"}
          inputProps={{
            onKeyUp: validatePassword_onChange,
            minLength: 9,
            errorMessages: passwordInfo.password2.errorMessages,
            type: "password",
            required: true
          }}
        />
      </div>
    </div>
  );
};

PasswordWithConfirm.propTypes = {
  onChange: PropTypes.func
};

PasswordWithConfirm.defaultProps = {
  onChange: () => {}
};
