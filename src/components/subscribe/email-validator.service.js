const emailRegex = new RegExp("[^@]+@[^.]+..+");

export const validateEmail = emailValue => emailRegex.test(emailValue);
