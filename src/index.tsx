import { GLXContext } from './util';

export * from './util';
export * from './util/hooks';
export * from './components';
export * from './layouts';
export * from '@grandlinex/react-icons';

declare global {
  interface Window {
    __glx: GLXContext;
  }
}
