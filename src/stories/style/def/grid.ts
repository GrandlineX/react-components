import { StyleMeta } from '../lib';

const style: StyleMeta[] = [
  {
    className: 'glx-flex',
    properties: [['display', 'flex']],
  },
  {
    className: 'glx-flex-r',
    extend: ['glx-flex'],
    properties: [['flex-direction', 'row']],
  },
  {
    className: 'glx-flex-row',
    extend: ['glx-flex-r'],
    properties: [['width', '100%']],
  },
  {
    className: 'glx-flex-c',
    extend: ['glx-flex'],
    properties: [['flex-direction', 'column']],
  },
  {
    className: 'glx-flex-column',
    extend: ['glx-flex-c'],
    properties: [['width', '100%']],
  },
  {
    className: 'glx-flex-v-center',
    properties: [['align-items', 'center']],
  },
  {
    className: 'glx-flex-h-center',
    properties: [['justify-content', 'center']],
  },
  {
    className: 'glx-flex-center',
    extend: ['glx-flex-v-center', 'glx-flex-h-center'],
    properties: [['height', '100%']],
  },
  {
    className: 'glx-flex-start',
    properties: [['justify-content', 'flex-start']],
  },
  {
    className: 'glx-flex-end',
    properties: [['justify-content', 'flex-end']],
  },
  {
    className: 'glx-flex-space-between',
    properties: [['justify-content', 'space-between']],
  },
  {
    className: 'glx-flex-space-around',
    properties: [['justify-content', 'space-around']],
  },
  {
    className: 'glx-flex-wrap',
    properties: [['flex-wrap', 'wrap']],
  },
  {
    className: 'glx-flex-nowrap',
    properties: [['flex-wrap', 'nowrap']],
  },
  {
    className: 'glx-flex-g-0',
    properties: [['gap', '0']],
  },
  {
    className: 'glx-flex-g-2',
    properties: [['gap', '2px']],
  },
  {
    className: 'glx-flex-g-4',
    properties: [['gap', '4px']],
  },
  {
    className: 'glx-flex-g-6',
    properties: [['gap', '6px']],
  },
  {
    className: 'glx-flex-g-8',
    properties: [['gap', '8px']],
  },
  {
    className: 'glx-flex-g-10',
    properties: [['gap', '10px']],
  },
  {
    className: 'glx-flex-g-12',
    properties: [['gap', '12px']],
  },
  {
    className: 'glx-flex-g-24',
    properties: [['gap', '24px']],
  },
  {
    className: 'glx-flex-grow-0',
    properties: [['flex-grow', '0']],
  },
  {
    className: 'glx-flex-grow-1',
    properties: [['flex-grow', '1']],
  },
  {
    className: 'glx-flex-grow-2',
    properties: [['flex-grow', '2']],
  },
  {
    className: 'glx-mobile-wrap',
    properties: [['flex-direction', 'row']],
    description: `on max-width: >900px flex-direction: column`,
  },
  {
    className: 'glx-layout-1-3',
    properties: [['flex-basis', '33.33%']],
  },
  {
    className: 'glx-layout-2-3',
    properties: [['flex-basis', '66.66%']],
  },
  {
    className: 'glx-layout-1-2',
    properties: [['flex-basis', '50%']],
  },
];
export default style;
