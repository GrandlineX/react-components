import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-themes",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  staticDirs:[
      "../src/stories/assets",
  ]
};
export default config;
