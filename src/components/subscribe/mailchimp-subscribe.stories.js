import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SubscribeForm } from "./subscribe-form";
import { MailchimpSubscribe } from "./mailchimp-subscribe";

export default { title: "Subscribe form", decorators: [withKnobs] };

export const subscribe = () => <SubscribeForm />;

export const mailchimpSubscribe = () => (
  <MailchimpSubscribe url="https://gmail.us19.list-manage.com/subscribe/post?u=b42c92412f13cc23d2631&id=6643c553da" />
);
