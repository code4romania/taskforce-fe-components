import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SubscribeForm } from "./subscribe-form";
import { MailchimpSubscribe } from "./mailchimp-subscribe";
import PropTypes from "prop-types";
import { Input } from "../input/input";

export default { title: "Subscribe form", decorators: [withKnobs] };

const Wrapper = ({ children }) => (
  <div className="columns">
    <div className="column is-one-third">{children}</div>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node
};

export const subscribe = () => (
  <Wrapper>
    <SubscribeForm />
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

export const mailchimpSubscribe = () => {
  const [chimpUrl, setChimpUrl] = useState();
  return (
    <Wrapper>
      <label className="label">Mailchimp URL:</label>
      <Input
        type="text"
        label="Introdu un url de mailchimp valid"
        usePlaceholder={true}
        onChange={({ target }) => setChimpUrl(target.value)}
      ></Input>
      <MailchimpSubscribe url={chimpUrl || ""} />
    </Wrapper>
  );
};
