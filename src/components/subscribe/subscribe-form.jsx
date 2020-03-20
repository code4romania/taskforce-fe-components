import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../input/input";
import { Hero } from "../hero/hero";
import { Button } from "../button/button";
import "./subscribe-form.scss";
import { validateEmail } from "./email-validatior.service";

export const SubscribeForm = ({
  onSubmitted,
  sending,
  success,
  errorMessage
}) => {
  const [inputValue, setInputValue] = useState();
  const [isValid, setIsValid] = useState();

  const handleInputChange = ({ target }) => {
    setIsValid(validateEmail(target.value));
    setInputValue(target.value);
  };

  const handleSubmit = () =>
    isValid &&
    onSubmitted({
      email: inputValue
    });

  return (
    <div className="subscribe-form container">
      <Hero
        title="Rămâi informat"
        subtitle="Abonează-te la newsletter și îți trimitem zilnic ultimele informații!"
        useFallbackIcon={true}
      />
      <Input
        type="email"
        hasAddons={true}
        label="Introdu aici adresa de e-mail"
        usePlaceholder={true}
        color={isValid === false ? "danger" : void 0}
        disabled={sending || success}
        loading={sending}
        onChange={handleInputChange}
      >
        <div className="control">
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={sending || success || isValid === false}
          >
            Abonează-mă
          </Button>
        </div>
      </Input>
      {success && <p className="help is-primary">Abonare reușită!</p>}
      {errorMessage && <p className="help is-danger">{errorMessage}</p>}
    </div>
  );
};

SubscribeForm.propTypes = {
  onSubmitted: PropTypes.func,
  sending: PropTypes.bool,
  success: PropTypes.bool,
  errorMessage: PropTypes.string
};

SubscribeForm.defaultProps = {
  onSubmitted: ({ email }) => console.log(email),
  sending: false
};
