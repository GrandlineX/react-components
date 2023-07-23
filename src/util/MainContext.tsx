import React, { useContext } from 'react';
import { GLang } from './GLang';
import getSaveWindow from './BuildHelper';

class UIContextData {
  portalRoot: HTMLElement;

  translation: GLang;

  constructor(conf: { portalRoot: HTMLElement; lang: GLang }) {
    this.portalRoot = conf.portalRoot;
    this.translation = conf.lang;
  }
}

const UIContext = React.createContext(
  new UIContextData({
    portalRoot: getSaveWindow().document.body,
    lang: new GLang({
      label: 'DefaultEnglish',
      code: 'en',
      data: [
        {
          key: 'glx.form.required.field',
          value: 'Required fields are not allowed to be empty',
        },
        {
          key: 'glx.form.required.submit',
          value: 'Submit',
        },
        {
          key: 'glx.table.header.action',
          value: 'Action',
        },
        {
          key: 'glx.table.header.sel',
          value: 'Sel.',
        },
        {
          key: 'glx.table.value.bool.true',
          value: 'Yes',
        },
        {
          key: 'glx.table.value.bool.false',
          value: 'No',
        },
        {
          key: 'glx.table.action.edit',
          value: 'Edit',
        },
        {
          key: 'glx.table.action.more',
          value: 'Show More',
        },
        {
          key: 'glx.table.action.save',
          value: 'Save',
        },
        {
          key: 'glx.context.menu.move.to.right',
          value: 'Move to right',
        },
        {
          key: 'glx.context.menu.move.to.left',
          value: 'Move to left',
        },
        {
          key: 'glx.context.menu.close',
          value: 'Close',
        },
        {
          key: 'glx.spotlight.empty.commands',
          value: 'No commands found',
        },
        {
          key: 'glx.spotlight.empty.result',
          value: 'No results found',
        },
        {
          key: 'glx.spotlight.placeholder',
          value: 'Spotlight...',
        },
        {
          key: 'glx.input.icon.sel.placeholder',
          value: 'Search...',
        },
      ],
    }),
  }),
);

const useUIContext = () => {
  return useContext(UIContext);
};

export { useUIContext, UIContext, UIContextData };
