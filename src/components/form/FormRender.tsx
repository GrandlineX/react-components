import React, { KeyboardEventHandler } from 'react';
import { IOCloseCircleOutline } from '@grandlinex/react-icons';

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
import { useUIContext } from '../../util';
import ImageSel from './inputs/ImageSel';
import FormDropdown from './inputs/FormDropdown';
import FormElement, { useFormElContext } from './FormElement';
import BadgeColorSelector from './inputs/BadgeColorSelector';

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

function ClearContainer({
  children,
  clear,
  show,
}: {
  show: boolean;
  children: React.ReactNode | React.ReactNode[];
  clear: () => void;
}) {
  return (
    <span className="glx-clear-container">
      {children}
      {show && (
        <div className="glx-clear-container-btn">
          <button onClick={clear}>
            <IOCloseCircleOutline />
          </button>
        </div>
      )}
    </span>
  );
}

export const DefaultInput = ({
  inp,
  e,
  numeric = false,
  form,
  updateForm,
  enterHandler,
  clearContainer,
}: {
  inp: InputOption;
  e: React.HTMLInputTypeAttribute;
  form: any;
  updateForm: (key: string, value: any) => void;
  enterHandler: KeyboardEventHandler<any>;
  numeric?: boolean;
  clearContainer?: () => void;
}) => {
  const field = useFormElContext();
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
  const comp = (
    <input
      type={e}
      required={required}
      onKeyUp={submitOnEnter ? enterHandler : undefined}
      value={form[key]}
      onFocus={() => field.setFocus(true)}
      onBlur={() => field.setFocus(false)}
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
  if (clearContainer && !inp.disabled) {
    return (
      <ClearContainer show={!!form[key]} clear={clearContainer}>
        {comp}
      </ClearContainer>
    );
  }
  return comp;
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
  const context = useUIContext();
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
            items,
            required,
            submitOnEnter,
            preload,
            onChange,
            disabled,
            autoFocus,
            accept,
            restriction,
            placeholder,
            help,
          } = cur;

          let helpText: React.ReactNode | undefined;
          let iType: React.ReactNode;
          let noDecoration = false;
          /**
           * Define controlled input
           * Important:
           * set the current value prop to `form[key]` - bind the field to the tab data
           * bind the change function to the tab data - calling  `updateForm(key, $inputVal)`;
           */
          switch (type) {
            case InputOptionType.DROPDOWN:
              iType = (
                <FormDropdown
                  key={key}
                  className="glx-input-dark glx-w-full glx-m-2"
                  value={form[key]}
                  autoFocus={autoFocus}
                  required={required}
                  disabled={disabled}
                  onChange={(ev) => {
                    onChange?.(ev.target.value);
                    updateForm(key, ev.target.value);
                  }}
                  items={items ?? []}
                />
              );

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
                  clearContainer={() => updateForm(key, '')}
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
              break;
            case InputOptionType.DATE:
              iType = (
                <DefaultInput
                  e="date"
                  form={form}
                  inp={cur}
                  updateForm={updateForm}
                  enterHandler={enterHandler}
                  clearContainer={() => updateForm(key, '')}
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
                  clearContainer={() => updateForm(key, '')}
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
                  clearContainer={() => updateForm(key, '')}
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
                  clearContainer={() => updateForm(key, '')}
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
                      event.target.value,
                    );
                    updateForm(key, event.target.value);
                  }}
                />
              );
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
              noDecoration = true;
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
              noDecoration = true;

              break;
            case InputOptionType.TAG_SELECTOR:
              helpText = context.translation.get(
                'glx.form.tagSelector.helpText',
              );
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
                    icon: e.icon ?? 'IOPricetagOutline',
                    color: e.meta,
                  }))}
                  maxOptions={restriction?.max}
                  onChange={(els, dif) => {
                    onChange?.(els, dif);
                    updateForm(key, els);
                  }}
                />
              );
              break;
            case InputOptionType.IMAGE_SELECT:
              iType = (
                <ImageSel
                  items={
                    items?.map((x) => ({
                      title: x.name,
                      ...x,
                      ...x.meta,
                    })) ?? []
                  }
                  extended={restriction?.extended}
                  maxStep={restriction?.max}
                  selected={form[key]}
                  onChange={(els) => {
                    onChange?.(els?.key);
                    updateForm(key, els?.key);
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
                  limit={restriction?.max || 20}
                  list={
                    items && items.length > 0
                      ? items.map((e) => e.meta)
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
            case InputOptionType.BADGE_COLOR_SELECTOR:
              iType = (
                <BadgeColorSelector
                  key={key}
                  disabled={disabled}
                  sel={form[key]}
                  onChange={(event) => {
                    onChange?.(event);
                    updateForm(key, event);
                  }}
                />
              );
              break;
            default:
              return null;
          }
          if (!helpText) {
            helpText = help;
          }
          return {
            ...cur,
            extension: {
              iType,
              noDecoration,
              helpText,
            },
          };
        });
        return (
          <div
            key={`container-${doList[0]?.key}`}
            className={`glx-form--input glx-form--sub-row glx-form--input--split-${option.length}`}
          >
            {input.map((v) =>
              v ? (
                <FormElement
                  element={v}
                  error={error?.field?.find((e) => e.key === v?.key)}
                  split={doList.length}
                >
                  {v.extension.iType}
                </FormElement>
              ) : null,
            )}
          </div>
        );
      })}
    </div>
  );
}
