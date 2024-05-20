"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[2005],{"./src/stories/components/SmartInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Limit:()=>Limit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/SmartInput",component:__webpack_require__("./src/components/index.ts").a7,tags:["autodocs"],argTypes:{},parameters:{layout:"centered"}};var _ref,Default={args:{placeholder:"smart search",searchFC:(_ref=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(s){return _ts_generator(this,(function(_state){return[2,_to_consumable_array([0,1,2,3,4,5,6,7,8,10].map((function(x){return{key:"0".concat(x),icon:"IOAlbums",title:"Album ".concat(x),detail:x%3==0?"Detail":void 0}}))).find((function(e){return e.title.includes(s)}))||null]}))})),function(s){return _ref.apply(this,arguments)})}},Limit={args:{placeholder:"smart search",max:5,list:_to_consumable_array([0,1,2,3,4,5,6,7,8,10].map((function(x){return{key:"0".concat(x),icon:"IOAlbums",title:"Album ".concat(x),detail:x%3==0?"Detail":void 0}})))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'smart search',\n    searchFC: async s => {\n      return [...[0, 1, 2, 3, 4, 5, 6, 7, 8, 10].map(x => ({\n        key: `0${x}`,\n        icon: 'IOAlbums',\n        title: `Album ${x}`,\n        detail: x % 3 === 0 ? 'Detail' : undefined\n      }))].find(e => e.title.includes(s)) || null;\n    }\n  }\n}",...Default.parameters?.docs?.source}}},Limit.parameters={...Limit.parameters,docs:{...Limit.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'smart search',\n    max: 5,\n    list: [...[0, 1, 2, 3, 4, 5, 6, 7, 8, 10].map(x => ({\n      key: `0${x}`,\n      icon: 'IOAlbums',\n      title: `Album ${x}`,\n      detail: x % 3 === 0 ? 'Detail' : undefined\n    }))]\n  }\n}",...Limit.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Limit"]}}]);