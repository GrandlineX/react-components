import React, { ReactNode } from 'react';
import { INames } from '@grandlinex/react-icons';
import { BaseProps } from '../lib';

export type FormTypes = string | number | null | boolean | undefined;

export type FormConfEl = InputOption | null | InputOption[];
export type FormConf = FormConfEl[][];

export enum InputOptionType {
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
}

export interface InputOptionItem {
  key: string;
  name: string;
  icon?: INames;
  other?: any;
}

export interface InputOption {
  key: string;
  label?: React.ReactNode;
  type: InputOptionType;
  submitOnEnter?: boolean;
  required?: boolean;
  value?: FormTypes;
  accept?: string;
  hint?: string;
  items?: InputOptionItem[];
  org?: string;
  disabled?: boolean;
  placeholder?: string;
  restriction?: {
    pattern?: string;
    min?: number;
    max?: number;
    rows?: number;
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
      items?: InputOptionItem[] | undefined
    ) => React.ReactNode;
    init: any;
  };
}

export interface FormProps extends BaseProps {
  title?: React.ReactNode;
  options: FormConf;
  defaultState?: any;
  defaultError?: FormErrorType;
  onChange?: (form: any) => void;
  submit?: {
    onSubmit: (
      form: any,
      setError: (err: FormErrorType | null) => void,
      clear: () => void
    ) => Promise<void>;
    buttonText?: string;
    buttonNode?: (submit: () => void) => ReactNode;
    buttonCenter?: boolean;
    loading?: boolean;
    loadingMessage?: ReactNode;
  };
  compact?: boolean;
}

export type FormErrorType = {
  global?: string[];
  field?: { key: string; message: string }[];
};
