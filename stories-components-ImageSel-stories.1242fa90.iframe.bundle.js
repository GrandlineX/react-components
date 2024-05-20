(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[9497],{"./src/stories/components/ImageSel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/FormComponents/ImageSelector",component:__webpack_require__("./src/components/form/inputs/ImageSel.tsx").A,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"},decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"glx-form--input"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Story,null))}]};var Default={args:{items:[{key:"first",url:"https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA",title:"Earth"},{key:"second",url:"https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA",title:"Wave"},{key:"third",url:"https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA",title:"Earth"},{key:"fourth",url:"https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA",title:"Wave"},{key:"fifth",url:"https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA",title:"Earth"}],selected:"first",onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      key: 'first',\n      url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',\n      title: 'Earth'\n    }, {\n      key: 'second',\n      url: 'https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA',\n      title: 'Wave'\n    }, {\n      key: 'third',\n      url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',\n      title: 'Earth'\n    }, {\n      key: 'fourth',\n      url: 'https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA',\n      title: 'Wave'\n    }, {\n      key: 'fifth',\n      url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',\n      title: 'Earth'\n    }],\n    selected: 'first',\n    onChange: fn()\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/index.tsx"),Button=function(props){var onClick=props.onClick,text=props.text,cancel=props.cancel,disabled=props.disabled,children=props.children,half=props.half,color=props.color,className=props.className,style=props.style;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{style,className:(0,_util__WEBPACK_IMPORTED_MODULE_1__._m)("button--grid","bubble",className,[!!cancel,"cancel"],[!!half,"button--grid-half"],[!!color,"button--".concat(color),"button--default"]),type:"button",onClick,disabled},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,children),text)};Button.defaultProps={text:void 0,color:void 0,className:void 0,disabled:void 0,cancel:void 0,half:void 0,children:void 0,style:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event?: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},color:{required:!1,tsType:{name:"union",raw:"| 'red'\n| 'blue'\n| 'yellow'\n| 'purple'\n| 'green'\n| 'orange'\n| 'cyan'\n| 'pink'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'pink'"}]},description:"",defaultValue:{value:"undefined",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"undefined",computed:!0}},cancel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"undefined",computed:!0}},half:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"undefined",computed:!0}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"undefined",computed:!0}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"undefined",computed:!0}}}}},"./src/components/form/inputs/ImageSel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ImageSel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Grid/Grid.tsx"),_button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/button/Button.tsx"),_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/util/index.tsx"),_button_IconButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/button/IconButton.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ImageSel(param){var _sel_title,_ref,items=param.items,selected=param.selected,maxStep=param.maxStep,onChange=param.onChange,imgSize=param.imgSize,extended=param.extended,t=(0,_util__WEBPACK_IMPORTED_MODULE_3__.fz)(),step=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null!=maxStep?maxStep:4}),[maxStep]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!=extended?extended:!selected),2),extend=_useState[0],setExtend=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(step),2),max=_useState1[0],setMax=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!=selected?selected:null),2),selItem=_useState2[0],setSelItem=_useState2[1],sel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var _items_find;return null!==(_items_find=items.find((function(e){return e.key===selItem})))&&void 0!==_items_find?_items_find:null}),[selItem,items]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{flex:!0,flexC:!0,className:"glx-default-text",gap:8},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{flex:!0,flexR:!0,vCenter:!0,gap:4},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:{fontSize:"14pt"}},t.translation.get("glx.form.field.selection"),": "),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"text",value:null!==(_ref=null!==(_sel_title=null==sel?void 0:sel.title)&&void 0!==_sel_title?_sel_title:null==sel?void 0:sel.key)&&void 0!==_ref?_ref:t.translation.get("glx.form.field.empty"),disabled:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_IconButton__WEBPACK_IMPORTED_MODULE_4__.K,{style:{borderBottom:"unset !important"},icon:extend?"IOSave":"IOPencil",onClick:function(){return setExtend(!extend)}})),extend&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{flex:!0,flexR:!0,flexWrap:!0,hCenter:!0,gap:8},items.slice(0,max).map((function(i){var _i_title,_i_title1;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{flex:!0,flexC:!0,key:i.key,className:[[i.key===selItem,"glx-img-active"],"glx-img-sel","glx-no-select"],onClick:function(){setSelItem(i.key),null==onChange||onChange(i)},onDoubleClick:function(){setExtend(!1)}},i.element||react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{loading:"lazy",draggable:!1,alt:null!==(_i_title=i.title)&&void 0!==_i_title?_i_title:i.key,src:i.url,width:null==imgSize?void 0:imgSize.width,height:null==imgSize?void 0:imgSize.height,style:{objectFit:"contain"}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,null!==(_i_title1=i.title)&&void 0!==_i_title1?_i_title1:i.key))}))),extend&&items.length>max&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__.A,{flex:!0,hCenter:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_2__.$,{onClick:function(){return setMax(max+step)}},t.translation.get("glx.form.more")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_2__.$,{onClick:function(){return setMax(items.length)}},t.translation.get("glx.form.show.all"))))}ImageSel.defaultProps={selected:void 0,onChange:void 0,extended:void 0,imgSize:{width:300,height:200}},ImageSel.__docgenInfo={description:"",methods:[],displayName:"ImageSel",props:{selected:{defaultValue:{value:"undefined",computed:!0},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},required:!1},extended:{defaultValue:{value:"undefined",computed:!0},required:!1},imgSize:{defaultValue:{value:"{ width: 300, height: 200 }",computed:!1},required:!1}}}}}]);