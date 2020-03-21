import React, { useState } from "react";
import PropTypes from "prop-types";

import { Hero } from "../hero/hero";
import { Input } from "../input/input";
import { Button } from "../button/button";

import "./subscribe-form.scss";

import { validateEmail } from "./email-validator.service";
import { Wording } from "./constants";

export const SubscribeForm = ({
  compact,
  loading,
  success,
  errorMessage,
  onSubmit
}) => {
  const [inputValue, setInputValue] = useState();
  const [isValid, setIsValid] = useState();

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    const validationResult = validateEmail(inputValue);
    setIsValid(validationResult);
    const canSubmit = validationResult && typeof onSubmit === "function";

    if (canSubmit) {
      onSubmit({
        email: inputValue
      });
    }
  };

  const SubscribeButton = () => (
    <Button onClick={handleSubmit} disabled={loading || success}>
      {Wording.BUTTON}
    </Button>
  );

  const classNames = ["__subscribe-form", "container"];
  if (compact) classNames.push("__compact");

  return (
    <div className={classNames.join(" ")}>
      <Hero
        title={Wording.TITLE}
        subtitle={Wording.SUB_TITLE}
        useFallbackIcon={true}
      />
      <Input
        type="email"
        hasAddons={!compact}
        label={Wording.PLACEHOLDER}
        usePlaceholder={true}
        color={isValid === false ? "danger" : void 0}
        disabled={loading || success}
        loading={loading}
        onChange={handleInputChange}
      >
        {!compact && (
          <div className="control">
            <SubscribeButton />
          </div>
        )}
      </Input>
      {compact && <SubscribeButton />}
      {success && <p className="help __success">{Wording.SUCCESS}</p>}
      {errorMessage && <p className="help is-danger">{errorMessage}</p>}
    </div>
  );
};

SubscribeForm.propTypes = {
  compact: PropTypes.bool,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func
};

SubscribeForm.defaultProps = {
  compact: false,
  loading: false
};
