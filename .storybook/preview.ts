import type { Preview, ReactRenderer  } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "../css/style.css";
import "../css/dev.css";

import { withThemeByClassName } from '@storybook/addon-themes';

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

    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [withThemeByClassName<ReactRenderer>({
      defaultTheme: 'dark',
      themes:{
        dark: '',
        light: 'glx-theme-light',
      }
  })],
};

export default preview;
