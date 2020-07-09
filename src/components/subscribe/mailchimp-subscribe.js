import React from "react";
import PropTypes from "prop-types";
import { SubscribeForm } from "./subscribe-form";
import { wordingPropTypes, defaultWordingProps } from "./wording-prop-types";

export const MailchimpSubscribe = ({ url, wording, compact }) => {
  return (
    <form method="post" target="_blank" action={url}>
      <SubscribeForm compact={compact} wording={wording} />
    </form>
  );
};

MailchimpSubscribe.propTypes = {
  url: PropTypes.string.isRequired,
  wording: PropTypes.shape(wordingPropTypes),
  compact: PropTypes.bool,
};

MailchimpSubscribe.defaultProps = {
  wording: defaultWordingProps,
};
