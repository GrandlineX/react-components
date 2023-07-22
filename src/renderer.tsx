import React from 'react';
import '../themes/dev.scss';
import { createRoot } from 'react-dom/client';
import { Store } from './stories/layout/TabLayout.stories';
import { minimalProps } from './stories/layout/TabLayout.props';

const root = createRoot(document.getElementById('root')!);

const Comp = Store.render as React.FC<any>;
root.render(
  <div className="root root-dark">
    {/** ***************************************************** */}

    <Comp {...minimalProps} init />
  </div>,
);
