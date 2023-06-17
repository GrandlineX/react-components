"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[461],{"./src/stories/components/Notification.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:function(){return Button},Color:function(){return Color},Default:function(){return Default},FallbackIcon:function(){return FallbackIcon},Icon:function(){return Icon},Menu:function(){return Menu},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@grandlinex/react-icons/dist/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Components/Notification",component:_components__WEBPACK_IMPORTED_MODULE_2__.NotificationElement,tags:["autodocs"],argTypes:{}};__webpack_exports__.default=meta;const Default={args:{image:"https://www.grandlinex.com/favicon.ico",el:{key:"1",active:!1,selected:!1,title:"Notification",message:"Notification message",date:"2020-01-01"},menu:[{key:"1",label:"Play"}]}},FallbackIcon={args:{el:{key:"3",active:!0,selected:!1,title:"Notification",message:"Notification message",date:"2020-01-01"},menu:[{key:"1",label:"Play"}],fallbackIcon:{icon:"IOMic",color:"#0f7a14"}}},Icon={args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,{}),el:{key:"3",active:!0,selected:!1,title:"Notification",message:"Notification message",date:"2020-01-01"},menu:[{key:"1",label:"Play"}]}},Menu={name:"Notification with dropdown menu",args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,{}),el:{key:"3",active:!0,selected:!1,title:"Notification",message:"Notification message",date:"2020-01-01"},menu:[{key:"1",label:"Play"},{key:"2",label:"Play 2"}]}},Button={name:"Notification with button",args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,{}),el:{key:"3",active:!0,selected:!0,title:"Notification",message:"Notification message",date:"2020-01-01"},image:"https://www.grandlinex.com/favicon.ico",button:[{onClick:async()=>{},show:()=>!0,content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,{}),tooltip:"Button 1 tooltip",key:"1"},{onClick:async()=>{},show:()=>!0,content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,{}),tooltip:"Button 1 tooltip",key:"2"},{onClick:async()=>{},show:()=>!0,content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,{}),tooltip:"Button 1 tooltip",key:"3"}]}},Color={args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOPlay,{}),el:{key:"3",active:!0,selected:!0,title:"Notification",message:"Notification message",date:"2020-01-01"},image:"https://www.grandlinex.com/favicon.ico",color:"#ff0000"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    image: 'https://www.grandlinex.com/favicon.ico',\n    el: {\n      key: '1',\n      active: false,\n      selected: false,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    menu: [{\n      key: '1',\n      label: 'Play'\n    }]\n  }\n}",...Default.parameters?.docs?.source}}},FallbackIcon.parameters={...FallbackIcon.parameters,docs:{...FallbackIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    el: {\n      key: '3',\n      active: true,\n      selected: false,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    menu: [{\n      key: '1',\n      label: 'Play'\n    }],\n    fallbackIcon: {\n      icon: 'IOMic',\n      color: '#0f7a14'\n    }\n  }\n}",...FallbackIcon.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <IOPlay />,\n    el: {\n      key: '3',\n      active: true,\n      selected: false,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    menu: [{\n      key: '1',\n      label: 'Play'\n    }]\n  }\n}",...Icon.parameters?.docs?.source}}},Menu.parameters={...Menu.parameters,docs:{...Menu.parameters?.docs,source:{originalSource:"{\n  name: 'Notification with dropdown menu',\n  args: {\n    icon: <IOPlay />,\n    el: {\n      key: '3',\n      active: true,\n      selected: false,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    menu: [{\n      key: '1',\n      label: 'Play'\n    }, {\n      key: '2',\n      label: 'Play 2'\n    }]\n  }\n}",...Menu.parameters?.docs?.source}}},Button.parameters={...Button.parameters,docs:{...Button.parameters?.docs,source:{originalSource:"{\n  name: 'Notification with button',\n  args: {\n    icon: <IOPlay />,\n    el: {\n      key: '3',\n      active: true,\n      selected: true,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    image: 'https://www.grandlinex.com/favicon.ico',\n    button: [{\n      onClick: async () => {},\n      show: () => true,\n      content: <IOPlay />,\n      tooltip: 'Button 1 tooltip',\n      key: '1'\n    }, {\n      onClick: async () => {},\n      show: () => true,\n      content: <IOPlay />,\n      tooltip: 'Button 1 tooltip',\n      key: '2'\n    }, {\n      onClick: async () => {},\n      show: () => true,\n      content: <IOPlay />,\n      tooltip: 'Button 1 tooltip',\n      key: '3'\n    }]\n  }\n}",...Button.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <IOPlay />,\n    el: {\n      key: '3',\n      active: true,\n      selected: true,\n      title: 'Notification',\n      message: 'Notification message',\n      date: '2020-01-01'\n    },\n    image: 'https://www.grandlinex.com/favicon.ico',\n    color: '#ff0000'\n  }\n}",...Color.parameters?.docs?.source}}};const __namedExportsOrder=["Default","FallbackIcon","Icon","Menu","Button","Color"]}}]);