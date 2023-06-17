import React, { KeyboardEventHandler } from 'react';
import {
  FormConf,
  FormConfEl,
  FormErrorType,
  InputOption,
  InputOptionType,
} from './FormTypes';
import { TagSelector } from '../other/TagSelector/TagSelector';
import UserSelector from '../other/UserSelector/UserSelector';
import CheckBox from './inputs/CheckBox';
import IconSel from './inputs/IconSel';
import IconTextSel from './inputs/IconTextSel';
import ContentSwitcher from '../controlls/ContentSwitch/ContentSwitcher';
import { cnx } from '../../util';

/**
 * Get FormInputList
 * @param options
 */
export function getFormInputs(options: FormConf) {
  const out: InputOption[] = [];
  options.forEach((option) => {
    option.forEach((el) => {
      if (Array.isArray(el)) {
        out.push(...el);
      } else if (el) {
        out.push(el);
      }
    });
  });

  return out;
}

/**
 * Define Default value for empty field
 * @param options
 */

export function def(options: FormConf) {
  const dd: any = {};
  getFormInputs(options).forEach((sel) => {
    const { key, type, value } = sel;
    switch (type) {
      case InputOptionType.TAG_SELECTOR:
        dd[key] = value || [];
        break;
      case InputOptionType.CUSTOM:
        dd[key] = value || sel.customElement?.init || null;
        break;
      case InputOptionType.TEXT:
      case InputOptionType.TEXT_FIELD:
      case InputOptionType.PASSWORD:
      case InputOptionType.COLOR:
      case InputOptionType.TIME:
      case InputOptionType.DATE:
      case InputOptionType.DATE_TIME:
      case InputOptionType.USER_SELECTOR:
        dd[key] = value || '';
        break;
      case InputOptionType.NUMBER:
      case InputOptionType.RANGE:
      case InputOptionType.CONTENT_SWITCH:
        dd[key] = value || 0;
        break;
      case InputOptionType.DROPDOWN:
        dd[key] = sel.items?.[0]?.key || '';
        break;
      case InputOptionType.CHECKBOX:
        dd[key] = value || false;
        break;
      default:
        break;
    }
  });
  return dd;
}

export const DefaultInput = ({
  inp,
  e,
  numeric,
  form,
  updateForm,
  enterHandler,
}: {
  inp: InputOption;
  e: React.HTMLInputTypeAttribute;
  form: any;
  updateForm: (key: string, value: any) => void;
  enterHandler: KeyboardEventHandler<any>;
  numeric?: boolean;
}) => {
  const {
    key,
    submitOnEnter,
    restriction,
    placeholder,
    disabled,
    autoFocus,
    readOnly,
    autoComplete,
    onChange,
    required,
  } = inp;
  return (
    <input
      type={e}
      required={required}
      onKeyUp={submitOnEnter ? enterHandler : undefined}
      value={form[key]}
      min={restriction?.min}
      max={restriction?.max}
      autoFocus={autoFocus}
      placeholder={placeholder}
      readOnly={readOnly}
      pattern={restriction?.pattern}
      disabled={disabled}
      autoComplete={autoComplete ? 'on' : 'off'}
      onChange={(event) => {
        if (numeric) {
          onChange?.(parseFloat(event.target.value));
          updateForm(key, parseFloat(event.target.value));
        } else {
          onChange?.(event.target.value);
          updateForm(key, event.target.value);
        }
      }}
    />
  );
};
DefaultInput.defaultProps = {
  numeric: false,
};

/**
 * Define how to render the Element Row
 */
