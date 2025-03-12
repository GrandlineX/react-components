/*! For license information please see stories-components-Notification-stories.c78d644f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[205,961],{"./src/stories/components/Notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,Color:()=>Color,Default:()=>Default,FallbackIcon:()=>FallbackIcon,Icon:()=>Icon,Menu:()=>Menu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@grandlinex/react-icons/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React from 'react';\nimport { IOPlay } from '@grandlinex/react-icons';\nimport { NotificationElement } from '../../components';\nconst meta = {\n    title: 'Components/Notification',\n    component: NotificationElement,\n    tags: [\n        'autodocs'\n    ],\n    argTypes: {\n    }\n};\nexport default meta;\nexport const Default = {\n    args: {\n        image: 'https://www.grandlinex.com/favicon.ico',\n        el: {\n            key: '1',\n            active: false,\n            selected: false,\n            title: 'Notification',\n            message: 'Notification message',\n            date: '2020-01-01'\n        },\n        menu: [\n            {\n                key: '1',\n                label: 'Play'\n            }\n        ]\n    }\n};\nexport const FallbackIcon = {\n    args: {\n        el: {\n            key: '3',\n            active: true,\n            selected: false,\n            title: 'Notification',\n            message: 'Notification message',\n            date: '2020-01-01'\n        },\n        menu: [\n            {\n                key: '1',\n                label: 'Play'\n            }\n        ],\n        fallbackIcon: {\n            icon: 'IOMic',\n            color: '#0f7a14'\n        }\n    }\n};\nexport const Icon = {\n    args: {\n        icon: /*#__PURE__*/ React.createElement(IOPlay, null),\n        el: {\n            key: '3',\n            active: true,\n            selected: false,\n            title: 'Notification',\n            message: 'Notification message',\n            date: '2020-01-01'\n        },\n        menu: [\n            {\n                key: '1',\n                label: 'Play'\n            }\n        ]\n    }\n};\nexport const Menu = {\n    name: 'Notification with dropdown menu',\n    args: {\n        icon: /*#__PURE__*/ React.createElement(IOPlay, null),\n        el: {\n            key: '3',\n            active: true,\n            selected: false,\n            title: 'Notification',\n            message: 'Notification message',\n            date: '2020-01-01'\n        },\n        menu: [\n            {\n                key: '1',\n                label: 'Play'\n            },\n            {\n                key: '2',\n                label: 'Play 2'\n            }\n        ]\n    }\n};\nexport const Button = {\n    name: 'Notification with button',\n    args: {\n        icon: /*#__PURE__*/ React.createElement(IOPlay, null),\n        el: {\n            key: '3',\n            active: true,\n            selected: true,\n            title: 'Notification',\n            message: 'Notification message',\n            date: '2020-01-01'\n        },\n        image: 'https://www.grandlinex.com/favicon.ico',\n        button: [\n            {\n                onClick: async ()=>{},\n                show: ()=>true,\n                content: /*#__PURE__*/ React.createElement(IOPlay, null),\n                tooltip: 'Button 1 tooltip',\n                key: '1'\n            },\n            {\n                onClick: async ()=>{},\n                show: ()=>true,\n                content: /*#__PURE__*/ React.createElement(IOPlay, null),\n                tooltip: 'Button 1 tooltip',\n                key: '2'\n            },\n            {\n                onClick: async ()=>{},\n                show: ()=>true,\n                content: /*#__PURE__*/ React.createElement(IOPlay, null),\n                tooltip: 'Button 1 tooltip',\n                key: '3'\n            }\n        ]\n    }\n};\nexport const Color = {\n    args: {\n        icon: /*#__PURE__*/ React.createElement(IOPlay, null),\n        el: {\n            key: '3',\n            active: true,\n            selected: true,\n            title: 'Notification',\n            message: 'Notification message',\n            date: '2020-01-01'\n        },\n        image: 'https://www.grandlinex.com/favicon.ico',\n        color: '#ff0000'\n    }\n};\n",locationsMap:{default:{startLoc:{col:23,line:14},endLoc:{col:1,line:32},startBody:{col:23,line:14},endBody:{col:1,line:32}},"fallback-icon":{startLoc:{col:28,line:33},endLoc:{col:1,line:54},startBody:{col:28,line:33},endBody:{col:1,line:54}},icon:{startLoc:{col:20,line:55},endLoc:{col:1,line:73},startBody:{col:20,line:55},endBody:{col:1,line:73}},menu:{startLoc:{col:20,line:74},endLoc:{col:1,line:97},startBody:{col:20,line:74},endBody:{col:1,line:97}},button:{startLoc:{col:22,line:98},endLoc:{col:1,line:135},startBody:{col:22,line:98},endBody:{col:1,line:135}},color:{startLoc:{col:21,line:136},endLoc:{col:1,line:150},startBody:{col:21,line:136},endBody:{col:1,line:150}}}}},title:"Components/Notification",component:__webpack_require__("./src/components/index.ts").Uk,tags:["autodocs"],argTypes:{}},Default={args:{image:"https://www.grandlinex.com/favicon.ico",el:{key:"1",active:!1,selected:!1,title:"Notification",message:"Notification message",date:"2020-01-01"},menu:[{key:"1",label:"Play"}]}},FallbackIcon={args:{el:{key:"3",active:!0,selected:!1,title:"Notification",message:"Notification message",date:"2020-01-01"},menu:[{key:"1",label:"Play"}],fallbackIcon:{icon:"IOMic",color:"#0f7a14"}}},Icon={args:{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,null),el:{key:"3",active:!0,selected:!1,title:"Notification",message:"Notification message",date:"2020-01-01"},menu:[{key:"1",label:"Play"}]}},Menu={name:"Notification with dropdown menu",args:{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,null),el:{key:"3",active:!0,selected:!1,title:"Notification",message:"Notification message",date:"2020-01-01"},menu:[{key:"1",label:"Play"},{key:"2",label:"Play 2"}]}},Button={name:"Notification with button",args:{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,null),el:{key:"3",active:!0,selected:!0,title:"Notification",message:"Notification message",date:"2020-01-01"},image:"https://www.grandlinex.com/favicon.ico",button:[{onClick:async()=>{},show:()=>!0,content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,null),tooltip:"Button 1 tooltip",key:"1"},{onClick:async()=>{},show:()=>!0,content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,null),tooltip:"Button 1 tooltip",key:"2"},{onClick:async()=>{},show:()=>!0,content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,null),tooltip:"Button 1 tooltip",key:"3"}]}},Color={args:{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,null),el:{key:"3",active:!0,selected:!0,title:"Notification",message:"Notification message",date:"2020-01-01"},image:"https://www.grandlinex.com/favicon.ico",color:"#ff0000"}},__namedExportsOrder=["Default","FallbackIcon","Icon","Menu","Button","Color"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    image: 'https://www.grandlinex.com/favicon.ico',\n    el: {\n      key: '1',\n      active: false,\n      selected: false,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    menu: [{\n      key: '1',\n      label: 'Play'\n    }]\n  }\n}",...Default.parameters?.docs?.source}}},FallbackIcon.parameters={...FallbackIcon.parameters,docs:{...FallbackIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    el: {\n      key: '3',\n      active: true,\n      selected: false,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    menu: [{\n      key: '1',\n      label: 'Play'\n    }],\n    fallbackIcon: {\n      icon: 'IOMic',\n      color: '#0f7a14'\n    }\n  }\n}",...FallbackIcon.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <IOPlay />,\n    el: {\n      key: '3',\n      active: true,\n      selected: false,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    menu: [{\n      key: '1',\n      label: 'Play'\n    }]\n  }\n}",...Icon.parameters?.docs?.source}}},Menu.parameters={...Menu.parameters,docs:{...Menu.parameters?.docs,source:{originalSource:"{\n  name: 'Notification with dropdown menu',\n  args: {\n    icon: <IOPlay />,\n    el: {\n      key: '3',\n      active: true,\n      selected: false,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    menu: [{\n      key: '1',\n      label: 'Play'\n    }, {\n      key: '2',\n      label: 'Play 2'\n    }]\n  }\n}",...Menu.parameters?.docs?.source}}},Button.parameters={...Button.parameters,docs:{...Button.parameters?.docs,source:{originalSource:"{\n  name: 'Notification with button',\n  args: {\n    icon: <IOPlay />,\n    el: {\n      key: '3',\n      active: true,\n      selected: true,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    image: 'https://www.grandlinex.com/favicon.ico',\n    button: [{\n      onClick: async () => {},\n      show: () => true,\n      content: <IOPlay />,\n      tooltip: 'Button 1 tooltip',\n      key: '1'\n    }, {\n      onClick: async () => {},\n      show: () => true,\n      content: <IOPlay />,\n      tooltip: 'Button 1 tooltip',\n      key: '2'\n    }, {\n      onClick: async () => {},\n      show: () => true,\n      content: <IOPlay />,\n      tooltip: 'Button 1 tooltip',\n      key: '3'\n    }]\n  }\n}",...Button.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <IOPlay />,\n    el: {\n      key: '3',\n      active: true,\n      selected: true,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    image: 'https://www.grandlinex.com/favicon.ico',\n    color: '#ff0000'\n  }\n}",...Color.parameters?.docs?.source}}}},"./node_modules/react-dom/cjs/react-dom.production.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("./node_modules/react/index.js");function formatProdErrorMessage(code){var url="https://react.dev/errors/"+code;if(1<arguments.length){url+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)url+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+code+"; visit "+url+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function noop(){}var Internals={d:{f:noop,r:function(){throw Error(formatProdErrorMessage(522))},D:noop,C:noop,L:noop,m:noop,X:noop,S:noop,M:noop},p:0,findDOMNode:null},REACT_PORTAL_TYPE=Symbol.for("react.portal");var ReactSharedInternals=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function getCrossOriginStringAs(as,input){return"font"===as?"":"string"==typeof input?"use-credentials"===input?input:"":void 0}exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Internals,exports.createPortal=function(children,container){var key=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!container||1!==container.nodeType&&9!==container.nodeType&&11!==container.nodeType)throw Error(formatProdErrorMessage(299));return function createPortal$1(children,containerInfo,implementation){var key=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:REACT_PORTAL_TYPE,key:null==key?null:""+key,children,containerInfo,implementation}}(children,container,null,key)},exports.flushSync=function(fn){var previousTransition=ReactSharedInternals.T,previousUpdatePriority=Internals.p;try{if(ReactSharedInternals.T=null,Internals.p=2,fn)return fn()}finally{ReactSharedInternals.T=previousTransition,Internals.p=previousUpdatePriority,Internals.d.f()}},exports.preconnect=function(href,options){"string"==typeof href&&(options?options="string"==typeof(options=options.crossOrigin)?"use-credentials"===options?options:"":void 0:options=null,Internals.d.C(href,options))},exports.prefetchDNS=function(href){"string"==typeof href&&Internals.d.D(href)},exports.preinit=function(href,options){if("string"==typeof href&&options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin),integrity="string"==typeof options.integrity?options.integrity:void 0,fetchPriority="string"==typeof options.fetchPriority?options.fetchPriority:void 0;"style"===as?Internals.d.S(href,"string"==typeof options.precedence?options.precedence:void 0,{crossOrigin,integrity,fetchPriority}):"script"===as&&Internals.d.X(href,{crossOrigin,integrity,fetchPriority,nonce:"string"==typeof options.nonce?options.nonce:void 0})}},exports.preinitModule=function(href,options){if("string"==typeof href)if("object"==typeof options&&null!==options){if(null==options.as||"script"===options.as){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.M(href,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0})}}else null==options&&Internals.d.M(href)},exports.preload=function(href,options){if("string"==typeof href&&"object"==typeof options&&null!==options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin);Internals.d.L(href,as,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0,type:"string"==typeof options.type?options.type:void 0,fetchPriority:"string"==typeof options.fetchPriority?options.fetchPriority:void 0,referrerPolicy:"string"==typeof options.referrerPolicy?options.referrerPolicy:void 0,imageSrcSet:"string"==typeof options.imageSrcSet?options.imageSrcSet:void 0,imageSizes:"string"==typeof options.imageSizes?options.imageSizes:void 0,media:"string"==typeof options.media?options.media:void 0})}},exports.preloadModule=function(href,options){if("string"==typeof href)if(options){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.m(href,{as:"string"==typeof options.as&&"script"!==options.as?options.as:void 0,crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0})}else Internals.d.m(href)},exports.requestFormReset=function(form){Internals.d.r(form)},exports.unstable_batchedUpdates=function(fn,a){return fn(a)},exports.useFormState=function(action,initialState,permalink){return ReactSharedInternals.H.useFormState(action,initialState,permalink)},exports.useFormStatus=function(){return ReactSharedInternals.H.useHostTransitionStatus()},exports.version="19.0.0"},"./node_modules/react-dom/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{!function checkDCE(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}(),module.exports=__webpack_require__("./node_modules/react-dom/cjs/react-dom.production.js")}}]);