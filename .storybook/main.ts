import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
<<<<<<< HEAD
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
=======
  "stories": [
    "../src/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
>>>>>>> 61f249b0479bc50c1d78d64bfae9e50f3e38c149
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
<<<<<<< HEAD
  framework: "@storybook/react-vite"
};
export default config;
=======
  "framework": "@storybook/react-vite"
};
export default config;
>>>>>>> 61f249b0479bc50c1d78d64bfae9e50f3e38c149
