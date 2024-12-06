/*! For license information please see stories-components-MediaPlayer-stories.81154e90.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[2475,961],{"./src/stories/components/MediaPlayer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom_Controlls:()=>Custom_Controlls,Default:()=>Default,OnEvent:()=>OnEvent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MediaPlayer",component:_components__WEBPACK_IMPORTED_MODULE_1__.KJ,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"}},poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",Default={args:{poster,src,width:"100%"}},ref=react__WEBPACK_IMPORTED_MODULE_0__.createRef(),OnEvent={storyName:"On Events",args:{poster,src,width:"100%",onStart:()=>{console.log("onStart")},onEnded:()=>{console.log("onEnded")},onPause:()=>{console.log("onPause")},onPlay:()=>{console.log("onPlay")},onDurationChange:e=>{console.log("onDurationChange",e)},onProgress:e=>{console.log("onProgress",e)}}},Custom_Controlls={args:{poster,src,width:"100%",controls:!1,ref,bottomRow:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.xA,{flex:!0,flexRow:!0,hCenter:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>{ref.current&&(console.log(ref.current.getCurrentTime()),ref.current.seekTo(ref.current.getCurrentTime()+10))}},"Skip +10"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>{ref.current&&(console.log(ref.current.getCurrentTime()),ref.current.seekTo(ref.current.getCurrentTime()-10))}},"Skip -10"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>{ref.current?.play()}},"Play"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>{ref.current?.pause()}},"Pause"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{defaultValue:1,onChange:e=>{ref.current?.setPlayBackRate(e.target.value)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:.5},"0.5x"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:1},"1x"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:1.25},"1.25x"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:1.5},"1.5x"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:2},"2x")))}},__namedExportsOrder=["Default","OnEvent","Custom_Controlls"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    poster,\n    src,\n    width: '100%'\n  }\n}",...Default.parameters?.docs?.source}}},OnEvent.parameters={...OnEvent.parameters,docs:{...OnEvent.parameters?.docs,source:{originalSource:"{\n  storyName: 'On Events',\n  args: {\n    poster,\n    src,\n    width: '100%',\n    onStart: () => {\n      console.log('onStart');\n    },\n    onEnded: () => {\n      console.log('onEnded');\n    },\n    onPause: () => {\n      console.log('onPause');\n    },\n    onPlay: () => {\n      console.log('onPlay');\n    },\n    onDurationChange: e => {\n      console.log('onDurationChange', e);\n    },\n    onProgress: e => {\n      console.log('onProgress', e);\n    }\n  }\n}",...OnEvent.parameters?.docs?.source}}},Custom_Controlls.parameters={...Custom_Controlls.parameters,docs:{...Custom_Controlls.parameters?.docs,source:{originalSource:"{\n  args: {\n    poster,\n    src,\n    width: '100%',\n    controls: false,\n    ref,\n    bottomRow: <Grid flex flexRow hCenter>\n        <button onClick={() => {\n        if (ref.current) {\n          console.log(ref.current.getCurrentTime());\n          ref.current.seekTo(ref.current.getCurrentTime() + 10);\n        }\n      }}>\n          Skip +10\n        </button>\n        <button onClick={() => {\n        if (ref.current) {\n          console.log(ref.current.getCurrentTime());\n          ref.current.seekTo(ref.current.getCurrentTime() - 10);\n        }\n      }}>\n          Skip -10\n        </button>\n        <button onClick={() => {\n        ref.current?.play();\n      }}>\n          Play\n        </button>\n        <button onClick={() => {\n        ref.current?.pause();\n      }}>\n          Pause\n        </button>\n\n        <select defaultValue={1.0} onChange={e => {\n        ref.current?.setPlayBackRate(e.target.value as any);\n      }}>\n          <option value={0.5}>0.5x</option>\n          <option value={1.0}>1x</option>\n          <option value={1.25}>1.25x</option>\n          <option value={1.5}>1.5x</option>\n          <option value={2.0}>2x</option>\n        </select>\n      </Grid>\n  }\n}",...Custom_Controlls.parameters?.docs?.source}}}},"./node_modules/react-dom/cjs/react-dom.production.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("./node_modules/react/index.js");function formatProdErrorMessage(code){var url="https://react.dev/errors/"+code;if(1<arguments.length){url+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)url+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+code+"; visit "+url+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function noop(){}var Internals={d:{f:noop,r:function(){throw Error(formatProdErrorMessage(522))},D:noop,C:noop,L:noop,m:noop,X:noop,S:noop,M:noop},p:0,findDOMNode:null},REACT_PORTAL_TYPE=Symbol.for("react.portal");var ReactSharedInternals=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function getCrossOriginStringAs(as,input){return"font"===as?"":"string"==typeof input?"use-credentials"===input?input:"":void 0}exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Internals,exports.createPortal=function(children,container){var key=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!container||1!==container.nodeType&&9!==container.nodeType&&11!==container.nodeType)throw Error(formatProdErrorMessage(299));return function createPortal$1(children,containerInfo,implementation){var key=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:REACT_PORTAL_TYPE,key:null==key?null:""+key,children,containerInfo,implementation}}(children,container,null,key)},exports.flushSync=function(fn){var previousTransition=ReactSharedInternals.T,previousUpdatePriority=Internals.p;try{if(ReactSharedInternals.T=null,Internals.p=2,fn)return fn()}finally{ReactSharedInternals.T=previousTransition,Internals.p=previousUpdatePriority,Internals.d.f()}},exports.preconnect=function(href,options){"string"==typeof href&&(options?options="string"==typeof(options=options.crossOrigin)?"use-credentials"===options?options:"":void 0:options=null,Internals.d.C(href,options))},exports.prefetchDNS=function(href){"string"==typeof href&&Internals.d.D(href)},exports.preinit=function(href,options){if("string"==typeof href&&options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin),integrity="string"==typeof options.integrity?options.integrity:void 0,fetchPriority="string"==typeof options.fetchPriority?options.fetchPriority:void 0;"style"===as?Internals.d.S(href,"string"==typeof options.precedence?options.precedence:void 0,{crossOrigin,integrity,fetchPriority}):"script"===as&&Internals.d.X(href,{crossOrigin,integrity,fetchPriority,nonce:"string"==typeof options.nonce?options.nonce:void 0})}},exports.preinitModule=function(href,options){if("string"==typeof href)if("object"==typeof options&&null!==options){if(null==options.as||"script"===options.as){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.M(href,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0})}}else null==options&&Internals.d.M(href)},exports.preload=function(href,options){if("string"==typeof href&&"object"==typeof options&&null!==options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin);Internals.d.L(href,as,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0,type:"string"==typeof options.type?options.type:void 0,fetchPriority:"string"==typeof options.fetchPriority?options.fetchPriority:void 0,referrerPolicy:"string"==typeof options.referrerPolicy?options.referrerPolicy:void 0,imageSrcSet:"string"==typeof options.imageSrcSet?options.imageSrcSet:void 0,imageSizes:"string"==typeof options.imageSizes?options.imageSizes:void 0,media:"string"==typeof options.media?options.media:void 0})}},exports.preloadModule=function(href,options){if("string"==typeof href)if(options){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.m(href,{as:"string"==typeof options.as&&"script"!==options.as?options.as:void 0,crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0})}else Internals.d.m(href)},exports.requestFormReset=function(form){Internals.d.r(form)},exports.unstable_batchedUpdates=function(fn,a){return fn(a)},exports.useFormState=function(action,initialState,permalink){return ReactSharedInternals.H.useFormState(action,initialState,permalink)},exports.useFormStatus=function(){return ReactSharedInternals.H.useHostTransitionStatus()},exports.version="19.0.0"},"./node_modules/react-dom/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{!function checkDCE(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}(),module.exports=__webpack_require__("./node_modules/react-dom/cjs/react-dom.production.js")}}]);