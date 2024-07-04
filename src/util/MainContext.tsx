import React, { useContext } from 'react';
import { GLang } from './GLang';
import getSaveWindow from './BuildHelper';

const defaultGLang = new GLang({
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
      key: 'glx.form.field.empty',
      value: 'Nothing selected',
    },
    {
      key: 'glx.form.field.search',
      value: 'Search...',
    },
    {
      key: 'glx.form.field.selection',
      value: 'Selected',
    },
    {
      key: 'glx.form.show.all',
      value: 'Show all',
    },
    {
      key: 'glx.form.more',
      value: 'Show More',
    },
    {
      key: 'glx.form.tagSelector.helpText',
      value:
        'Keyboard Shortcuts:\n\nEnter : Select item\nArrowUp, ArrowDown : Navigate Up/Down\nShift + Backspace : Remove last item',
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
});
class UIContextData {
  portalRoot: HTMLElement;

  translation: GLang;

  tooltipDisabled: boolean;

  constructor(conf?: {
    portalRoot?: HTMLElement;
    lang?: GLang;
    tooltipDisabled?: boolean;
  }) {
    this.portalRoot = conf?.portalRoot || getSaveWindow().document.body;
    this.translation = conf?.lang || defaultGLang;
    this.tooltipDisabled = conf?.tooltipDisabled ?? false;
  }
}

const UIContext = React.createContext(new UIContextData({}));

const useUIContext = () => {
  return useContext(UIContext);
};

export { useUIContext, UIContext, UIContextData, defaultGLang };
