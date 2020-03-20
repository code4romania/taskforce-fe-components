import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SubscribeForm } from "./subscribe-form";
import { MailchimpSubscribe } from "./mailchimp-subscribe";

export default { title: "Subscribe form", decorators: [withKnobs] };

export const subscribe = () => <SubscribeForm />;
export const subscribeLoading = () => <SubscribeForm sending={true} />;
export const subscribeError = () => (
  <SubscribeForm errorMessage="Something went wrong." />
);
export const subscribeSuccess = () => <SubscribeForm success={true} />;

const chimpUrl =
  "https://gmail.us19.list-manage.com/subscribe/post?u=b2f5e42c92412f13cc23d2631&amp;id=6643c553da";

export const mailchimpSubscribe = () => <MailchimpSubscribe url={chimpUrl} />;
