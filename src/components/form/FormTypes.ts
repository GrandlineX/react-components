import React, { ReactNode } from 'react';
import { INames } from '@grandlinex/react-icons';
import { BaseProps } from '../lib';

export type FormTypes = string | number | null | boolean | undefined;

export type FormConfEl = InputOption | null | InputOption[];
export type FormConf = FormConfEl[][];

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
}

export interface InputOptionItem<X = any> {
  key: string;
  name: string;
  icon?: INames;
  meta?: X;
}

export interface InputOption {
  key: string;
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
  };
  autoComplete?: 'on' | 'off';
  autoFocus?: boolean;
  readOnly?: boolean;
  beforeSubmit?: (value: FormTypes) => FormTypes;
  preload?: (x: any) => Promise<any>;
  onChange?: (...x: any[]) => void;
  customElement?: {
    render: (
      key: string,
      form: any,
      updateForm: (key: string, value: any) => void,
      items?: InputOptionItem[] | undefined,
    ) => React.ReactNode;
    init: any;
  };
}

export type FormChangeEvent<T> = {
  form: T;
  changed: { key: string; value: FormTypes } | null;
  setError: (err: FormErrorType | null) => void;
  validateRequired: (setError?: boolean) => FormErrorType | null;
  clear: () => void;
  update: (form: T) => void;
};
export interface FormProps<T> extends BaseProps {
  title?: React.ReactNode;
  options: FormConf;
  defaultState?: Partial<T>;
  defaultError?: FormErrorType;
  onChange?: (event: FormChangeEvent<T>) => void;
  submit?: {
    onSubmit: (event: FormChangeEvent<T>) => Promise<void>;
    buttonText?: string;
    buttonNode?: (submit: () => void) => ReactNode;
    buttonCenter?: boolean;
    loading?: boolean;
    loadingNode?: ReactNode;
    loadingMessage?: ReactNode;
  };
  compact?: boolean;
}

export type FormErrorType = {
  global?: string[];
  field?: { key: string; message: string }[];
};
