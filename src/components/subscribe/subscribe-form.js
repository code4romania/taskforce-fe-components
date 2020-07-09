import React from "react";
import PropTypes from "prop-types";

import { Hero } from "../hero/hero";
import { Input } from "../input/input";

import "./subscribe-form.scss";

import { Button } from "../button/button";
import { wordingPropTypes } from "./wording-prop-types";

export const SubscribeForm = ({ compact, wording, mailChimpInputName }) => {
  const SubscribeButton = () => (
    <Button inputType="submit" onClick={() => void 0}>
      {wording.button}
    </Button>
  );
  const classNames = ["__subscribe-form", "container"];
  if (compact) classNames.push("__compact");

  return (
    <div className={classNames.join(" ")}>
      <Hero
        title={wording.title}
        subtitle={wording.subTitle}
        useFallbackIcon={true}
      />
      <Input
        type="email"
        hasAddons={!compact}
        label={wording.placeholder}
        name={mailChimpInputName}
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
  wording: PropTypes.shape(wordingPropTypes).isRequired,
  compact: PropTypes.bool,
  mailChimpInputName: PropTypes.string,
};

SubscribeForm.defaultProps = {
  compact: false,
  mailChimpInputName: "EMAIL",
};
