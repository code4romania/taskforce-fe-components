const emailRegex = new RegExp(
  "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+).([a-zA-Z]{2,5})$"
);

export const validateEmail = emailValue => emailRegex.test(emailValue);
