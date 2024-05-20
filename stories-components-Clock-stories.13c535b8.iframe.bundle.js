"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[8222],{"./src/stories/components/Clock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Analog:()=>Analog,Cube:()=>Cube,Custom:()=>Custom,Default:()=>Default,Numeric:()=>Numeric,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),_components_clock_type__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/clock/type.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Clock",component:_components__WEBPACK_IMPORTED_MODULE_1__.zD,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"}};var Default={args:{mode:_components__WEBPACK_IMPORTED_MODULE_1__.YP.ANALOG}},Cube={args:{mode:_components__WEBPACK_IMPORTED_MODULE_1__.YP.CUBE}},Analog={args:{mode:_components__WEBPACK_IMPORTED_MODULE_1__.YP.ANALOG}},Numeric={args:{mode:_components__WEBPACK_IMPORTED_MODULE_1__.YP.NUMERIC}},Custom={args:{custom:function(param){var h=param.h,m=param.m,s=param.s;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"glx-default-text"},(0,_components_clock_type__WEBPACK_IMPORTED_MODULE_2__.e)(h),":",(0,_components_clock_type__WEBPACK_IMPORTED_MODULE_2__.e)(m),":",(0,_components_clock_type__WEBPACK_IMPORTED_MODULE_2__.e)(s))}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    mode: ClockEnum.ANALOG\n  }\n}",...Default.parameters?.docs?.source}}},Cube.parameters={...Cube.parameters,docs:{...Cube.parameters?.docs,source:{originalSource:"{\n  args: {\n    mode: ClockEnum.CUBE\n  }\n}",...Cube.parameters?.docs?.source}}},Analog.parameters={...Analog.parameters,docs:{...Analog.parameters?.docs,source:{originalSource:"{\n  args: {\n    mode: ClockEnum.ANALOG\n  }\n}",...Analog.parameters?.docs?.source}}},Numeric.parameters={...Numeric.parameters,docs:{...Numeric.parameters?.docs,source:{originalSource:"{\n  args: {\n    mode: ClockEnum.NUMERIC\n  }\n}",...Numeric.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:'{\n  args: {\n    custom: ({\n      h,\n      m,\n      s\n    }) => <span className="glx-default-text">\n        {pad(h)}:{pad(m)}:{pad(s)}\n      </span>\n  }\n}',...Custom.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Cube","Analog","Numeric","Custom"]}}]);