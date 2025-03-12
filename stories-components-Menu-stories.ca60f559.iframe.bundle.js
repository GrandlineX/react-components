/*! For license information please see stories-components-Menu-stories.ca60f559.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[8445,961],{"./src/stories/components/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Icon:()=>Icon,Left:()=>Left,SubMenu:()=>SubMenu,SubMenuLeft:()=>SubMenuLeft,SubMenuTop:()=>SubMenuTop,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@grandlinex/react-icons/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Menu",component:__webpack_require__("./src/components/index.ts").Od,tags:["autodocs"],argTypes:{},parameters:{storySource:{source:"import React from 'react';\nimport { IOSettings } from '@grandlinex/react-icons';\nimport { DropDownIconMenu } from '../../components';\nconst meta = {\n    title: 'Components/Menu',\n    component: DropDownIconMenu,\n    tags: [\n        'autodocs'\n    ],\n    argTypes: {\n    },\n    parameters: {\n        layout: 'centered'\n    }\n};\nexport default meta;\nconst menu = [\n    {\n        key: 'Dot',\n        icon: 'IOMoon',\n        label: 'Moon'\n    },\n    {\n        key: 'bag',\n        icon: 'IOBag',\n        label: 'Bag - Label',\n        isLabel: true\n    },\n    {\n        key: 'ba2',\n        icon: 'IOBag',\n        label: 'Bag',\n        checkBox: true,\n        value: true\n    },\n    {\n        key: 'ba3',\n        icon: 'IOBag',\n        label: 'Bag',\n        checkBox: true\n    }\n];\nexport const Default = {\n    args: {\n        menu,\n        initialValue: {\n            ba3: true\n        }\n    }\n};\nexport const Left = {\n    args: {\n        menu,\n        initialValue: {\n            ba3: true\n        },\n        left: true\n    }\n};\nexport const Icon = {\n    args: {\n        menu,\n        initialValue: {\n            ba3: true\n        },\n        children: /*#__PURE__*/ React.createElement(IOSettings, null)\n    }\n};\nexport const SubMenu = {\n    args: {\n        menu: [\n            ...menu,\n            {\n                key: 'ba3',\n                icon: 'IOBag',\n                label: 'SubMenu',\n                subMenu: [\n                    {\n                        key: 'ba4',\n                        icon: 'IOBag',\n                        label: 'Bag'\n                    },\n                    {\n                        key: 'ba5',\n                        icon: 'IOBag',\n                        label: 'Bag'\n                    }\n                ]\n            }\n        ],\n        initialValue: {\n            ba3: true\n        },\n        children: /*#__PURE__*/ React.createElement(IOSettings, null)\n    }\n};\nexport const SubMenuLeft = {\n    args: {\n        menu: [\n            ...menu,\n            {\n                key: 'ba3',\n                icon: 'IOBag',\n                label: 'SubMenu',\n                subMenu: [\n                    {\n                        key: 'ba4',\n                        icon: 'IOBag',\n                        label: 'Bag'\n                    },\n                    {\n                        key: 'ba5',\n                        icon: 'IOBag',\n                        label: 'Bag'\n                    }\n                ]\n            }\n        ],\n        initialValue: {\n            ba3: true\n        },\n        children: /*#__PURE__*/ React.createElement(IOSettings, null),\n        left: true\n    }\n};\nexport const SubMenuTop = {\n    args: {\n        menu: [\n            ...menu,\n            {\n                key: 'ba3',\n                icon: 'IOBag',\n                label: 'SubMenu',\n                subMenu: [\n                    {\n                        key: 'ba4',\n                        icon: 'IOBag',\n                        label: 'Bag'\n                    },\n                    {\n                        key: 'ba5',\n                        icon: 'IOBag',\n                        label: 'Bag'\n                    }\n                ]\n            }\n        ],\n        initialValue: {\n            ba3: true\n        },\n        children: /*#__PURE__*/ React.createElement(IOSettings, null),\n        top: true\n    }\n};\n",locationsMap:{default:{startLoc:{col:23,line:43},endLoc:{col:1,line:50},startBody:{col:23,line:43},endBody:{col:1,line:50}},left:{startLoc:{col:20,line:51},endLoc:{col:1,line:59},startBody:{col:20,line:51},endBody:{col:1,line:59}},icon:{startLoc:{col:20,line:60},endLoc:{col:1,line:68},startBody:{col:20,line:60},endBody:{col:1,line:68}},"sub-menu":{startLoc:{col:23,line:69},endLoc:{col:1,line:96},startBody:{col:23,line:69},endBody:{col:1,line:96}},"sub-menu-left":{startLoc:{col:27,line:97},endLoc:{col:1,line:125},startBody:{col:27,line:97},endBody:{col:1,line:125}},"sub-menu-top":{startLoc:{col:26,line:126},endLoc:{col:1,line:154},startBody:{col:26,line:126},endBody:{col:1,line:154}}}},layout:"centered"}},menu=[{key:"Dot",icon:"IOMoon",label:"Moon"},{key:"bag",icon:"IOBag",label:"Bag - Label",isLabel:!0},{key:"ba2",icon:"IOBag",label:"Bag",checkBox:!0,value:!0},{key:"ba3",icon:"IOBag",label:"Bag",checkBox:!0}],Default={args:{menu,initialValue:{ba3:!0}}},Left={args:{menu,initialValue:{ba3:!0},left:!0}},Icon={args:{menu,initialValue:{ba3:!0},children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOSettings,null)}},SubMenu={args:{menu:[...menu,{key:"ba3",icon:"IOBag",label:"SubMenu",subMenu:[{key:"ba4",icon:"IOBag",label:"Bag"},{key:"ba5",icon:"IOBag",label:"Bag"}]}],initialValue:{ba3:!0},children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOSettings,null)}},SubMenuLeft={args:{menu:[...menu,{key:"ba3",icon:"IOBag",label:"SubMenu",subMenu:[{key:"ba4",icon:"IOBag",label:"Bag"},{key:"ba5",icon:"IOBag",label:"Bag"}]}],initialValue:{ba3:!0},children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOSettings,null),left:!0}},SubMenuTop={args:{menu:[...menu,{key:"ba3",icon:"IOBag",label:"SubMenu",subMenu:[{key:"ba4",icon:"IOBag",label:"Bag"},{key:"ba5",icon:"IOBag",label:"Bag"}]}],initialValue:{ba3:!0},children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOSettings,null),top:!0}},__namedExportsOrder=["Default","Left","Icon","SubMenu","SubMenuLeft","SubMenuTop"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    menu,\n    initialValue: {\n      ba3: true\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:"{\n  args: {\n    menu,\n    initialValue: {\n      ba3: true\n    },\n    left: true\n  }\n}",...Left.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  args: {\n    menu,\n    initialValue: {\n      ba3: true\n    },\n    children: <IOSettings />\n  }\n}",...Icon.parameters?.docs?.source}}},SubMenu.parameters={...SubMenu.parameters,docs:{...SubMenu.parameters?.docs,source:{originalSource:"{\n  args: {\n    menu: [...menu, {\n      key: 'ba3',\n      icon: 'IOBag',\n      label: 'SubMenu',\n      subMenu: [{\n        key: 'ba4',\n        icon: 'IOBag',\n        label: 'Bag'\n      }, {\n        key: 'ba5',\n        icon: 'IOBag',\n        label: 'Bag'\n      }]\n    }],\n    initialValue: {\n      ba3: true\n    },\n    children: <IOSettings />\n  }\n}",...SubMenu.parameters?.docs?.source}}},SubMenuLeft.parameters={...SubMenuLeft.parameters,docs:{...SubMenuLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    menu: [...menu, {\n      key: 'ba3',\n      icon: 'IOBag',\n      label: 'SubMenu',\n      subMenu: [{\n        key: 'ba4',\n        icon: 'IOBag',\n        label: 'Bag'\n      }, {\n        key: 'ba5',\n        icon: 'IOBag',\n        label: 'Bag'\n      }]\n    }],\n    initialValue: {\n      ba3: true\n    },\n    children: <IOSettings />,\n    left: true\n  }\n}",...SubMenuLeft.parameters?.docs?.source}}},SubMenuTop.parameters={...SubMenuTop.parameters,docs:{...SubMenuTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    menu: [...menu, {\n      key: 'ba3',\n      icon: 'IOBag',\n      label: 'SubMenu',\n      subMenu: [{\n        key: 'ba4',\n        icon: 'IOBag',\n        label: 'Bag'\n      }, {\n        key: 'ba5',\n        icon: 'IOBag',\n        label: 'Bag'\n      }]\n    }],\n    initialValue: {\n      ba3: true\n    },\n    children: <IOSettings />,\n    top: true\n  }\n}",...SubMenuTop.parameters?.docs?.source}}}},"./node_modules/react-dom/cjs/react-dom.production.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("./node_modules/react/index.js");function formatProdErrorMessage(code){var url="https://react.dev/errors/"+code;if(1<arguments.length){url+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)url+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+code+"; visit "+url+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function noop(){}var Internals={d:{f:noop,r:function(){throw Error(formatProdErrorMessage(522))},D:noop,C:noop,L:noop,m:noop,X:noop,S:noop,M:noop},p:0,findDOMNode:null},REACT_PORTAL_TYPE=Symbol.for("react.portal");var ReactSharedInternals=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function getCrossOriginStringAs(as,input){return"font"===as?"":"string"==typeof input?"use-credentials"===input?input:"":void 0}exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Internals,exports.createPortal=function(children,container){var key=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!container||1!==container.nodeType&&9!==container.nodeType&&11!==container.nodeType)throw Error(formatProdErrorMessage(299));return function createPortal$1(children,containerInfo,implementation){var key=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:REACT_PORTAL_TYPE,key:null==key?null:""+key,children,containerInfo,implementation}}(children,container,null,key)},exports.flushSync=function(fn){var previousTransition=ReactSharedInternals.T,previousUpdatePriority=Internals.p;try{if(ReactSharedInternals.T=null,Internals.p=2,fn)return fn()}finally{ReactSharedInternals.T=previousTransition,Internals.p=previousUpdatePriority,Internals.d.f()}},exports.preconnect=function(href,options){"string"==typeof href&&(options?options="string"==typeof(options=options.crossOrigin)?"use-credentials"===options?options:"":void 0:options=null,Internals.d.C(href,options))},exports.prefetchDNS=function(href){"string"==typeof href&&Internals.d.D(href)},exports.preinit=function(href,options){if("string"==typeof href&&options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin),integrity="string"==typeof options.integrity?options.integrity:void 0,fetchPriority="string"==typeof options.fetchPriority?options.fetchPriority:void 0;"style"===as?Internals.d.S(href,"string"==typeof options.precedence?options.precedence:void 0,{crossOrigin,integrity,fetchPriority}):"script"===as&&Internals.d.X(href,{crossOrigin,integrity,fetchPriority,nonce:"string"==typeof options.nonce?options.nonce:void 0})}},exports.preinitModule=function(href,options){if("string"==typeof href)if("object"==typeof options&&null!==options){if(null==options.as||"script"===options.as){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.M(href,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0})}}else null==options&&Internals.d.M(href)},exports.preload=function(href,options){if("string"==typeof href&&"object"==typeof options&&null!==options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin);Internals.d.L(href,as,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0,type:"string"==typeof options.type?options.type:void 0,fetchPriority:"string"==typeof options.fetchPriority?options.fetchPriority:void 0,referrerPolicy:"string"==typeof options.referrerPolicy?options.referrerPolicy:void 0,imageSrcSet:"string"==typeof options.imageSrcSet?options.imageSrcSet:void 0,imageSizes:"string"==typeof options.imageSizes?options.imageSizes:void 0,media:"string"==typeof options.media?options.media:void 0})}},exports.preloadModule=function(href,options){if("string"==typeof href)if(options){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.m(href,{as:"string"==typeof options.as&&"script"!==options.as?options.as:void 0,crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0})}else Internals.d.m(href)},exports.requestFormReset=function(form){Internals.d.r(form)},exports.unstable_batchedUpdates=function(fn,a){return fn(a)},exports.useFormState=function(action,initialState,permalink){return ReactSharedInternals.H.useFormState(action,initialState,permalink)},exports.useFormStatus=function(){return ReactSharedInternals.H.useHostTransitionStatus()},exports.version="19.0.0"},"./node_modules/react-dom/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{!function checkDCE(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}(),module.exports=__webpack_require__("./node_modules/react-dom/cjs/react-dom.production.js")}}]);