"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[6101],{"./src/stories/components/SmartInput.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Limit:function(){return Limit},__namedExportsOrder:function(){return __namedExportsOrder}});const meta={title:"Components/SmartInput",component:__webpack_require__("./src/components/index.ts").SmartInput,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"}};__webpack_exports__.default=meta;const Default={args:{placeholder:"smart search",searchFC:async s=>[...[0,1,2,3,4,5,6,7,8,10].map((x=>({key:`0${x}`,icon:"IOAlbums",title:`Album ${x}`,detail:x%3==0?"Detail":void 0})))].find((e=>e.title.includes(s)))||null}},Limit={args:{placeholder:"smart search",max:5,list:[...[0,1,2,3,4,5,6,7,8,10].map((x=>({key:`0${x}`,icon:"IOAlbums",title:`Album ${x}`,detail:x%3==0?"Detail":void 0})))]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'smart search',\n    searchFC: async s => {\n      return [...[0, 1, 2, 3, 4, 5, 6, 7, 8, 10].map(x => ({\n        key: `0${x}`,\n        icon: 'IOAlbums',\n        title: `Album ${x}`,\n        detail: x % 3 === 0 ? 'Detail' : undefined\n      }))].find(e => e.title.includes(s)) || null;\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Limit.parameters={...Limit.parameters,docs:{...Limit.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'smart search',\n    max: 5,\n    list: [...[0, 1, 2, 3, 4, 5, 6, 7, 8, 10].map(x => ({\n      key: `0${x}`,\n      icon: 'IOAlbums',\n      title: `Album ${x}`,\n      detail: x % 3 === 0 ? 'Detail' : undefined\n    }))]\n  }\n}",...Limit.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Limit"]}}]);