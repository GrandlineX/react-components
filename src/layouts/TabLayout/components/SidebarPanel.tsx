import React, { useEffect } from 'react';
import { useAutoClose18 } from '../../../util/hooks';

export type SideBarPanelProps = {
  selectPanel: string | null;
  setPanel: (panel: string | null) => void;
  panelRenderer: (panel: string | null) => React.ReactNode;
};
export const SidebarPanel: React.FC<{ c: SideBarPanelProps }> = function (
  props
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
      {panelRenderer(selectPanel)}
    </div>
  );
};
