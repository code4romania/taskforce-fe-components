const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
  ],
};
