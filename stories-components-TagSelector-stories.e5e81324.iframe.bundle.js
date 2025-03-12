/*! For license information please see stories-components-TagSelector-stories.e5e81324.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[3407,961],{"./src/stories/components/TagSelector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FormPrefill:()=>FormPrefill,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/FormComponents/TagSelector",component:__webpack_require__("./src/components/index.ts").Cx,tags:["autodocs"],argTypes:{},parameters:{storySource:{source:"import React from 'react';\nimport { TagSelector } from '../../components';\nconst meta = {\n    title: 'Components/FormComponents/TagSelector',\n    component: TagSelector,\n    tags: [\n        'autodocs'\n    ],\n    argTypes: {\n    },\n    parameters: {\n        layout: 'centered'\n    },\n    decorators: [\n        (Story)=>/*#__PURE__*/ React.createElement(\"div\", {\n                className: \"glx-form--input\"\n            }, /*#__PURE__*/ React.createElement(Story, null))\n    ]\n};\nexport default meta;\nexport const FormPrefill = {\n    args: {\n        value: [\n            'first'\n        ],\n        items: [\n            {\n                key: 'first',\n                text: 'First',\n                color: 'red',\n                icon: 'IOGlobe'\n            },\n            {\n                key: 'second',\n                text: 'Second',\n                color: 'green',\n                icon: 'IOBug'\n            },\n            {\n                key: 'third',\n                text: 'Third',\n                color: 'yellow'\n            },\n            {\n                key: 'x1',\n                text: 'X1-Badge',\n                color: 'black'\n            },\n            {\n                key: 'x2',\n                text: 'X2-Badge',\n                color: 'black'\n            },\n            {\n                key: 'x3',\n                text: 'X3-Badge',\n                color: '!#306d33&#ffffff!'\n            },\n            {\n                key: 'x4',\n                text: 'X4-Badge',\n                color: '!#7e1fe9&#ffffff!'\n            }\n        ]\n    }\n};\n",locationsMap:{"form-prefill":{startLoc:{col:27,line:21},endLoc:{col:1,line:66},startBody:{col:27,line:21},endBody:{col:1,line:66}}}},layout:"centered"},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"glx-form--input"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},FormPrefill={args:{value:["first"],items:[{key:"first",text:"First",color:"red",icon:"IOGlobe"},{key:"second",text:"Second",color:"green",icon:"IOBug"},{key:"third",text:"Third",color:"yellow"},{key:"x1",text:"X1-Badge",color:"black"},{key:"x2",text:"X2-Badge",color:"black"},{key:"x3",text:"X3-Badge",color:"!#306d33&#ffffff!"},{key:"x4",text:"X4-Badge",color:"!#7e1fe9&#ffffff!"}]}},__namedExportsOrder=["FormPrefill"];FormPrefill.parameters={...FormPrefill.parameters,docs:{...FormPrefill.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: ['first'],\n    items: [{\n      key: 'first',\n      text: 'First',\n      color: 'red',\n      icon: 'IOGlobe'\n    }, {\n      key: 'second',\n      text: 'Second',\n      color: 'green',\n      icon: 'IOBug'\n    }, {\n      key: 'third',\n      text: 'Third',\n      color: 'yellow'\n    }, {\n      key: 'x1',\n      text: 'X1-Badge',\n      color: 'black'\n    }, {\n      key: 'x2',\n      text: 'X2-Badge',\n      color: 'black'\n    }, {\n      key: 'x3',\n      text: 'X3-Badge',\n      color: '!#306d33&#ffffff!'\n    }, {\n      key: 'x4',\n      text: 'X4-Badge',\n      color: '!#7e1fe9&#ffffff!'\n    }]\n  }\n}",...FormPrefill.parameters?.docs?.source}}}},"./node_modules/react-dom/cjs/react-dom.production.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("./node_modules/react/index.js");function formatProdErrorMessage(code){var url="https://react.dev/errors/"+code;if(1<arguments.length){url+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)url+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+code+"; visit "+url+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function noop(){}var Internals={d:{f:noop,r:function(){throw Error(formatProdErrorMessage(522))},D:noop,C:noop,L:noop,m:noop,X:noop,S:noop,M:noop},p:0,findDOMNode:null},REACT_PORTAL_TYPE=Symbol.for("react.portal");var ReactSharedInternals=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function getCrossOriginStringAs(as,input){return"font"===as?"":"string"==typeof input?"use-credentials"===input?input:"":void 0}exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Internals,exports.createPortal=function(children,container){var key=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!container||1!==container.nodeType&&9!==container.nodeType&&11!==container.nodeType)throw Error(formatProdErrorMessage(299));return function createPortal$1(children,containerInfo,implementation){var key=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:REACT_PORTAL_TYPE,key:null==key?null:""+key,children,containerInfo,implementation}}(children,container,null,key)},exports.flushSync=function(fn){var previousTransition=ReactSharedInternals.T,previousUpdatePriority=Internals.p;try{if(ReactSharedInternals.T=null,Internals.p=2,fn)return fn()}finally{ReactSharedInternals.T=previousTransition,Internals.p=previousUpdatePriority,Internals.d.f()}},exports.preconnect=function(href,options){"string"==typeof href&&(options?options="string"==typeof(options=options.crossOrigin)?"use-credentials"===options?options:"":void 0:options=null,Internals.d.C(href,options))},exports.prefetchDNS=function(href){"string"==typeof href&&Internals.d.D(href)},exports.preinit=function(href,options){if("string"==typeof href&&options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin),integrity="string"==typeof options.integrity?options.integrity:void 0,fetchPriority="string"==typeof options.fetchPriority?options.fetchPriority:void 0;"style"===as?Internals.d.S(href,"string"==typeof options.precedence?options.precedence:void 0,{crossOrigin,integrity,fetchPriority}):"script"===as&&Internals.d.X(href,{crossOrigin,integrity,fetchPriority,nonce:"string"==typeof options.nonce?options.nonce:void 0})}},exports.preinitModule=function(href,options){if("string"==typeof href)if("object"==typeof options&&null!==options){if(null==options.as||"script"===options.as){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.M(href,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0})}}else null==options&&Internals.d.M(href)},exports.preload=function(href,options){if("string"==typeof href&&"object"==typeof options&&null!==options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin);Internals.d.L(href,as,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0,type:"string"==typeof options.type?options.type:void 0,fetchPriority:"string"==typeof options.fetchPriority?options.fetchPriority:void 0,referrerPolicy:"string"==typeof options.referrerPolicy?options.referrerPolicy:void 0,imageSrcSet:"string"==typeof options.imageSrcSet?options.imageSrcSet:void 0,imageSizes:"string"==typeof options.imageSizes?options.imageSizes:void 0,media:"string"==typeof options.media?options.media:void 0})}},exports.preloadModule=function(href,options){if("string"==typeof href)if(options){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.m(href,{as:"string"==typeof options.as&&"script"!==options.as?options.as:void 0,crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0})}else Internals.d.m(href)},exports.requestFormReset=function(form){Internals.d.r(form)},exports.unstable_batchedUpdates=function(fn,a){return fn(a)},exports.useFormState=function(action,initialState,permalink){return ReactSharedInternals.H.useFormState(action,initialState,permalink)},exports.useFormStatus=function(){return ReactSharedInternals.H.useHostTransitionStatus()},exports.version="19.0.0"},"./node_modules/react-dom/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{!function checkDCE(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}(),module.exports=__webpack_require__("./node_modules/react-dom/cjs/react-dom.production.js")}}]);