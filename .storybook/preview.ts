import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "../css/style.css";
import "../css/dev.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#111',
        },
        {
          name: 'Light',
          value: '#FFF',
        },
      ],
    },
    themes: {
      default: 'Dark',
      list: [
        { name: 'Dark', color: '#111' },
        { name: 'Light', class: 'glx-theme-light', color: '#FFF' },
      ],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
