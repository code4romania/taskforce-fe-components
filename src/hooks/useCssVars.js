import { transform } from "lodash";

export const useCssVars = (theme) =>
  transform(theme, (result, cssValue, cssKey) => {
    result[`--${cssKey}`] = cssValue;
  });
