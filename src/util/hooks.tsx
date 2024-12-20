import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useActionState,
} from 'react';
import { TabItem, WCMode } from '../layouts/TabLayout/lib/index';

export function useQData<T>(
  q: () => Promise<T | null>,
  init?: T | undefined,
): [T | null | undefined, (dat: T | null | undefined) => void, () => void] {
  const [element, setElement] = useState<T | null | undefined>(init);
  async function refresh() {
    try {
      const res = await q();
      setElement(res);
    } catch (e) {
      console.error(e);
      setElement(null);
    }
  }
  useEffect(() => {
    if (element === undefined) {
      refresh();
    }
  });
  return [element, setElement, refresh];
}

/**
 *
 * @param q - Query function
 * @param init - Initial value
 * @return [state, isPending, refresh]
 */
export function useQData19<T>(
  q: () => Promise<T | null>,
  init?: Awaited<T | undefined>,
): [T | null | undefined, boolean, () => void] {
  const [state, formAction, isPending] = useActionState(async () => {
    return q();
  }, init);

  return [state, isPending, formAction];
}
export function useAsync<T>(
  callback: () => Promise<T>,
  dependencies: any[] = [],
): [T | undefined, boolean, any] {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState<T>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return [value, loading, error];
}

export function useAutoClose<T extends HTMLElement>(
  closeFc: () => void,
  disabeld: boolean,
  extendSearch?: string,
) {
  const menuRef = useRef<T>(null);

  const closeFunc = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      const es = extendSearch
        ? event.path?.find((el: any) => {
            return el.className === extendSearch;
          })
        : false;
      if (!es) {
        closeFc();
      }
    }
  };

  useEffect(() => {
    if (!disabeld) {
      document.addEventListener('click', closeFunc);
    }
    return () => {
      try {
        document.removeEventListener('click', closeFunc);
      } catch (e) {
        console.warn(e);
      }
    };
  }, [disabeld]);

  return menuRef;
}
export function useAutoClose18<T extends HTMLElement>({
  extendSearch,
  closeFc,
  init,
  noScip,
}: {
  extendSearch?: string;
  closeFc?: () => void;
  init?: boolean;
  noScip?: boolean;
}): [React.RefObject<T | null>, boolean, (x: boolean) => void] {
  const menuRef = useRef<T>(null);
  const [open, setOpen] = useState(init || false);

  const [skip, setSkip] = useState(noScip !== undefined ? !noScip : true);

  function xOpen(b: boolean) {
    if (!b) {
      setSkip(noScip !== undefined ? !noScip : true);
    }
    setOpen(b);
  }

  const closeFunc = (event: any) => {
    if (open && menuRef.current && !menuRef.current.contains(event.target)) {
      const es = extendSearch
        ? event.path?.find((el: any) => {
            return el.className === extendSearch;
          })
        : false;
      if (!es) {
        if (skip) {
          setSkip(false);
        } else {
          xOpen(false);
          closeFc?.();
        }
      }
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('click', closeFunc);
    }

    return () => {
      if (open) {
        document.removeEventListener('click', closeFunc);
      }
    };
  });

  return [menuRef, open, xOpen];
}

export function useTabStore() {
  const [panel, setPanel] = useState<string | null>(null);
  const [currentTabLeft, setCurrentTabLeft] = useState<number>(0);
  const [currentTabRight, setCurrentTabRight] = useState<number>(0);
  const [tabsLeft, setTabsLeft] = useState<TabItem[]>([]);
  const [tabsRight, setTabsRight] = useState<TabItem[]>([]);

  const moveTab = (
    key: string,
    dest: WCMode,
    target: WCMode,
    position?: number,
  ) => {
    if (dest === target) {
      return;
    }
    if (dest === 'left') {
      const tab = tabsLeft.find((e) => e.key === key);
      const nTabs = tabsLeft.filter((e) => e.key !== key);
      if (tab) {
        setTabsLeft(nTabs);
        setTabsRight([...tabsRight, tab]);
      }
    }
    if (dest === 'right') {
      const tab = tabsRight.find((e) => e.key === key);
      const nTabs = tabsRight.filter((e) => e.key !== key);
      if (tab) {
        setTabsRight(nTabs);
        setTabsLeft([...tabsLeft, tab]);
      }
    }
  };
  const addTab = (el: TabItem, pos: 'left' | 'right') => {
    if (pos === 'left') {
      const n = [...tabsLeft, el];
      setTabsLeft(n);
      setCurrentTabLeft(n.length - 1);
    } else {
      const n = [...tabsRight, el];
      setTabsRight(n);
      setCurrentTabRight(n.length - 1);
    }
  };
  const closeTab = (el: string, pos: 'left' | 'right') => {
    if (pos === 'left') {
      if (tabsLeft[currentTabLeft - 1]) {
        setCurrentTabLeft(currentTabLeft - 1);
      } else if (tabsLeft[0]) {
        setCurrentTabLeft(0);
      }
      setTabsLeft(tabsLeft.filter((e) => e.key !== el));
    } else {
      if (tabsRight[currentTabRight - 1]) {
        setCurrentTabRight(currentTabRight - 1);
      } else if (tabsLeft[0]) {
        setCurrentTabRight(0);
      }
      setTabsRight(tabsRight.filter((e) => e.key !== el));
    }
  };
  const setCurrentTab = (index: number, pos: 'left' | 'right') => {
    if (pos === 'left') {
      setCurrentTabLeft(index);
    } else {
      setCurrentTabRight(index);
    }
  };
  const reset = () => {
    setCurrentTabLeft(0);
    setCurrentTabRight(0);
    setTabsLeft([]);
    setTabsRight([]);
  };

  const tabState = {
    currentTabRight,
    currentTabLeft,
    tabsLeft,
    tabsRight,
    panel,
  };
  return {
    tabState,
    addTab,
    closeTab,
    moveTab,
    setCurrentTab,
    setPanel,
    reset,
  };
}

export type TStore = ReturnType<typeof useTabStore>;

/**
 * primary  {string}  Primary key 'ctrl' | 'shift' | 'alt' | 'meta'
 * secondary  {string}  Key code
 */
export type KeyBind = {
  key: {
    primary: 'ctrl' | 'shift' | 'alt' | 'meta';
    secondary: string;
  };
  action: () => void;
};
export function useKeyListener(binds: KeyBind[]) {
  const keys = useMemo(() => {
    const s = new Set<string>();
    binds.forEach((b) => {
      s.add(b.key.secondary);
    });
    return Array.from(s);
  }, [binds]);

  const keyDown = (event: KeyboardEvent) => {
    const k = event.code;
    if (keys.includes(k)) {
      const c = binds.find((b) => {
        if (b.key.secondary !== k) {
          return false;
        }
        switch (b.key.primary) {
          case 'ctrl':
            return event.ctrlKey;
          case 'shift':
            return event.shiftKey;
          case 'alt':
            return event.altKey;
          case 'meta':
            return event.metaKey;
          default:
            return false;
        }
      });
      if (c) {
        event.preventDefault();
        c.action();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDown);

    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  });
}

export function usePathQueryMap() {
  return useMemo(() => {
    const f = window.location.search.replace(/^\?/, '').split('&');
    const map = new Map<string, string>();
    for (const s of f) {
      const c = s.split('=');
      map.set(c[0], c[1]);
    }
    return map;
  }, []);
}
