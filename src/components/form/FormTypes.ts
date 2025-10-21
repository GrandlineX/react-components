import React, { ReactNode } from 'react';
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
  | Record<string, any>;

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
};
export interface FormProps<T> extends BaseProps {
  title?: React.ReactNode;
  options: FormConf<T>;
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
}

export type FormErrorType = {
  global?: string[];
  field?: { key: string; message: string }[];
};

export type FormFieldChange = { key: string; value: FormTypes };
