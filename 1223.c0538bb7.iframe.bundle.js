"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[1223],{"./src/components/form/FormElement.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>FormElement,eR:()=>useFormElContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@grandlinex/react-icons/dist/index.js"),_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/util/index.tsx"),_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/tooltip/Tooltip.tsx");const defaultFormElementContext={key:"",className:"",label:"",type:__webpack_require__("./src/components/form/FormTypes.ts").q.EMPTY,required:!1,setDecoration:()=>{},setFocus:()=>{},focus:!1,decoration:!1},FormElContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultFormElementContext),useFormElContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormElContext);function FormElement({element,children,error,split}){const uiContext=(0,_util__WEBPACK_IMPORTED_MODULE_2__.fz)(),decType=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>element.decorationType||uiContext.decoration),[element.decorationType,uiContext.decoration]),{key,className,label,required,extension,disabled}=element,{noDecoration,helpText}=extension,[focus,setFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[decoration,setDecoration]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!noDecoration),context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...element,setDecoration,setFocus,focus,decoration})),[element,focus,decoration]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormElContext.Provider,{value:context},react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset",{key:`sub-container-${key}`,className:(0,_util__WEBPACK_IMPORTED_MODULE_2__._m)(`glx-form--input glx-form--input--split-${split} glx-form--input--container`,[decoration&&"underline"===decType,"glx-form--underline"],[decoration&&"outline"===decType,"glx-form--outline"],[!decoration,"glx-form--no-decoration"],[!!disabled,"glx-form--disabled"],[focus,"glx-form--focus"],[!!error,"glx-form-field--error"],className)},label?react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"glx-form--label"},label," ",required?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"glx-form--error-text"},"*"):null,helpText&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__.A,{text:helpText,preLine:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOHelpCircleOutline,{size:16})))):null,children,(()=>{const fieldErr=error;return fieldErr?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"glx-form--error-text"},fieldErr.message):null})()))}FormElement.__docgenInfo={description:"",methods:[],displayName:"FormElement",props:{element:{required:!0,tsType:{name:"intersection",raw:"InputOption & {\n  extension: {\n    noDecoration: boolean;\n    helpText?: React.ReactNode;\n  };\n}",elements:[{name:"InputOption"},{name:"signature",type:"object",raw:"{\n  extension: {\n    noDecoration: boolean;\n    helpText?: React.ReactNode;\n  };\n}",signature:{properties:[{key:"extension",value:{name:"signature",type:"object",raw:"{\n  noDecoration: boolean;\n  helpText?: React.ReactNode;\n}",signature:{properties:[{key:"noDecoration",value:{name:"boolean",required:!0}},{key:"helpText",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]},required:!0}}]}}]},description:""},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},split:{required:!0,tsType:{name:"number"},description:""},error:{required:!0,tsType:{name:"union",raw:"{ key: string; message: string } | null | undefined",elements:[{name:"signature",type:"object",raw:"{ key: string; message: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"null"},{name:"undefined"}]},description:""}}}},"./src/components/form/FormTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>InputOptionType});__webpack_require__("./node_modules/react/index.js");var InputOptionType=function(InputOptionType){return InputOptionType[InputOptionType.EMPTY=0]="EMPTY",InputOptionType[InputOptionType.TEXT=1]="TEXT",InputOptionType[InputOptionType.TEXT_FIELD=2]="TEXT_FIELD",InputOptionType[InputOptionType.NUMBER=3]="NUMBER",InputOptionType[InputOptionType.PASSWORD=4]="PASSWORD",InputOptionType[InputOptionType.DROPDOWN=5]="DROPDOWN",InputOptionType[InputOptionType.DATE=6]="DATE",InputOptionType[InputOptionType.TIME=7]="TIME",InputOptionType[InputOptionType.DATE_TIME=8]="DATE_TIME",InputOptionType[InputOptionType.COLOR=9]="COLOR",InputOptionType[InputOptionType.RANGE=10]="RANGE",InputOptionType[InputOptionType.CHECKBOX=11]="CHECKBOX",InputOptionType[InputOptionType.FILE=12]="FILE",InputOptionType[InputOptionType.CUSTOM=13]="CUSTOM",InputOptionType[InputOptionType.TAG_SELECTOR=14]="TAG_SELECTOR",InputOptionType[InputOptionType.USER_SELECTOR=15]="USER_SELECTOR",InputOptionType[InputOptionType.ICON=16]="ICON",InputOptionType[InputOptionType.ICON_TEXT=17]="ICON_TEXT",InputOptionType[InputOptionType.CONTENT_SWITCH=18]="CONTENT_SWITCH",InputOptionType[InputOptionType.IMAGE_SELECT=19]="IMAGE_SELECT",InputOptionType[InputOptionType.BADGE_COLOR_SELECTOR=20]="BADGE_COLOR_SELECTOR",InputOptionType}({})},"./src/components/form/inputs/BadgeColorSelector.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BadgeColorSelector});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Grid/Grid.tsx"),_FormElement__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/FormElement.tsx"),_FormDropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/inputs/FormDropdown.tsx"),_other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/other/Badge/Badge.tsx"),_util__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/util/index.tsx");function BadgeColorSelector(props){const uiContxt=(0,_util__WEBPACK_IMPORTED_MODULE_5__.fz)(),field=(0,_FormElement__WEBPACK_IMPORTED_MODULE_2__.eR)(),{onChange,sel,className,disabled=!1}=props,[cur,setCur]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sel||{text:_other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.D.bgColors[0],mode:_other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.D.bgColors[0],color01:"#000000",color02:"#ffffff"}),options=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[..._other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.D.bgColors.map((el=>({key:el,name:uiContxt.translation.get(`glx.input.badge.sel.${el}`)}))),{key:"custom",name:uiContxt.translation.get("glx.input.badge.sel.custom")}]),[uiContxt.translation]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{className,flex:!0,flexC:!0,gap:8},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormDropdown__WEBPACK_IMPORTED_MODULE_3__.A,{className:"",value:cur.mode,items:options,disabled,onChange:ev=>{if("custom"===ev.target.value){const nEl={text:_other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.D.fromSColor(cur.color01,cur.color02).getStringColor(),mode:ev.target.value,color01:cur.color01,color02:cur.color02};setCur(nEl),onChange(nEl)}else{const nEl={text:ev.target.value,mode:ev.target.value,color01:cur.color01,color02:cur.color02};setCur(nEl),onChange(nEl)}},onFocus:()=>{field.setFocus(!0)},onBlur:()=>{field.setFocus(!1)}})),"custom"===cur.mode&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{flex:!0,flexR:!0,gap:4,vCenter:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Raw:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{disabled,type:"text",value:cur.text,onChange:e=>{if(_other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.D.isValidBadge(e.target.value)){const cx=new _other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.D(e.target.value),nEl={mode:"custom",text:cx.getStringColor(),color01:cx.getBackground(),color02:cx.getText()||cur.color02};setCur(nEl),onChange(nEl)}}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{flex:!0,flexR:!0,gap:4,vCenter:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{disabled,type:"color",value:cur.color01,onChange:e=>{const nEl={...cur,text:_other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.D.fromSColor(e.target.value,cur.color02).getStringColor(),color01:e.target.value};setCur(nEl),onChange(nEl)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{disabled,type:"color",value:cur.color02,onChange:e=>{const nEl={...cur,text:_other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.D.fromSColor(cur.color01,e.target.value).getStringColor(),color02:e.target.value};setCur(nEl),onChange(nEl)}}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{flex:!0,flexR:!0,vCenter:!0,gap:8},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Badge:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_other_Badge_Badge__WEBPACK_IMPORTED_MODULE_4__.E,{icon:"IOPricetag",color:cur.text,close:()=>{},text:uiContxt.translation.get("glx.input.badge.sel.dev.text")})))}BadgeColorSelector.__docgenInfo={description:"",methods:[],displayName:"BadgeColorSelector",props:{sel:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  text: BadgeColor;\n  mode: string;\n  color01: string;\n  color02: string;\n}",signature:{properties:[{key:"text",value:{name:"union",raw:"| 'red'\n| 'blue'\n| 'black'\n| 'yellow'\n| 'green'\n| 'orange'\n| CustomBadgeColor",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'black'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"`!#${string}&#${string}!`"}],required:!0}},{key:"mode",value:{name:"string",required:!0}},{key:"color01",value:{name:"string",required:!0}},{key:"color02",value:{name:"string",required:!0}}]}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(ev: BadgeFieldProps | null) => void",signature:{arguments:[{type:{name:"union",raw:"BadgeFieldProps | null",elements:[{name:"signature",type:"object",raw:"{\n  text: BadgeColor;\n  mode: string;\n  color01: string;\n  color02: string;\n}",signature:{properties:[{key:"text",value:{name:"union",raw:"| 'red'\n| 'blue'\n| 'black'\n| 'yellow'\n| 'green'\n| 'orange'\n| CustomBadgeColor",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'black'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"`!#${string}&#${string}!`"}],required:!0}},{key:"mode",value:{name:"string",required:!0}},{key:"color01",value:{name:"string",required:!0}},{key:"color02",value:{name:"string",required:!0}}]}},{name:"null"}]},name:"ev"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/form/inputs/FormDropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormDropdown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_FormElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/FormElement.tsx");function FormDropdown({className,value,autoFocus,required,disabled,onChange,items,onBlur,onFocus}){const field=(0,_FormElement__WEBPACK_IMPORTED_MODULE_1__.eR)(),haveGroup=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>items.some((el=>!!el.meta?.group))),[items]),group=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(!haveGroup)return null;const map=new Map;return items.forEach((el=>{const g=el.meta?.group??"default";map.has(g)||map.set(g,[]),map.get(g).push(el)})),Array.from(map.entries())}),[haveGroup,items]);return group?react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{className,value,autoFocus,required,disabled,onChange,onFocus:()=>{onFocus?.(),field.setFocus(!0)},onBlur:()=>{onBlur?.(),field.setFocus(!1)}},group.map((([key,val])=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("optgroup",{key,label:key},val?.map((el=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:el.key,value:el.key,disabled:el.disabled},el.name))))))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{className,value,autoFocus,required,disabled,onChange,onFocus:()=>{onFocus?.()},onBlur:()=>{onBlur?.()}},items.map((el=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:el.key,value:el.key,disabled:el.disabled},el.name))))}FormDropdown.__docgenInfo={description:"",methods:[],displayName:"FormDropdown",props:{className:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"InputOptionItem"}],raw:"InputOptionItem[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(ev: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"ev"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/components/other/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>BadgeColorX,E:()=>Badge});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@grandlinex/react-icons/dist/index.js"),_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/util/index.tsx");class BadgeColorX{static bgColors=["red","black","blue","yellow","green","orange"];color;constructor(color){if(!BadgeColorX.isValidBadge(color))throw new Error(`Invalid Badge Color: ${color}`);this.color=color}toForm(){return BadgeColorX.isCustomBadge(this.color)?{text:this.color,mode:"custom",color01:this.getBackground(),color02:this.getText()||"#000000"}:{text:this.color,mode:this.color,color01:"#000000",color02:"#ffffff"}}getColor(){if(BadgeColorX.isCustomBadge(this.color)){const[bg,fg]=this.color.slice(1,-1).split("&");return{backgroundColor:bg,color:fg}}return{backgroundColor:this.color}}getBackground(){return this.getColor().backgroundColor}getText(){return this.getColor().color}static isCustomBadge(color){return/^!#.*&#.*!$/.test(color)}static isValidBadge(color){return"string"==typeof color&&(!!this.bgColors.includes(color)||/^!#.*&#.*!$/.test(color))}getStringColor(){return this.color}static fromSColor(bg,fg){return new BadgeColorX(`!#${bg.replace("#","")}&#${fg.replace("#","")}!`)}}const Badge=prop=>{const{text,color,icon,close}=prop,customColor=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(color&&BadgeColorX.isCustomBadge(color))return new BadgeColorX(color).getColor()}),[color]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:customColor,className:(0,_util__WEBPACK_IMPORTED_MODULE_2__._m)("glx-badge",[!!color&&!customColor,`glx-badge--${color}`])},icon?(0,_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.getIcon)(icon)({}):null,text,close?react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:close,style:{color:customColor?.color}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOClose,null)):null)};Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"| 'red'\n| 'blue'\n| 'black'\n| 'yellow'\n| 'green'\n| 'orange'\n| CustomBadgeColor",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'black'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"`!#${string}&#${string}!`"}]},description:""},icon:{required:!1,tsType:{name:"INames"},description:""},close:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);