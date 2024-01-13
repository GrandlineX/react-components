"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[1431],{"./src/stories/components/MediaPlayer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom_Controlls:()=>Custom_Controlls,Default:()=>Default,OnEvent:()=>OnEvent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MediaPlayer",component:_components__WEBPACK_IMPORTED_MODULE_1__.MediaPlayer,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"}},poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",Default={args:{poster,src,width:"100%"}},ref=react__WEBPACK_IMPORTED_MODULE_0__.createRef(),OnEvent={storyName:"On Events",args:{poster,src,width:"100%",onStart:()=>{console.log("onStart")},onEnded:()=>{console.log("onEnded")},onPause:()=>{console.log("onPause")},onPlay:()=>{console.log("onPlay")},onDurationChange:e=>{console.log("onDurationChange",e)},onProgress:e=>{console.log("onProgress",e)}}},Custom_Controlls={args:{poster,src,width:"100%",controls:!1,ref,bottomRow:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.Grid,{flex:!0,flexRow:!0,hCenter:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{ref.current&&(console.log(ref.current.getCurrentTime()),ref.current.seekTo(ref.current.getCurrentTime()+10))},children:"Skip +10"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{ref.current&&(console.log(ref.current.getCurrentTime()),ref.current.seekTo(ref.current.getCurrentTime()-10))},children:"Skip -10"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{ref.current?.play()},children:"Play"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{ref.current?.pause()},children:"Pause"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select",{defaultValue:1,onChange:e=>{ref.current?.setPlayBackRate(e.target.value)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:.5,children:"0.5x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:1,children:"1x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:1.25,children:"1.25x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:1.5,children:"1.5x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option",{value:2,children:"2x"})]})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    poster,\n    src,\n    width: '100%'\n  }\n}",...Default.parameters?.docs?.source}}},OnEvent.parameters={...OnEvent.parameters,docs:{...OnEvent.parameters?.docs,source:{originalSource:"{\n  storyName: 'On Events',\n  args: {\n    poster,\n    src,\n    width: '100%',\n    onStart: () => {\n      console.log('onStart');\n    },\n    onEnded: () => {\n      console.log('onEnded');\n    },\n    onPause: () => {\n      console.log('onPause');\n    },\n    onPlay: () => {\n      console.log('onPlay');\n    },\n    onDurationChange: e => {\n      console.log('onDurationChange', e);\n    },\n    onProgress: e => {\n      console.log('onProgress', e);\n    }\n  }\n}",...OnEvent.parameters?.docs?.source}}},Custom_Controlls.parameters={...Custom_Controlls.parameters,docs:{...Custom_Controlls.parameters?.docs,source:{originalSource:"{\n  args: {\n    poster,\n    src,\n    width: '100%',\n    controls: false,\n    ref,\n    bottomRow: <Grid flex flexRow hCenter>\n        <button onClick={() => {\n        if (ref.current) {\n          console.log(ref.current.getCurrentTime());\n          ref.current.seekTo(ref.current.getCurrentTime() + 10);\n        }\n      }}>\n          Skip +10\n        </button>\n        <button onClick={() => {\n        if (ref.current) {\n          console.log(ref.current.getCurrentTime());\n          ref.current.seekTo(ref.current.getCurrentTime() - 10);\n        }\n      }}>\n          Skip -10\n        </button>\n        <button onClick={() => {\n        ref.current?.play();\n      }}>\n          Play\n        </button>\n        <button onClick={() => {\n        ref.current?.pause();\n      }}>\n          Pause\n        </button>\n\n        <select defaultValue={1.0} onChange={e => {\n        ref.current?.setPlayBackRate((e.target.value as any));\n      }}>\n          <option value={0.5}>0.5x</option>\n          <option value={1.0}>1x</option>\n          <option value={1.25}>1.25x</option>\n          <option value={1.5}>1.5x</option>\n          <option value={2.0}>2x</option>\n        </select>\n      </Grid>\n  }\n}",...Custom_Controlls.parameters?.docs?.source}}};const __namedExportsOrder=["Default","OnEvent","Custom_Controlls"]}}]);