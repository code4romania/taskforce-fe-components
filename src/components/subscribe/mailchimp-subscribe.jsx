import React from "react";
import PropTypes from "prop-types";
import jsonp from "jsonp";
import { SubscribeForm } from "./subscribe-form";

export const MailchimpSubscribe = ({ url }) => {
  const subscribe = data => {
    const jsonUrl =
      url.replace("/post?", "/post-json?") + "&EMAIL=" + data.email;

    jsonp(
      jsonUrl,
      {
        param: "c"
      },
      (err, response) => {
        if (err) {
          console.log(err);
        } else if (response.result !== "success") {
          console.log(response.msg);
        } else {
          console.log(response.msg);
        }
      }
    );
  };

  return <SubscribeForm onSubmitted={formData => subscribe(formData)} />;
};

MailchimpSubscribe.propTypes = {
  url: PropTypes.string.isRequired
};
