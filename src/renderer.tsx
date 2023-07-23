import React from 'react';
import '../themes/dev.scss';
import { createRoot } from 'react-dom/client';
import { Default as test } from './stories/components/PortalStepper.stories';
import PortalStepper from './components/controlls/PortalStepper/PortalStepper';
import { GLang, UIContext, UIContextData, useUIContext } from './util';

const root = createRoot(document.getElementById('root')!);

const context = new UIContextData({
  portalRoot: document.body,
  lang: new GLang(null),
});
const App = () => {
  const ui = useUIContext();

  return (
    <div>
      {ui.translation.get('test.translation')}
      <PortalStepper {...(test.args as any)} />
    </div>
  );
};

root.render(
  <div className="root root-dark">
    {/** ***************************************************** */}
    <UIContext.Provider value={context}>
      <App />
    </UIContext.Provider>
  </div>,
);
