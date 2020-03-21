import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SubscribeForm } from "./subscribe-form";
import { MailchimpSubscribe } from "./mailchimp-subscribe";
import PropTypes from "prop-types";
import { Input } from "../input/input";

export default { title: "Newsletter form", decorators: [withKnobs] };

const Wrapper = ({ children, classes }) => (
  <div className="columns">
    <div className={classes || "column is-one-third"}>{children}</div>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string
};

const logOnSubmit = ({ email }) => console.log(email);

export const mailchimpSubscribe = () => {
  const [chimpUrl, setChimpUrl] = useState("");
  return (
    <Wrapper>
      <label className="label">Mailchimp URL:</label>
      <Input
        type="text"
        label="Introdu un url de mailchimp valid"
        usePlaceholder={true}
        onChange={({ target: { value } }) => setChimpUrl(value)}
      ></Input>
      <MailchimpSubscribe url={chimpUrl} />
    </Wrapper>
  );
};

export const mailchimpSubscribeCompact = () => (
  <Wrapper classes="column is-one-fifth">
    <MailchimpSubscribe url="" compact={true} />
  </Wrapper>
);

export const subscribe = () => (
  <Wrapper>
    <SubscribeForm onSubmit={logOnSubmit} />
  </Wrapper>
);

export const subscribeLoading = () => (
  <Wrapper>
    <SubscribeForm sending={true} />
  </Wrapper>
);

export const subscribeError = () => (
  <Wrapper>
    <SubscribeForm errorMessage="Something went wrong." />
  </Wrapper>
);

export const subscribeSuccess = () => (
  <Wrapper>
    <SubscribeForm success={true} />
  </Wrapper>
);

export const subscribeCompact = () => (
  <Wrapper classes="column is-one-fifth">
    <SubscribeForm compact={true} />
  </Wrapper>
);

export const subscribeCompactSuccess = () => (
  <Wrapper classes="column is-one-fifth">
    <SubscribeForm compact={true} success={true} />
  </Wrapper>
);
