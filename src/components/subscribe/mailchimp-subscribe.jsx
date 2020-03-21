import React, { useState } from "react";
import PropTypes from "prop-types";
import { SubscribeForm } from "./subscribe-form";
import { sendSubscriptionRequest } from "./mailchimp.service";

export const MailchimpSubscribe = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const subscribe = async ({ email }) => {
    setIsLoading(true);
    try {
      await sendSubscriptionRequest(url, email);
      setIsSuccess(true);
    } catch (errorMsg) {
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SubscribeForm
      onSubmit={formData => subscribe(formData)}
      loading={isLoading}
      success={isSuccess}
      errorMessage={errorMessage}
    />
  );
};

MailchimpSubscribe.propTypes = {
  url: PropTypes.string.isRequired
};
