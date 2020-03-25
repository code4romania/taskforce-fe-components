import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { MailchimpSubscribe } from "./mailchimp-subscribe";
import PropTypes from "prop-types";
import { Input } from "../input/input";

export default { title: "Newsletter form", decorators: [withKnobs] };

const Wrapper = ({ compact, classes }) => {
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
        <MailchimpSubscribe url={chimpUrl} compact={compact} />
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  compact: PropTypes.bool,
  classes: PropTypes.string
};

export const mailchimpSubscribe = () => {
  return <Wrapper></Wrapper>;
};

export const mailchimpSubscribeCompact = () => (
  <Wrapper classes="column is-one-fifth" compact={true}></Wrapper>
);
