import React from 'react';
import '../themes/dev.scss';
import { createRoot } from 'react-dom/client';
import { Default as test } from './stories/components/Form.stories';
import { GLang, UIContext, UIContextData, useUIContext } from './util';
import Tooltip from './components/tooltip/Tooltip';
import { Form } from './components';

const root = createRoot(document.getElementById('root')!);

const context = new UIContextData({
  portalRoot: document.body,
  lang: new GLang(null),
});
const App = () => {
  const ui = useUIContext();

  return (
    <div>
      <Tooltip text="HelloWorld">
        {ui.translation.get('test.translation')}
      </Tooltip>
      <Form {...(test.args as any)} />
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
