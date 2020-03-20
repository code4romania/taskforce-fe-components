import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SubscribeForm } from "./subscribe-form";
import { MailchimpSubscribe } from "./mailchimp-subscribe";
import PropTypes from "prop-types";

export default { title: "Subscribe form", decorators: [withKnobs] };

const chimpUrl =
  "https://gmail.us19.list-manage.com/subscribe/post?u=b2f5e42c92412f13cc23d2631&amp;id=6643c553da";

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

export const mailchimpSubscribe = () => (
  <Wrapper>
    <MailchimpSubscribe url={chimpUrl} />
  </Wrapper>
);