export function FormRow({
  option,
  form,
  updateForm,
  submitForm,
  error,
}: {
  option: FormConfEl[];
  form: any;
  updateForm: (key: string, value: any) => void;
  submitForm: () => void;
  error: FormErrorType | null | undefined;
}) {
  const enterHandler: KeyboardEventHandler<any> = (e) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
      submitForm();
    }
    return null;
  };

  return (
    <div
      key={option.reduce((acc, cur) => {
        return acc + cur && Array.isArray(cur)
          ? cur.reduce((a, c) => {
              return a + c.key;
            }, '')
          : (cur as any)?.key || '';
      }, '')}
      className="glx-form--row"
    >
      {option.map((opt) => {
        if (!opt) {
          return null;
        }
        let doList: InputOption[];
        if (Array.isArray(opt)) {
          doList = opt;
        } else {
          doList = [opt];
        }

        const input = doList.map((cur) => {
          const {
            type,
            key,
            label,
            hint,
            items,
            required,
            submitOnEnter,
            preload,
            onChange,
            disabled,
            autoFocus,
            accept,
            restriction,
            org,
            placeholder,
          } = cur;

          let iType: React.ReactNode;
          let noUnderline = false;
          /**
           * Define controlled input
           * Important:
           * set the current value prop to `form[key]` - bind the field to the tab data
           * bind the change function to the tab data - calling  `updateForm(key, $inputVal)`;
           */
          switch (type) {
            case InputOptionType.DROPDOWN:
              iType = (
                <select
                  key={key}
                  className="glx-input-dark glx-w-full glx-m-2"
                  value={form[key]}
                  autoFocus={autoFocus}
                  required={required}
                  placeholder={placeholder}
                  disabled={disabled}
                  onChange={(ev) => {
                    onChange?.(ev.target.value);
                    updateForm(key, ev.target.value);
                  }}
                >
                  {items?.map((el) => (
                    <option key={el.key} value={el.key}>
                      {el.name}
                    </option>
                  ))}
                </select>
              );
              noUnderline = true;
              break;
            case InputOptionType.CUSTOM:
              iType = cur.customElement?.render(key, form, updateForm, items);
              break;
            case InputOptionType.TEXT:
              iType = (
                <DefaultInput
                  e="text"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                />
              );
              break;
            case InputOptionType.RANGE:
              iType = (
                <DefaultInput
                  e="range"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                />
              );
              break;
            case InputOptionType.COLOR:
              iType = (
                <DefaultInput
                  e="color"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                />
              );
              noUnderline = true;

              break;
            case InputOptionType.DATE:
              iType = (
                <DefaultInput
                  e="date"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                />
              );
              break;
            case InputOptionType.TIME:
              iType = (
                <DefaultInput
                  e="time"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                />
              );
              break;
            case InputOptionType.DATE_TIME:
              iType = (
                <DefaultInput
                  e="datetime-local"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                />
              );
              break;
            case InputOptionType.NUMBER:
              iType = (
                <DefaultInput
                  e="number"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                  numeric
                />
              );
              break;
            case InputOptionType.PASSWORD:
              iType = (
                <DefaultInput
                  e="password"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                />
              );
              break;
            case InputOptionType.FILE:
              iType = (
                <input
                  key={key}
                  type="file"
                  required={required}
                  onKeyUp={submitOnEnter ? enterHandler : undefined}
                  placeholder={placeholder}
                  accept={accept}
                  autoFocus={autoFocus}
                  disabled={disabled}
                  onChange={(event) => {
                    onChange?.(
                      event.target.files?.[0] || null,
                      event.target.value
                    );
                    updateForm(key, event.target.value);
                  }}
                />
              );
              noUnderline = true;

              break;
            case InputOptionType.ICON_TEXT:
              iType = (
                <IconTextSel
                  key={key}
                  onChange={(d) => {
                    onChange?.(d);
                    updateForm(key, d);
                  }}
                  disabled={disabled}
                  placeholder={placeholder}
                  sel={form[key]}
                />
              );
              break;
            case InputOptionType.CHECKBOX:
              iType = (
                <div>
                  <CheckBox
                    key={key}
                    disabled={disabled}
                    checked={form[key]}
                    large
                    onChange={() => {
                      onChange?.(!form[key]);
                      updateForm(key, !form[key]);
                    }}
                  />
                </div>
              );
              break;
            case InputOptionType.ICON:
              iType = (
                <div>
                  <IconSel
                    key={key}
                    disabled={disabled}
                    sel={form[key]}
                    onChange={(x) => {
                      onChange?.(x);
                      updateForm(key, x);
                    }}
                  />
                </div>
              );
              break;
            case InputOptionType.CONTENT_SWITCH:
              iType = (
                <div key={key}>
                  <ContentSwitcher
                    selectedIndex={form[key] ?? 0}
                    onChange={(x) => {
                      onChange?.(x);
                      updateForm(key, x);
                    }}
                    items={items ?? []}
                  />
                </div>
              );
              noUnderline = true;

              break;
            case InputOptionType.TAG_SELECTOR:
              iType = (
                <TagSelector
                  key={key}
                  placeholder={placeholder}
                  disabled={disabled}
                  value={form[key]}
                  autoFocus={autoFocus}
                  items={items?.map((e) => ({
                    key: e.key,
                    text: e.name,
                    icon: e.icon || 'IOPricetagOutline',
                    color: e.other,
                  }))}
                  onChange={(els, dif) => {
                    onChange?.(els, dif);
                    updateForm(key, els);
                  }}
                />
              );
              break;
            case InputOptionType.USER_SELECTOR:
              iType = (
                <UserSelector
                  key={key}
                  placeholder={placeholder}
                  disabled={disabled}
                  value={form[key]}
                  onChange={(els) => {
                    onChange?.(els);
                    updateForm(key, els);
                  }}
                  searchFC={preload}
                  list={
                    items && items.length > 0
                      ? items.map((e) => e.other)
                      : undefined
                  }
                />
              );
              break;
            case InputOptionType.TEXT_FIELD:
              iType = (
                <textarea
                  key={key}
                  placeholder={placeholder}
                  required={required}
                  disabled={disabled}
                  value={form[key]}
                  autoFocus={autoFocus}
                  onChange={(event) => {
                    onChange?.(event.target.value);
                    updateForm(key, event.target.value);
                  }}
                  rows={restriction?.rows ?? 5}
                />
              );
              break;
            default:
              return null;
          }
          return { iType, key, label, required, noUnderline };
        });
        return (
          <div
            key={`container-${doList[0]?.key}`}
            className={`glx-form--input glx-form--sub-row glx-form--input--split-${option.length}`}
          >
            {input.map((value) => (
              <div
                key={`sub-container-${value?.key}`}
                className={cnx(
                  `glx-form--input glx-form--input--split-${input.length}`,
                  [!value?.noUnderline, 'glx-form--underline']
                )}
              >
                {value?.label ? (
                  <div className="glx-form--label">
                    {value.label}{' '}
                    {value.required ? (
                      <span className="glx-form--error-text">*</span>
                    ) : null}
                  </div>
                ) : null}
                {value?.iType}
                {(() => {
                  const fieldErr = error?.field?.find(
                    (e) => e.key === value?.key
                  );
                  if (fieldErr) {
                    return (
                      <span className="glx-form--error-text">
                        {fieldErr.message}
                      </span>
                    );
                  }
                  return null;
                })()}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
