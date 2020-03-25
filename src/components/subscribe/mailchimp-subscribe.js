import React from "react";
import PropTypes from "prop-types";
import { SubscribeForm } from "./subscribe-form";

export const MailchimpSubscribe = ({ url, compact }) => {
  return (
    <form method="post" target="_blank" action={url}>
      <SubscribeForm compact={compact} />
    </form>
  );
};

MailchimpSubscribe.propTypes = {
  url: PropTypes.string.isRequired,
  compact: PropTypes.bool
};
