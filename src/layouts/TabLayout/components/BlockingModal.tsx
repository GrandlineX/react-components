import React from 'react';
import LPulse from '../../../components/loading/LPulse';

export type ModalProps = {
  message: string;
  progress?: string;
};
export function BlockingModal(props: ModalProps) {
  const { message, progress } = props;
  return (
    <div className="tab-layout--modal glx-flex-c glx-flex-center glx-no-select glx-flex-g-12 glx-animation-fade-in-super-fast">
      <div>
        <LPulse />
      </div>
      <div>{message}</div>
      <div>{progress}</div>
    </div>
  );
}
