import React from "react";
import PropTypes from "prop-types";

import { Hero } from "../hero/hero";
import { Input } from "../input/input";

import "./subscribe-form.scss";

import { Wording } from "./constants";
import { Button } from "../button/button";

export const SubscribeForm = ({ compact }) => {
  const SubscribeButton = () => (
    <Button inputType="submit" onClick={() => void 0}>
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
        name={Wording.MAILCHIMP_INPUT_NAME}
        usePlaceholder={true}
        required={true}
      >
        {!compact && (
          <div className="control">
            <SubscribeButton />
          </div>
        )}
      </Input>
      {compact && <SubscribeButton />}
    </div>
  );
};

SubscribeForm.propTypes = {
  compact: PropTypes.bool
};

SubscribeForm.defaultProps = {
  compact: false
};
