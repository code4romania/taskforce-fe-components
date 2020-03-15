module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/react",
    "@storybook/preset-scss",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    '@storybook/addon-knobs/register'
  ]
};
