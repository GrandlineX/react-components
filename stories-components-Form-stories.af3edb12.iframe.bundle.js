"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[3214],{"./src/stories/components/Form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CompactForm:()=>CompactForm,Default:()=>Default,FormCustomSubmit:()=>FormCustomSubmit,FormError:()=>FormError,FormPrefill:()=>FormPrefill,Multy:()=>Multy,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/util/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Form",component:_components__WEBPACK_IMPORTED_MODULE_1__.lV,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"}},fullConf=[[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TEXT,key:"key01",label:"1. Text",help:"Simple Help Text "}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.ICON_TEXT,key:"key01b",label:"1b. Icon Text"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.PASSWORD,key:"key02",label:"2. Password",help:"Simple Help Text "}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TEXT,key:"key03a",label:"3a. Text",help:"Simple Help Text "},{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TEXT,key:"key03b",label:"3b. Text"},{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TEXT,key:"key03c",label:"3b. Text Disabeld",disabled:!0}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.NUMBER,key:"key04",label:"4. Number"},{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.EMPTY,key:"key04b"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.CHECKBOX,key:"key05",label:"5. CheckBox"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.DROPDOWN,items:[{key:"first",name:"First"},{key:"sec",name:"Second"},{key:"third",name:"Third",meta:{group:"group1"}},{key:"disabled",name:"Disabled",meta:{group:"group1"},disabled:!0}],key:"key06",label:"6. Dropdown"}],[{key:"key07",type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.CUSTOM,customElement:{render:(key,form,updateForm,items)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"text",value:form[key],onChange:e=>{updateForm(key,e.target.value)}}),init:""},label:"7. Custom"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.DATE,key:"key08",label:"8. Date"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TIME,key:"key09",label:"9. Time"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.DATE_TIME,key:"key10",label:"10. DateTime"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.COLOR,key:"key11",label:"11. Color"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.RANGE,key:"key12",label:"12. Range"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.CHECKBOX,key:"key13",label:"13. CheckBox with numeric value",beforeSubmit:v=>v?1:0}],[[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TAG_SELECTOR,key:"key14",label:"14. Tag Selector",items:[{key:"first",name:"First",meta:"red",icon:"IOGlobe"},{key:"second",name:"Second",meta:"green",icon:"IOBug"},{key:"third",name:"Third",meta:"yellow"},{key:"x1",name:"X1-Badge",meta:"black"},{key:"x2",name:"X2-Badge",meta:"black"},{key:"x3",name:"X3-Badge",meta:"black"},{key:"x4",name:"X4-Badge",meta:"black"}],onChange:async(fields,change)=>{console.log(fields,change)}}],null],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.USER_SELECTOR,key:"key15",label:"15. User Selector",preload:async s=>({userId:"1",subTitle:s,firstName:"Random",lastName:"User",gravatarEmail:s}),onChange:async user=>{console.log(user)}}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.USER_SELECTOR,key:"key16",label:"16. User Selector",items:[{key:"1",name:"Random User",meta:{userId:"1",subTitle:"Random User's Subtitle",firstName:"Random",lastName:"User",gravatarEmail:"randon@email.com"}},{key:"2",name:"Random User 2",meta:{userId:"12",subTitle:"Random User's Subtitle 2",firstName:"Random2",lastName:"User2",gravatarEmail:"randon2@email.com"}}],onChange:async user=>{console.log(user)}}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.FILE,key:"key17",label:"17. File"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.ICON,key:"key18",label:"18. Icon"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.CONTENT_SWITCH,key:"key19",label:"19. ContentSwitch",items:[{key:"first",name:"First"},{key:"sec",name:"Second"},{key:"third",name:"Third"}]}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.IMAGE_SELECT,key:"key20",label:"20. Image Select",items:[{key:"first",meta:{url:"https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA"},name:"Earth"},{key:"second",meta:{url:"https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA"},name:"Wave"},{key:"third",meta:{url:"https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA"},name:"Earth"},{key:"fourth",meta:{url:"https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA"},name:"Wave"},{key:"fifth",meta:{url:"https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA"},name:"Earth"}]}]],Default={args:{className:"glx-pb-8",options:fullConf,submit:{onSubmit:async form=>{console.log(form),await(0,_util__WEBPACK_IMPORTED_MODULE_2__.yy)(4e3)},loadingMessage:"Loading...",loading:!0}}},CompactForm={args:{className:"glx-pb-8",options:fullConf,submit:{onSubmit:async form=>{console.log(form),await(0,_util__WEBPACK_IMPORTED_MODULE_2__.yy)(4e3)},loadingMessage:"Loading...",loading:!0},compact:!0}},FormPrefill={args:{className:"glx-pb-8",options:fullConf,submit:{onSubmit:async form=>{console.log(form),await(0,_util__WEBPACK_IMPORTED_MODULE_2__.yy)(4e3)},loadingMessage:"Loading...",loading:!0},defaultState:{key01:"Simple Text",key01b:{text:"Simple Text",icon:"IODiamond"},key02:"Simple Password",key03a:"Simple",key03b:"Text",key03c:"Disabeld",key04:"123",key05:!0,key06:"first",key07:"custom field",key08:"2020-01-01",key09:"22:22",key10:"2020-01-01 22:22",key11:"#ff0000",key12:20,key13:!0,key14:["first","third"],key15:{userId:"1",subTitle:"Random User",firstName:"Random",lastName:"User",gravatarEmail:"test@user.de"},key19:1,key20:"first"}}},FormError={args:{className:"glx-pb-8",options:[[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TEXT,key:"key01",label:"1. Text"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.PASSWORD,key:"key02",label:"2. Password"}]],submit:{onSubmit:async form=>{console.log(form),await(0,_util__WEBPACK_IMPORTED_MODULE_2__.yy)(4e3)},loadingMessage:"Loading...",loading:!0},compact:!0,defaultError:{global:["Global error #1 ","Global error #2 ","Global error #2 ","Global error #2 ","Global error #2 ","Global error #2 ","Very very long error message"],field:[{key:"key01",message:"Error #1 "},{key:"key02",message:"Error #2 witch is very very long "}]}}},FormCustomSubmit={args:{className:"glx-pb-8",options:[[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TEXT,key:"key01",label:"1. Text",required:!0}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.PASSWORD,key:"key02",label:"2. Password",required:!0}]],submit:{onSubmit:async({validateRequired})=>{await(0,_util__WEBPACK_IMPORTED_MODULE_2__.yy)(4e3),validateRequired(!0)},buttonCenter:!0,loadingMessage:"Loading...",loading:!0,buttonNode:submit=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:submit},"Custom Submit")},compact:!0}},Multy={name:"Multiple fields write",args:{className:"glx-pb-8",options:[[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TEXT,key:"key01",label:"1. Text"}],[{type:_components__WEBPACK_IMPORTED_MODULE_1__.qR.TEXT,key:"key02",label:"2. Text"}]],submit:{onSubmit:async()=>{await(0,_util__WEBPACK_IMPORTED_MODULE_2__.yy)(4e3)},buttonCenter:!0,loadingMessage:"Loading...",loading:!0,buttonNode:submit=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:submit},"Custom Submit")},compact:!0},render:args=>{const[formData,setForm]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.lV,{defaultState:formData,options:args.options,className:args.className,submit:args.submit,compact:args.compact,onChange:({changed,update})=>{const{value}=changed,out={key01:value,key02:value};setForm(out),update(out)}})}},__namedExportsOrder=["Default","CompactForm","FormPrefill","FormError","FormCustomSubmit","Multy"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'glx-pb-8',\n    options: fullConf,\n    submit: {\n      onSubmit: async form => {\n        console.log(form);\n        await sleep(4000);\n      },\n      loadingMessage: 'Loading...',\n      loading: true\n    }\n  }\n}",...Default.parameters?.docs?.source}}},CompactForm.parameters={...CompactForm.parameters,docs:{...CompactForm.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'glx-pb-8',\n    options: fullConf,\n    submit: {\n      onSubmit: async form => {\n        console.log(form);\n        await sleep(4000);\n      },\n      loadingMessage: 'Loading...',\n      loading: true\n    },\n    compact: true\n  }\n}",...CompactForm.parameters?.docs?.source}}},FormPrefill.parameters={...FormPrefill.parameters,docs:{...FormPrefill.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'glx-pb-8',\n    options: fullConf,\n    submit: {\n      onSubmit: async form => {\n        console.log(form);\n        await sleep(4000);\n      },\n      loadingMessage: 'Loading...',\n      loading: true\n    },\n    defaultState: {\n      key01: 'Simple Text',\n      key01b: {\n        text: 'Simple Text',\n        icon: 'IODiamond'\n      },\n      key02: 'Simple Password',\n      key03a: 'Simple',\n      key03b: 'Text',\n      key03c: 'Disabeld',\n      key04: '123',\n      key05: true,\n      key06: 'first',\n      key07: 'custom field',\n      key08: '2020-01-01',\n      key09: '22:22',\n      key10: '2020-01-01 22:22',\n      key11: '#ff0000',\n      key12: 20,\n      key13: true,\n      key14: ['first', 'third'],\n      key15: {\n        userId: '1',\n        subTitle: 'Random User',\n        firstName: 'Random',\n        lastName: 'User',\n        gravatarEmail: 'test@user.de'\n      },\n      key19: 1,\n      key20: 'first'\n    }\n  }\n}",...FormPrefill.parameters?.docs?.source}}},FormError.parameters={...FormError.parameters,docs:{...FormError.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'glx-pb-8',\n    options: [[{\n      type: InputOptionType.TEXT,\n      key: 'key01',\n      label: '1. Text'\n    }], [{\n      type: InputOptionType.PASSWORD,\n      key: 'key02',\n      label: '2. Password'\n    }]],\n    submit: {\n      onSubmit: async form => {\n        console.log(form);\n        await sleep(4000);\n      },\n      loadingMessage: 'Loading...',\n      loading: true\n    },\n    compact: true,\n    defaultError: {\n      global: ['Global error #1 ', 'Global error #2 ', 'Global error #2 ', 'Global error #2 ', 'Global error #2 ', 'Global error #2 ', 'Very very long error message'],\n      field: [{\n        key: 'key01',\n        message: 'Error #1 '\n      }, {\n        key: 'key02',\n        message: 'Error #2 witch is very very long '\n      }]\n    }\n  }\n}",...FormError.parameters?.docs?.source}}},FormCustomSubmit.parameters={...FormCustomSubmit.parameters,docs:{...FormCustomSubmit.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'glx-pb-8',\n    options: [[{\n      type: InputOptionType.TEXT,\n      key: 'key01',\n      label: '1. Text',\n      required: true\n    }], [{\n      type: InputOptionType.PASSWORD,\n      key: 'key02',\n      label: '2. Password',\n      required: true\n    }]],\n    submit: {\n      onSubmit: async ({\n        validateRequired\n      }) => {\n        await sleep(4000);\n        validateRequired(true);\n      },\n      buttonCenter: true,\n      loadingMessage: 'Loading...',\n      loading: true,\n      buttonNode: submit => <button onClick={submit}>Custom Submit</button>\n    },\n    compact: true\n  }\n}",...FormCustomSubmit.parameters?.docs?.source}}},Multy.parameters={...Multy.parameters,docs:{...Multy.parameters?.docs,source:{originalSource:"{\n  name: 'Multiple fields write',\n  args: {\n    className: 'glx-pb-8',\n    options: [[{\n      type: InputOptionType.TEXT,\n      key: 'key01',\n      label: '1. Text'\n    }], [{\n      type: InputOptionType.TEXT,\n      key: 'key02',\n      label: '2. Text'\n    }]],\n    submit: {\n      onSubmit: async () => {\n        await sleep(4000);\n      },\n      buttonCenter: true,\n      loadingMessage: 'Loading...',\n      loading: true,\n      buttonNode: submit => <button onClick={submit}>Custom Submit</button>\n    },\n    compact: true\n  },\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const [formData, setForm] = useState<any>(undefined);\n    return <Form defaultState={formData} options={args.options} className={args.className} submit={args.submit} compact={args.compact} onChange={({\n      changed,\n      update\n    }) => {\n      const {\n        value\n      } = changed!;\n      const out = {\n        key01: value,\n        key02: value\n      };\n      setForm(out);\n      update(out);\n    }} />;\n  }\n}",...Multy.parameters?.docs?.source}}}}}]);