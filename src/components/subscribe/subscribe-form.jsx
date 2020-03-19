import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../input/input";
import { Hero } from "../hero/hero";
import { Button } from "../button/button";
import "./subscribe-form.scss";

export const SubscribeForm = ({ onSubmitted }) => {
  const [inputValue, setInputValue] = useState();

  const submit = () =>
    inputValue &&
    inputValue.indexOf("@") > -1 &&
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
        type="text"
        hasAddons={true}
        label="Introdu aici adresa de e-mail"
        usePlaceholder={true}
        onChange={e => setInputValue(e.target.value)}
      >
        <div className="control">
          <Button type="primary" onClick={submit}>
            Abonează-mă
          </Button>
        </div>
      </Input>
    </div>
  );
};

SubscribeForm.propTypes = {
  onSubmitted: PropTypes.func
};
