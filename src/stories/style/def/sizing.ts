import { StyleMeta } from '../lib';

const style: StyleMeta[] = [
  {
    className: 'glx-w-full',
    properties: [['width', '100%']],
    description: 'Width 100%',
  },
  {
    className: 'glx-w-half',
    properties: [['width', '50%']],
    description: 'Width 50%',
  },
  {
    className: 'glx-w-full-2',
    properties: [['width', 'calc(100% - 4px)']],
    description: 'Width 100% - 2px * 2',
  },
  {
    className: 'glx-w-full-4',
    properties: [['width', 'calc(100% - 8px)']],
    description: 'Width 100% - 4px * 2',
  },
  {
    className: 'glx-w-full-8',
    properties: [['width', 'calc(100% - 16px)']],
    description: 'Width 100% - 8px * 2',
  },
  {
    className: 'glx-w-full-12',
    properties: [['width', 'calc(100% - 24px)']],
    description: 'Width 100% - 12px * 2',
  },
  {
    className: 'glx-w-full-16',
    properties: [['width', 'calc(100% - 32px)']],
    description: 'Width 100% - 16px * 2',
  },
  {
    className: 'glx-h-full',
    properties: [['height', '100%']],
    description: 'Height 100%',
  },
  {
    className: 'glx-h-half',
    properties: [['height', '50%']],
    description: 'Height 50%',
  },
  {
    className: 'glx-h-full-2',
    properties: [['height', 'calc(100% - 4px)']],
    description: 'Height 100% - 2px * 2',
  },
  {
    className: 'glx-h-full-4',
    properties: [['height', 'calc(100% - 8px)']],
    description: 'Height 100% - 4px * 2',
  },
  {
    className: 'glx-h-full-8',
    properties: [['height', 'calc(100% - 16px)']],
    description: 'Height 100% - 8px * 2',
  },
  {
    className: 'glx-h-full-12',
    properties: [['height', 'calc(100% - 24px)']],
    description: 'Height 100% - 12px * 2',
  },
  {
    className: 'glx-h-full-16',
    properties: [['height', 'calc(100% - 32px)']],
    description: 'Height 100% - 16px * 2',
  },
  {
    className: 'glx-h-full-32',
    properties: [['height', 'calc(100% - 64px)']],
    description: 'Height 100% - 32px * 2',
  },
  {
    className: 'glx-layout-block',
    properties: [['width', '800px']],
    description: 'Layout block 800px, on size< 900px size = 100%',
  },
  {
    className: 'glx-layout-block-large',
    properties: [['width', '1000px']],
    description: 'Layout block 1000px, on size< 1100px size = 100%',
  },
  {
    className: 'glx-layout-block-extra-large',
    properties: [['width', '1200px']],
    description: 'Layout block 1200px, on size< 1300px size = 100%',
  },
  {
    className: 'glx-min-w-300',
    properties: [['min-width', '300px']],
    description: 'Min width 300px, on size< 400px size = 100%',
  },
  {
    className: 'glx-min-w-400',
    properties: [['min-width', '400px']],
    description: 'Min width 400px, on size< 500px size = 100%',
  },
  {
    className: 'glx-min-w-600',
    properties: [['min-width', '600px']],
    description: 'Min width 600px, on size< 700px size = 100%',
  },
  {
    className: 'glx-max-w-800',
    properties: [['max-width', '800px']],
    description: 'Max width 800px, on size< 900px size = 100%',
  },
  {
    className: 'glx-max-w-600',
    properties: [['max-width', '600px']],
    description: 'Max width 600px, on size< 640px size = 100%',
  },
];
export default style;
