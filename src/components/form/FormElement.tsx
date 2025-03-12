import React, { useContext, useMemo, useState } from 'react';
import { IOHelpCircleOutline } from '@grandlinex/react-icons';
import { cnx, useUIContext } from '../../util';
import Tooltip from '../tooltip/Tooltip';
import { InputOption, InputOptionType } from './FormTypes';

export type FormElementContext = InputOption<any> & {
  setDecoration: (value: boolean) => void;
  setFocus: (value: boolean) => void;
  focus: boolean;
  decoration: boolean;
};
const defaultFormElementContext: FormElementContext = {
  key: '',
  className: '',
  label: '',
  type: InputOptionType.EMPTY,
  required: false,
  setDecoration: () => {},
  setFocus: () => {},
  focus: false,
  decoration: false,
};
const FormElContext = React.createContext(defaultFormElementContext);

const useFormElContext = () => {
  return useContext(FormElContext);
};

export { FormElContext, useFormElContext };

export default function FormElement<T>({
  element,
  children,
  error,
  split,
}: {
  element: InputOption<T> & {
    extension: {
      noDecoration: boolean;
      helpText?: React.ReactNode;
    };
  };
  children: React.ReactNode | React.ReactNode[];
  split: number;
  error: { key: string; message: string } | null | undefined;
}) {
  const uiContext = useUIContext();
  const decType = useMemo(
    () => element.decorationType || uiContext.decoration,
    [element.decorationType, uiContext.decoration],
  );
  const { key, className, label, required, extension, disabled } = element;
  const { noDecoration, helpText } = extension;
  const [focus, setFocus] = useState(false);
  const [decoration, setDecoration] = useState(!noDecoration);

  const context = useMemo<FormElementContext>(() => {
    return {
      ...element,
      setDecoration,
      setFocus,
      focus,
      decoration,
    };
  }, [element, focus, decoration]);

  return (
    <FormElContext.Provider value={context}>
      <fieldset
        key={`sub-container-${key}`}
        className={cnx(
          `glx-form--input glx-form--input--split-${split} glx-form--input--container`,
          [decoration && decType === 'underline', 'glx-form--underline'],
          [decoration && decType === 'outline', 'glx-form--outline'],
          [!decoration, 'glx-form--no-decoration'],
          [!!disabled, 'glx-form--disabled'],
          [focus, 'glx-form--focus'],
          [!!error, 'glx-form-field--error'],
          className,
        )}
      >
        {label ? (
          <legend>
            <div className="glx-form--label">
              {label}{' '}
              {required ? (
                <span className="glx-form--error-text">*</span>
              ) : null}
              {helpText && (
                <Tooltip text={helpText} preLine>
                  <IOHelpCircleOutline size={16} />
                </Tooltip>
              )}
            </div>
          </legend>
        ) : null}

        {children}
        {(() => {
          const fieldErr = error;
          if (fieldErr) {
            return (
              <span className="glx-form--error-text">{fieldErr.message}</span>
            );
          }
          return null;
        })()}
      </fieldset>
    </FormElContext.Provider>
  );
}
