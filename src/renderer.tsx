import React from 'react';
import '../themes/dev.scss';
import { createRoot } from 'react-dom/client';
import { Default as test } from './stories/components/PortalStepper.stories';
import PortalStepper from './components/controlls/PortalStepper/PortalStepper';

const root = createRoot(document.getElementById('root')!);

root.render(
  <div className="root root-dark">
    {/** ***************************************************** */}

    <PortalStepper {...(test.args as any)} />
  </div>,
);
