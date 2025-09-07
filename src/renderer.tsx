import React from 'react';
import '../themes/dev.scss';
import { createRoot } from 'react-dom/client';
import { GLang, initDefaultGLXContext, UIContext, UIContextData } from './util';

const root = createRoot(document.getElementById('root')!);

initDefaultGLXContext();

const context = new UIContextData({
  portalRoot: document.body,
  lang: new GLang(null),
});

const App = () => {
  return null;
};

root.render(
  <div className="root root-dark">
    {/** ***************************************************** */}
    <UIContext.Provider value={context}>
      <App />
    </UIContext.Provider>
  </div>,
);
