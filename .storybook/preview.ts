import type { Preview, ReactRenderer  } from "@storybook/react-webpack5";
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
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
      options: {
        dark: {
          name: 'Dark',
          value: '#111',
        },

        gray: {
          name: 'Gray',
          value: '#212121',
        },

        light: {
          name: 'Light',
          value: '#FFF',
        }
      }
    },

    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    docs: {
      codePanel: true
    }
  },

  decorators: [withThemeByClassName<ReactRenderer>({
      defaultTheme: 'light',
      themes:{
        dark: '',
        light: 'glx-theme-light',
      }
  })],

  initialGlobals: {
    backgrounds: {
      value: 'dark'
    }
  }
};

export default preview;
