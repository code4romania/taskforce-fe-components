import jsonp from "jsonp";

export const sendSubscriptionRequest = (url, email) =>
  new Promise((resolve, reject) => {
    const jsonUrl = url.replace("/post?", "/post-json?") + "&EMAIL=" + email;

    jsonp(
      jsonUrl,
      {
        param: "c"
      },
      (err, response) => {
        if (err) {
          reject(err);
        } else if (response.result !== "success") {
          reject(response.msg);
        } else {
          resolve(response.msg);
        }
      }
    );
  });
