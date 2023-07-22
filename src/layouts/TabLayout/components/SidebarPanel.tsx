import React, { useEffect, useMemo } from 'react';
import { useAutoClose18 } from '../../../util/hooks';
import { PanelContext, PContext } from '../context/PanelContextContext';

export type SideBarPanelProps = {
  selectPanel: string | null;
  setPanel: (panel: string | null) => void;
  panelRenderer: React.ReactNode | null;
};
export const SidebarPanel: React.FC<{ c: SideBarPanelProps }> = function (
  props,
) {
  const { c } = props;
  const { selectPanel, setPanel, panelRenderer } = c;
  const [menuRef, open, setOpen] = useAutoClose18<HTMLDivElement>({
    extendSearch: 'sidebar-panel',
    noScip: true,
    closeFc: () => {
      setPanel(null);
    },
  });
  const context = useMemo(() => {
    return new PContext({ panel: selectPanel || 'none' });
  }, [selectPanel]);

  useEffect(() => {
    if (selectPanel && !open) {
      setOpen(true);
    } else if (!selectPanel && open) {
      setOpen(false);
    }
  }, [selectPanel, open, setOpen]);

  if (selectPanel === null) return null;

  return (
    <div
      ref={menuRef}
      className="sidebar-panel glx-animation-fade-in-super-fast"
    >
      <PanelContext.Provider value={context}>
        {panelRenderer}
      </PanelContext.Provider>
    </div>
  );
};
