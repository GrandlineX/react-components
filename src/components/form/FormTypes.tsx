import React, { FC, ReactNode } from 'react';
import { INames } from '@grandlinex/react-icons';
import { BaseProps } from '../lib';
import { DecorationType } from '../../util';

export type FormTypes =
  | string
  | number
  | null
  | boolean
  | undefined
  | string[]
  | Record<string, any>
  | FileList;

export type FormConfEl<T> = InputOption<T> | null;
export type FormConf<T> = FormConfEl<T>[][];

export enum InputOptionType {
  'EMPTY',
  'TEXT',
  'TEXT_FIELD',
  'NUMBER',
  'PASSWORD',
  'DROPDOWN',
  'DATE',
  'TIME',
  'DATE_TIME',
  'COLOR',
  'RANGE',
  'CHECKBOX',
  'FILE',
  'CUSTOM',
  'TAG_SELECTOR',
  'USER_SELECTOR',
  'ICON',
  'ICON_TEXT',
  'CONTENT_SWITCH',
  'IMAGE_SELECT',
  'BADGE_COLOR_SELECTOR',
}

export interface InputOptionItem<X = any> {
  key: string;
  name: string;
  disabled?: boolean;
  icon?: INames;
  meta?: X;
}

export interface InputOption<T> {
  key: string;
  className?: string;
  label?: React.ReactNode;
  type: InputOptionType;
  help?: React.ReactNode;
  submitOnEnter?: boolean;
  required?: boolean;
  value?: FormTypes;
  accept?: string;
  hint?: string;
  items?: InputOptionItem[];
  disabled?: boolean;
  placeholder?: string;
  restriction?: {
    pattern?: string;
    min?: number;
    max?: number;
    rows?: number;
    extended?: boolean;
    multiple?: boolean;
  };
  autoComplete?: 'on' | 'off';
  showOn?: (form: T) => boolean;
  autoFocus?: boolean;
  readOnly?: boolean;
  beforeSubmit?: (value: FormTypes) => FormTypes;
  preload?: (x: any) => Promise<any>;
  onChange?: (...x: any[]) => void;
  customElement?: {
    render: (
      key: string,
      form: any,
      updateForm: (...changes: FormFieldChange[]) => void,
      items?: InputOptionItem[] | undefined,
    ) => React.ReactNode;
    init: any;
  };
  decorationType?: DecorationType;
}

export type FormChangeEvent<T> = {
  form: T;
  changed: FormFieldChange[] | null;
  setError: (err: FormErrorType | null) => void;
  validateRequired: (setError?: boolean) => FormErrorType | null;
  clear: () => void;
  update: (form: T) => void;
  keyEvent?: React.KeyboardEvent<any>;
};
export interface FormProps<T> extends BaseProps {
  title?: React.ReactNode;
  options?: FormConf<T>;
  defaultState?: Partial<T>;
  defaultError?: FormErrorType;
  onChange?: (event: FormChangeEvent<T>) => void;
  onSubmit?: (event: FormChangeEvent<T>) => Promise<void>;
  buttonText?: string;
  buttonNode?: (submit: () => void) => ReactNode;
  buttonCenter?: boolean;
  loading?: boolean;
  loadingNode?: ReactNode;
  loadingMessage?: ReactNode;
  compact?: boolean | 'full';
  children?: FormRowItemTypes<T> | FormRowItemTypes<T>[];
}

export type FormErrorType = {
  global?: string[];
  field?: { key: string; message: string }[];
};

export type FormFieldChange = { key: string; value: FormTypes };

export type FormRowProps<T> = {
  children?: FormFieldItemTypes<T> | FormFieldItemTypes<T>[];
};
export type FormRowItemTypes<T> = React.ReactElement<
  FormRowProps<T>,
  FC<FormRowProps<T>>
>;

export type FormFieldProps<T> = Omit<InputOption<T>, 'key'> & { fkey: string };

export type FormFieldItemTypes<T> = React.ReactElement<
  FormFieldProps<T>,
  FC<FormFieldProps<T>>
>;

export function FRow<T>(props: FormRowProps<T>) {
  return null;
}

export function FField<T>(props: FormFieldProps<T>) {
  return null;
}
