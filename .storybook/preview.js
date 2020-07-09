import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
require("!style-loader!css-loader!sass-loader!../src/styles.scss");

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
