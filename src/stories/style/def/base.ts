import { StyleMeta } from '../lib';

const style: StyleMeta[] = [
  {
    className: 'glx-no-select',
    properties: [
      ['-webkit-touch-callout', 'none'],
      ['-webkit-user-select', 'none'],
      ['-khtml-user-select', 'none'],
      ['-moz-user-select', 'none'],
      ['-ms-user-select', 'none'],
      ['user-select', 'none'],
    ],
    description: 'Disable text selection',
  },
  {
    className: 'glx-default-text',
    properties: [
      ['color', '$main-text'],
      ['::-moz-selection', `color: $main-background; background: $main-text;`],
      ['::selection', `color: $main-background; background: $main-text;`],
    ],
    description: 'Default text color',
  },
  {
    className: 'glx-no-scroll',
    properties: [
      ['-ms-overflow-style', 'none'],
      ['scrollbar-width', 'none'],
    ],
    description: 'Disable scrollbars',
  },
  {
    className: 'glx-underline',
    properties: [['text-decoration', 'underline']],
    description: 'Underline text',
  },

  {
    className: 'glx-break-word',
    properties: [['overflow-wrap', 'break-word']],
    description: 'Break word',
  },
  {
    className: 'glx-bold',
    properties: [['font-weight', 'bold']],
    description: 'Bold text',
  },
  {
    className: 'glx-pointer',
    properties: [['cursor', 'pointer']],
    description: 'Pointer cursor',
  },
  {
    className: 'glx-electron-drag',
    properties: [['-webkit-app-region', 'drag']],
    description: 'Electron drag',
  },
  {
    className: 'glx-electron-no-drag',
    properties: [['-webkit-app-region', 'no-drag']],
    description: 'Electron no drag',
  },
  {
    className: 'glx-hidden',
    properties: [['visibility', 'hidden']],
    description: 'Hidden',
  },
  {
    className: 'glx-gone',
    properties: [['display', 'none']],
    description: 'Gone',
  },
];
export default style;
