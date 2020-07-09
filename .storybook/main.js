const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/react",
    // "@storybook/preset-scss",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
