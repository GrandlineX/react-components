import React, { useState } from 'react';
import { FormErrorType, FormProps, FormTypes } from './FormTypes';
import { def, FormRow, getFormInputs } from './FormRender';
import { cnx, useUIContext, uuid } from '../../util';
import LPulse from '../loading/LPulse';
import { Button } from '../button/Button';
import { Grid } from '../Grid/Grid';
import { classN } from '../lib';
import { requiredFieldValidation } from './FormValidation';

function Form<T extends Record<string, any> = any>({
  title,
  options,
  onChange,
  onSubmit,
  buttonText,
  buttonNode,
  buttonCenter,
  loading,
  loadingNode,
  loadingMessage,
  defaultState,
  defaultError,
  className,
  compact,
}: Readonly<FormProps<T>>) {
  const ui = useUIContext();
  const [form, setForm] = useState(defaultState || def(options));
  const [spinning, setSpinning] = useState<boolean | null | undefined>(
    undefined,
  );
  const [error, setError] = useState<FormErrorType | null | undefined>(
    undefined,
  );

  const validate = (set?: boolean) => {
    const err = requiredFieldValidation(options, form, ui.translation);
    if (set && err) {
      setError(err);
    }
    return err;
  };

  const updateForm = (key: string, value: FormTypes) => {
    const out = {
      ...form,
    };
    out[key] = value;
    setForm(out);
    if (onChange) {
      onChange({
        form: out,
        setError,
        update: setForm,
        validateRequired: validate,
        changed: { key, value },
        clear: () => {
          setForm(def(options));
          setError(undefined);
        },
      });
    }
  };
  const fError = defaultError || error;
  const submitForm = () => {
    if (onSubmit) {
      if (loading) {
        setSpinning(true);
      }
      setError(undefined);
      const pre: any = {};
      const fKey = Object.keys(form);
      const inpList = getFormInputs(options);
      for (const key of fKey) {
        const opt = inpList?.find((el) => el.key === key)?.beforeSubmit;
        if (opt) {
          pre[key] = opt(form[key]);
        } else {
          pre[key] = form[key];
        }
      }
      onSubmit({
        form: pre,
        setError,
        changed: null,
        update: setForm,
        validateRequired: validate,
        clear: () => {
          setForm(def(options));
          setError(undefined);
        },
      }).then(() => {
        if (loading) {
          setSpinning(false);
        }
      });
    }
  };

  return (
    <Grid
      className={classN(
        [
          'glx-form',
          [compact === true, 'glx-form--compact'],
          [compact === 'full', 'glx-form--compact-full'],
        ],
        className,
      )}
    >
      {title}
      {spinning
        ? loadingNode || <LPulse />
        : options.map((el) => {
            const elx = el.filter((e) => (e?.showOn ? e.showOn(form) : true));
            if (elx.length === 0) {
              return null;
            }
            return (
              <FormRow
                key={el.reduce((a, b) => {
                  if (!b) {
                    return `${a}_empty`;
                  }
                  if (Array.isArray(b)) {
                    return `${a}_${b.map((dx) => dx.key).join('_')}`;
                  }
                  return `${a}_${b.key}`;
                }, '')}
                option={elx}
                form={form}
                updateForm={updateForm}
                submitForm={submitForm}
                error={fError}
              />
            );
          })}
      {spinning && loadingMessage ? (
        <div className="glx-py-12">{loadingMessage}</div>
      ) : null}

      {fError && (
        <div
          className={cnx(
            'glx-form--row',
            'glx-flex-row',
            'glx-flex-wrap',
            'glx-flex-g-8',
            [!!buttonCenter, 'glx-flex-center'],
          )}
        >
          {fError?.global && fError.global.length > 0
            ? fError.global?.map((er: any) => {
                return (
                  <div key={uuid()} className="glx-form--error">
                    {' '}
                    <div>{er}</div>{' '}
                  </div>
                );
              })
            : null}
        </div>
      )}

      {onSubmit && !spinning ? (
        <div
          className={cnx(
            'glx-form--button-row',
            'glx-flex-row',
            'glx-flex-g-4',
            'glx-pr-8',
            [!!buttonCenter, 'glx-flex-center', 'glx-flex-end'],
          )}
        >
          {buttonNode ? (
            buttonNode(submitForm)
          ) : (
            <Button cancel disabled={spinning || false} onClick={submitForm}>
              {buttonText || ui.translation.get('glx.form.required.submit')}
            </Button>
          )}
        </div>
      ) : null}
    </Grid>
  );
}

export default Form;
