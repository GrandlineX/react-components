import React, { useState } from 'react';
import { IOInformationCircle } from '@grandlinex/react-icons';
import { Button } from '../../button/Button';
import Progress from '../Progress/Progress';
import Spinner from '../../loading/Spinner';
import { cnx } from '../../../util';

export type Step = {
  message?: string;
  render?: () => React.ReactNode | undefined;
  action?: () => Promise<boolean>;
  buttonText: string;
  buttonTextBack?: string;
};

function WizardStepper(props: {
  className?: string;
  title: string;
  steps: Step[];
  initStep?: number;
  width?: number | string;
  onStep?: (pos: number) => void;
}) {
  const { width, steps, title, className, initStep, onStep } = props;
  const [step, setStep] = useState<number>(initStep || 0);
  const [boxMessage, setBoxMessage] = useState<React.ReactNode | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { message, render, action, buttonText, buttonTextBack } = steps[step];
  const last = steps.length === step + 1;

  return (
    <div
      className={cnx('glx-default-text', 'row', className)}
      style={{ width }}
    >
      <div className="item">
        <h2>{title}</h2>
      </div>
      <Progress cur={step} max={steps.length} />
      <div className="item">
        <h3>
          {step + 1} / {steps.length}
        </h3>
      </div>
      {message && !loading ? (
        <div className="item">
          <div className="flex-row messageBox">
            <div className="row">
              <IOInformationCircle /> Info:
            </div>
            <div className="row">
              <span className="text">{message}</span>
            </div>
          </div>
        </div>
      ) : null}
      {boxMessage && !loading ? (
        <div className="item">
          <div className="flex-row messageBox messageBox--big">
            <div className="row">{boxMessage}</div>
          </div>
        </div>
      ) : null}
      {render?.()}
      {!loading ? (
        <div className="item">
          {buttonTextBack ? (
            <Button
              onClick={() => {
                setLoading(true);

                if (action) {
                  action?.().then((r) => {
                    if (step !== 0 && r) {
                      onStep?.(step - 1);
                      setStep((s) => s - 1);
                    }
                    setLoading(false);
                  });
                } else {
                  if (step !== 0) {
                    onStep?.(step - 1);
                    setStep((s) => s - 1);
                  }
                  setLoading(false);
                }
              }}
            >
              {buttonTextBack}
            </Button>
          ) : null}
          <Button
            onClick={() => {
              setLoading(true);

              if (action) {
                action?.().then((r) => {
                  if (!last && r) {
                    onStep?.(step + 1);
                    setStep((s) => s + 1);
                  }
                  setLoading(false);
                });
              } else {
                if (!last) {
                  onStep?.(step + 1);
                  setStep((s) => s + 1);
                }
                setLoading(false);
              }
            }}
          >
            {buttonText}
          </Button>
        </div>
      ) : null}
      {loading ? <Spinner /> : null}
    </div>
  );
}
export default WizardStepper;
