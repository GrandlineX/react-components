import React, {
  createRef,
  CSSProperties,
  RefObject,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IOChevronDown, IOChevronForward } from '@grandlinex/react-icons';
import ContentSwitcher from '../ContentSwitch/ContentSwitcher';
import { IconButton } from '../../button/IconButton';
import { cnx, useCnx } from '../../../util';

export interface PortStepperConf {
  key: string;
  name: string;
  headerName?: string;
  hidden?: boolean;
  collapsed?: boolean;
  collapse?: boolean;
  render?: React.ReactNode;
}

export interface PortStepperProps {
  className?: string;
  collapse?: boolean;
  offset?: number;
  style?: CSSProperties;
  conf: PortStepperConf[];
  width?: number | string;
  height?: number | string;
}

function getPos(
  ref: RefObject<HTMLDivElement | null> | null,
  offset?: number,
): number {
  if (!ref || !ref.current) {
    return -1;
  }
  const min = ref.current.offsetTop || 0;
  return min - (offset || 0);
}

function scrollTo(
  container: RefObject<HTMLDivElement | null> | null,
  element: RefObject<HTMLDivElement | null> | null,
  offset?: number,
): boolean {
  if (!container || !container.current || !element) {
    return false;
  }

  container.current.scrollTo({
    top: getPos(element, offset),
    left: 0,
    behavior: 'smooth',
  });

  return true;
}

const PortalStepperEl = (props: {
  rRef: RefObject<HTMLDivElement | null>;
  el: PortStepperConf;
  collapse?: boolean;
}) => {
  const { rRef, el, collapse } = props;
  const [open, setOpen] = useState(!el.collapsed);
  return (
    <div ref={rRef} key={el.key}>
      <h4>
        <span
          className={cnx([!!collapse, 'glx-pointer'])}
          onClick={() => setOpen(!open)}
        >
          {el.headerName ?? el.name}
        </span>
        {collapse ? (
          <IconButton className="glx-mx-8" onClick={() => setOpen(!open)}>
            {open ? <IOChevronDown /> : <IOChevronForward />}
          </IconButton>
        ) : null}
      </h4>
      {(collapse && open) || !collapse ? <div>{el.render}</div> : null}
    </div>
  );
};
const PortalStepper = (props: PortStepperProps) => {
  const { width, height, conf, className, offset = 0, style, collapse } = props;
  const cName = useCnx('portal-stepper-main', className);
  const [cur, setCur] = useState<number>(0);
  const refField = useMemo<RefObject<HTMLDivElement | null>[]>(
    () => conf.map(() => createRef<HTMLDivElement | null>()),
    [conf],
  );
  const bodyRef = createRef<HTMLDivElement>();

  const scrollFc = (event: Event) => {
    const container = event.target as HTMLDivElement;
    const { scrollTop, scrollHeight, offsetHeight } = container;

    let last = null;

    refField.forEach((el, index) => {
      const pos = getPos(el, (offset || 0) + 10);
      if (pos < scrollTop && pos !== -1) {
        last = index;
      }
    });

    if (scrollTop + offsetHeight === scrollHeight) {
      last = refField.length - 1;
    }
    if ((last && last < 0) || !last || conf[last].hidden) {
      last = conf.findIndex((e) => !e.hidden);
    }

    setCur(last || 0);
  };
  useEffect(() => {
    const rr = bodyRef.current;
    rr?.addEventListener('scroll', scrollFc);
    return () => {
      rr?.removeEventListener('scroll', scrollFc);
    };
  });
  return (
    <div style={{ ...style, width, height }} className={cName}>
      <ContentSwitcher
        parentState={[cur, setCur]}
        onChange={(el) => {
          const sel = el.index as number;
          setCur(sel);
          const tar = refField[sel];
          scrollTo(bodyRef, tar, offset);
        }}
        items={conf}
      />

      <div ref={bodyRef} className="portal-stepper--content">
        {conf.map((el, index) =>
          el.hidden ? null : (
            <PortalStepperEl
              key={el.key}
              rRef={refField[index]}
              el={el}
              collapse={el.collapse ?? collapse}
            />
          ),
        )}
      </div>
    </div>
  );
};
export default PortalStepper;
