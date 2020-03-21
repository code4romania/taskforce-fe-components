import React, { useState } from "react";
import PropTypes from "prop-types";
import { SubscribeForm } from "./subscribe-form";
import { sendSubscriptionRequest } from "./mailchimp.service";

export const MailchimpSubscribe = ({ url }) => {
  const [isSending, setIsSending] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const subscribe = async ({ email }) => {
    setIsSending(true);
    try {
      await sendSubscriptionRequest(url, email);
      setIsSending(false);
      setIsSuccess(true);
    } catch (errorMsg) {
      setErrorMessage(errorMsg);
    }
  };

  return (
    <SubscribeForm
      onSubmitted={formData => subscribe(formData)}
      sending={isSending}
      success={isSuccess}
      errorMessage={errorMessage}
    />
  );
};

MailchimpSubscribe.propTypes = {
  url: PropTypes.string.isRequired
};
