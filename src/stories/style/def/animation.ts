import { StyleMeta } from '../lib';

const style: StyleMeta[] = [
  {
    className: 'glx-animated-background',
    properties: [
      ['animation-duration', '1.25s'],
      ['animation-fill-mode', 'forwards'],
      ['animation-iteration-count', 'infinite'],
      ['animation-name', 'placeHolderShimmer'],
      ['animation-timing-function', 'linear'],
      ['background', 'transparent'],
      ['background', 'linear-gradient(...) 33%)'],
      ['background-size', '800px 104px'],
      ['position', 'relative'],
    ],
    description: 'Animated background - placeholder shimmer',
  },

  {
    className: 'glx-animation-fade-in-super-fast',
    properties: [
      ['animation', 'fadeIn 0.5s'],
      ['-webkit-animation', 'fadeIn 0.5s'],
      ['-moz-animation', 'fadeIn 0.5s'],
      ['-o-animation', 'fadeIn 0.5s'],
      ['-ms-animation', 'fadeIn 0.5s'],
    ],
    description: 'Fade in super fast',
  },
  {
    className: 'glx-animation-fade-in-fast',
    properties: [
      ['animation', 'fadeIn 1s'],
      ['-webkit-animation', 'fadeIn 1s'],
      ['-moz-animation', 'fadeIn 1s'],
      ['-o-animation', 'fadeIn 1s'],
      ['-ms-animation', 'fadeIn 1s'],
    ],
    description: 'Fade in fast',
  },
  {
    className: 'glx-animation-fade-in-slow',
    properties: [
      ['animation', 'fadeIn 5s'],
      ['-webkit-animation', 'fadeIn 5s'],
      ['-moz-animation', 'fadeIn 5s'],
      ['-o-animation', 'fadeIn 5s'],
      ['-ms-animation', 'fadeIn 5s'],
    ],
    description: 'Fade in slow',
  },
];
export default style;
