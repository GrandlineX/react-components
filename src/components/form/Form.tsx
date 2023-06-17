import React, { useState } from 'react';
import { FormErrorType, FormProps } from './FormTypes';
import { def, getFormInputs, FormRow } from './FormRender';
import { cnx, uuid } from '../../util';
import LPulse from '../loading/LPulse';
import { Button } from '../button/Button';
import Grid from '../layout/Grid/Grid';
import { classN } from '../lib';

const Form: React.FC<FormProps> = (props) => {
  const {
    options,
    onChange,
    submit,
    title,
    defaultState,
    defaultError,
    className,
    compact,
  } = props;
  const [form, setForm] = useState(defaultState || def(options));
  const [spinning, setSpinning] = useState<boolean | null | undefined>(
    undefined
  );
  const [error, setError] = useState<FormErrorType | null | undefined>(
    undefined
  );

  const updateForm = (key: string, value: any) => {
    const out = {
      ...form,
    };
    out[key] = value;
    if (onChange) {
      onChange(out);
    }
    setForm(out);
  };
  const fError = defaultError || error;
  const submitForm = () => {
    if (submit) {
      if (submit.loading) {
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
      submit
        .onSubmit(pre, setError, () => {
          setForm(def(options));
          setError(undefined);
        })
        .then(() => {
          if (submit.loading) {
            setSpinning(false);
          }
        });
    }
  };

  return (
    <Grid
      className={classN(
        ['glx-form', [!!compact, 'glx-form--compact']],
        className
      )}
    >
      {title}
      {spinning ? (
        <LPulse />
      ) : (
        options.map((el) => (
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
            option={el}
            form={form}
            updateForm={updateForm}
            submitForm={submitForm}
            error={fError}
          />
        ))
      )}
      {spinning && submit?.loadingMessage ? (
        <div className="glx-py-12">{submit.loadingMessage}</div>
      ) : null}

      <div
        className={cnx(
          'glx-form--row',
          'glx-flex-row',
          'glx-flex-wrap',
          'glx-flex-g-8',
          [!!submit?.buttonCenter, 'glx-flex-center']
        )}
      >
        {fError?.global && fError.global.length > 0
          ? fError.global?.map((er: any, index) => {
              return (
                <div key={uuid()} className="glx-form--error">
                  {' '}
                  <div>{er}</div>{' '}
                </div>
              );
            })
          : null}
      </div>

      {submit && !spinning ? (
        <div
          className={cnx(
            'glx-form--button-row',
            'glx-flex-row',
            'glx-flex-g-4',
            'glx-pr-8',
            [!!submit.buttonCenter, 'glx-flex-center', 'glx-flex-end']
          )}
        >
          {submit.buttonNode ? (
            submit.buttonNode(submitForm)
          ) : (
            <Button cancel disabled={spinning || false} onClick={submitForm}>
              {submit.buttonText || `Submit`}
            </Button>
          )}
        </div>
      ) : null}
    </Grid>
  );
};

export default Form;
