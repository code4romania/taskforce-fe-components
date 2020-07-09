import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { MailchimpSubscribe } from "./mailchimp-subscribe";
import PropTypes from "prop-types";
import { Input } from "../input/input";

export default { title: "Newsletter form", decorators: [withKnobs] };

const customSubscribeWording = {
  title: "Custom title",
  subTitle: "My totally awesome custom subtitle",
  placeholder: "Custom placeholder",
  button: "Do custom thingy",
};

const Wrapper = ({ compact, classes, customWording }) => {
  const [chimpUrl, setChimpUrl] = useState("");
  return (
    <div className="columns">
      <div className={classes || "column is-one-third"}>
        <label className="label">Mailchimp URL:</label>
        <Input
          type="text"
          label="Introdu un url de mailchimp valid"
          usePlaceholder={true}
          onChange={({ target: { value } }) => setChimpUrl(value)}
        ></Input>
        <MailchimpSubscribe
          url={chimpUrl}
          compact={compact}
          wording={customWording ? customSubscribeWording : void 0}
        />
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  compact: PropTypes.bool,
  classes: PropTypes.string,
  customWording: PropTypes.bool,
};

export const mailchimpSubscribe = () => {
  return <Wrapper></Wrapper>;
};

export const mailchimpSubscribeCompact = () => (
  <Wrapper classes="column is-one-fifth" compact={true}></Wrapper>
);

export const mailchimpSubscribeCustomized = () => {
  return <Wrapper customWording={true}></Wrapper>;
};
