(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[5008],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/style/StyleTable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>StyleTable});__webpack_require__("./node_modules/react/index.js");var _grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@grandlinex/react-icons/dist/index.js"),_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/util/index.tsx"),_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/index.ts"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/style/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function resolveStyleMetaProps(data,depth){if(depth&&depth>100)throw new Error("Too many levels of inheritance");const{extend,properties}=data;if(extend){const ext=new Map;return extend.forEach((ex=>{const sm=function findStlyeMeta(className){const keys=Object.keys(_styles__WEBPACK_IMPORTED_MODULE_4__.c);for(const key of keys){const found=_styles__WEBPACK_IMPORTED_MODULE_4__.c[key].find((m=>m.className===className));if(found)return found}return null}(ex);sm&&resolveStyleMetaProps(sm,(depth||0)+1).forEach((([name,value])=>ext.set(name,value)))})),properties.forEach((([name,value])=>ext.set(name,value))),Array.from(ext.entries())}return properties}function StyledCode({children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code",{className:(0,_util__WEBPACK_IMPORTED_MODULE_2__.UN)("styled-class"),children})}function StyleTable({data,showDescription}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table",{className:"styled-table",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th",{children:"Class"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th",{children:"Properties"}),showDescription?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th",{children:"Description"}):null]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody",{children:data.map((cur=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__.Grid,{flex:!0,flexR:!0,vCenter:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledCode,{children:cur.className}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"styled-button",onClick:()=>(0,_util__WEBPACK_IMPORTED_MODULE_2__.ye)(cur.className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grandlinex_react_icons__WEBPACK_IMPORTED_MODULE_1__.IOCopyOutline,{})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:resolveStyleMetaProps(cur).map((([name,value])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code",{className:"styled-name",children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code",{children:": "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code",{className:"styled-value",children:value})]})))})}),showDescription&&cur.description?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td",{children:cur.description}):null]})))})]})}StyledCode.displayName="StyledCode",StyleTable.displayName="StyleTable",StyleTable.defaultProps={showDescription:!1};try{StyledCode.displayName="StyledCode",StyledCode.__docgenInfo={description:"",displayName:"StyledCode",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/style/StyleTable.tsx#StyledCode"]={docgenInfo:StyledCode.__docgenInfo,name:"StyledCode",path:"src/stories/style/StyleTable.tsx#StyledCode"})}catch(__react_docgen_typescript_loader_error){}try{StyleTable.displayName="StyleTable",StyleTable.__docgenInfo={description:"",displayName:"StyleTable",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"StyleMeta[]"}},showDescription:{defaultValue:{value:"false"},description:"",name:"showDescription",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/style/StyleTable.tsx#StyleTable"]={docgenInfo:StyleTable.__docgenInfo,name:"StyleTable",path:"src/stories/style/StyleTable.tsx#StyleTable"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/style/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>styles});const styles={grid:[{className:"glx-flex",properties:[["display","flex"]]},{className:"glx-flex-r",extend:["glx-flex"],properties:[["flex-direction","row"]]},{className:"glx-flex-row",extend:["glx-flex-r"],properties:[["width","100%"]]},{className:"glx-flex-c",extend:["glx-flex"],properties:[["flex-direction","column"]]},{className:"glx-flex-column",extend:["glx-flex-c"],properties:[["width","100%"]]},{className:"glx-flex-v-center",properties:[["align-items","center"]]},{className:"glx-flex-h-center",properties:[["justify-content","center"]]},{className:"glx-flex-center",extend:["glx-flex-v-center","glx-flex-h-center"],properties:[["height","100%"]]},{className:"glx-flex-start",properties:[["justify-content","flex-start"]]},{className:"glx-flex-end",properties:[["justify-content","flex-end"]]},{className:"glx-flex-space-between",properties:[["justify-content","space-between"]]},{className:"glx-flex-space-around",properties:[["justify-content","space-around"]]},{className:"glx-flex-wrap",properties:[["flex-wrap","wrap"]]},{className:"glx-flex-nowrap",properties:[["flex-wrap","nowrap"]]},{className:"glx-flex-g-0",properties:[["gap","0"]]},{className:"glx-flex-g-2",properties:[["gap","2px"]]},{className:"glx-flex-g-4",properties:[["gap","4px"]]},{className:"glx-flex-g-6",properties:[["gap","6px"]]},{className:"glx-flex-g-8",properties:[["gap","8px"]]},{className:"glx-flex-g-10",properties:[["gap","10px"]]},{className:"glx-flex-g-12",properties:[["gap","12px"]]},{className:"glx-flex-g-24",properties:[["gap","24px"]]},{className:"glx-flex-grow-0",properties:[["flex-grow","0"]]},{className:"glx-flex-grow-1",properties:[["flex-grow","1"]]},{className:"glx-flex-grow-2",properties:[["flex-grow","2"]]},{className:"glx-mobile-wrap",properties:[["flex-direction","row"]],description:"on max-width: >900px flex-direction: column"},{className:"glx-layout-1-3",properties:[["flex-basis","33.33%"]]},{className:"glx-layout-2-3",properties:[["flex-basis","66.66%"]]},{className:"glx-layout-1-2",properties:[["flex-basis","50%"]]}],orientation:[{className:"glx-float-right",properties:[["float","right"]],description:"Float right"},{className:"glx-float-left",properties:[["float","left"]],description:"Float left"},{className:"glx-text-center",properties:[["text-align","center"]],description:"Text center"}],base:[{className:"glx-no-select",properties:[["-webkit-touch-callout","none"],["-webkit-user-select","none"],["-khtml-user-select","none"],["-moz-user-select","none"],["-ms-user-select","none"],["user-select","none"]],description:"Disable text selection"},{className:"glx-default-text",properties:[["color","$main-text"],["::-moz-selection","color: $main-background; background: $main-text;"],["::selection","color: $main-background; background: $main-text;"]],description:"Default text color"},{className:"glx-no-scroll",properties:[["-ms-overflow-style","none"],["scrollbar-width","none"]],description:"Disable scrollbars"},{className:"glx-underline",properties:[["text-decoration","underline"]],description:"Underline text"},{className:"glx-break-word",properties:[["overflow-wrap","break-word"]],description:"Break word"},{className:"glx-bold",properties:[["font-weight","bold"]],description:"Bold text"},{className:"glx-pointer",properties:[["cursor","pointer"]],description:"Pointer cursor"},{className:"glx-electron-drag",properties:[["-webkit-app-region","drag"]],description:"Electron drag"},{className:"glx-electron-no-drag",properties:[["-webkit-app-region","no-drag"]],description:"Electron no drag"},{className:"glx-hidden",properties:[["visibility","hidden"]],description:"Hidden"},{className:"glx-gone",properties:[["display","none"]],description:"Gone"}],sizing:[{className:"glx-w-full",properties:[["width","100%"]],description:"Width 100%"},{className:"glx-w-half",properties:[["width","50%"]],description:"Width 50%"},{className:"glx-w-full-2",properties:[["width","calc(100% - 4px)"]],description:"Width 100% - 2px * 2"},{className:"glx-w-full-4",properties:[["width","calc(100% - 8px)"]],description:"Width 100% - 4px * 2"},{className:"glx-w-full-8",properties:[["width","calc(100% - 16px)"]],description:"Width 100% - 8px * 2"},{className:"glx-w-full-12",properties:[["width","calc(100% - 24px)"]],description:"Width 100% - 12px * 2"},{className:"glx-w-full-16",properties:[["width","calc(100% - 32px)"]],description:"Width 100% - 16px * 2"},{className:"glx-h-full",properties:[["height","100%"]],description:"Height 100%"},{className:"glx-h-half",properties:[["height","50%"]],description:"Height 50%"},{className:"glx-h-full-2",properties:[["height","calc(100% - 4px)"]],description:"Height 100% - 2px * 2"},{className:"glx-h-full-4",properties:[["height","calc(100% - 8px)"]],description:"Height 100% - 4px * 2"},{className:"glx-h-full-8",properties:[["height","calc(100% - 16px)"]],description:"Height 100% - 8px * 2"},{className:"glx-h-full-12",properties:[["height","calc(100% - 24px)"]],description:"Height 100% - 12px * 2"},{className:"glx-h-full-16",properties:[["height","calc(100% - 32px)"]],description:"Height 100% - 16px * 2"},{className:"glx-h-full-32",properties:[["height","calc(100% - 64px)"]],description:"Height 100% - 32px * 2"},{className:"glx-layout-block",properties:[["width","800px"]],description:"Layout block 800px, on size< 900px size = 100%"},{className:"glx-layout-block-large",properties:[["width","1000px"]],description:"Layout block 1000px, on size< 1100px size = 100%"},{className:"glx-layout-block-extra-large",properties:[["width","1200px"]],description:"Layout block 1200px, on size< 1300px size = 100%"},{className:"glx-min-w-300",properties:[["min-width","300px"]],description:"Min width 300px, on size< 400px size = 100%"},{className:"glx-min-w-400",properties:[["min-width","400px"]],description:"Min width 400px, on size< 500px size = 100%"},{className:"glx-min-w-600",properties:[["min-width","600px"]],description:"Min width 600px, on size< 700px size = 100%"},{className:"glx-max-w-800",properties:[["max-width","800px"]],description:"Max width 800px, on size< 900px size = 100%"},{className:"glx-max-w-600",properties:[["max-width","600px"]],description:"Max width 600px, on size< 640px size = 100%"}],spacing:[{className:"glx-pt-2",properties:[["padding-top","2px"]]},{className:"glx-pb-2",properties:[["padding-bottom","2px"]]},{className:"glx-pr-2",properties:[["padding-right","2px"]]},{className:"glx-pl-2",properties:[["padding-left","2px"]]},{className:"glx-px-2",properties:[],extend:["glx-pl-2","glx-pr-2"]},{className:"glx-py-2",properties:[],extend:["glx-pt-2","glx-pb-2"]},{className:"glx-p-2",properties:[],extend:["glx-pt-2","glx-pb-2","glx-pl-2","glx-pr-2"]},{className:"glx-pt-4",properties:[["padding-top","4px"]]},{className:"glx-pb-4",properties:[["padding-bottom","4px"]]},{className:"glx-pr-4",properties:[["padding-right","4px"]]},{className:"glx-pl-4",properties:[["padding-left","4px"]]},{className:"glx-px-4",properties:[],extend:["glx-pl-4","glx-pr-4"]},{className:"glx-py-4",properties:[],extend:["glx-pt-4","glx-pb-4"]},{className:"glx-p-4",properties:[],extend:["glx-pt-4","glx-pb-4","glx-pl-4","glx-pr-4"]},{className:"glx-pt-6",properties:[["padding-top","6px"]]},{className:"glx-pb-6",properties:[["padding-bottom","6px"]]},{className:"glx-pr-6",properties:[["padding-right","6px"]]},{className:"glx-pl-6",properties:[["padding-left","6px"]]},{className:"glx-px-6",properties:[],extend:["glx-pl-6","glx-pr-6"]},{className:"glx-py-6",properties:[],extend:["glx-pt-6","glx-pb-6"]},{className:"glx-p-6",properties:[],extend:["glx-pt-6","glx-pb-6","glx-pl-6","glx-pr-6"]},{className:"glx-pt-8",properties:[["padding-top","8px"]]},{className:"glx-pb-8",properties:[["padding-bottom","8px"]]},{className:"glx-pr-8",properties:[["padding-right","8px"]]},{className:"glx-pl-8",properties:[["padding-left","8px"]]},{className:"glx-px-8",properties:[],extend:["glx-pl-8","glx-pr-8"]},{className:"glx-py-8",properties:[],extend:["glx-pt-8","glx-pb-8"]},{className:"glx-p-8",properties:[],extend:["glx-pt-8","glx-pb-8","glx-pl-8","glx-pr-8"]},{className:"glx-pt-10",properties:[["padding-top","10px"]]},{className:"glx-pb-10",properties:[["padding-bottom","10px"]]},{className:"glx-pr-10",properties:[["padding-right","10px"]]},{className:"glx-pl-10",properties:[["padding-left","10px"]]},{className:"glx-px-10",properties:[],extend:["glx-pl-10","glx-pr-10"]},{className:"glx-py-10",properties:[],extend:["glx-pt-10","glx-pb-10"]},{className:"glx-p-10",properties:[],extend:["glx-pt-10","glx-pb-10","glx-pl-10","glx-pr-10"]},{className:"glx-pt-12",properties:[["padding-top","12px"]]},{className:"glx-pb-12",properties:[["padding-bottom","12px"]]},{className:"glx-pr-12",properties:[["padding-right","12px"]]},{className:"glx-pl-12",properties:[["padding-left","12px"]]},{className:"glx-px-12",properties:[],extend:["glx-pl-12","glx-pr-12"]},{className:"glx-py-12",properties:[],extend:["glx-pt-12","glx-pb-12"]},{className:"glx-p-12",properties:[],extend:["glx-pt-12","glx-pb-12","glx-pl-12","glx-pr-12"]},{className:"glx-mt-2",properties:[["margin-top","2px"]]},{className:"glx-mb-2",properties:[["margin-bottom","2px"]]},{className:"glx-mr-2",properties:[["margin-right","2px"]]},{className:"glx-ml-2",properties:[["margin-left","2px"]]},{className:"glx-mx-2",properties:[],extend:["glx-ml-2","glx-mr-2"]},{className:"glx-my-2",properties:[],extend:["glx-mt-2","glx-mb-2"]},{className:"glx-m-2",properties:[],extend:["glx-mt-2","glx-mb-2","glx-ml-2","glx-mr-2"]},{className:"glx-mt-4",properties:[["margin-top","4px"]]},{className:"glx-mb-4",properties:[["margin-bottom","4px"]]},{className:"glx-mr-4",properties:[["margin-right","4px"]]},{className:"glx-ml-4",properties:[["margin-left","4px"]]},{className:"glx-mx-4",properties:[],extend:["glx-ml-4","glx-mr-4"]},{className:"glx-my-4",properties:[],extend:["glx-mt-4","glx-mb-4"]},{className:"glx-m-4",properties:[],extend:["glx-mt-4","glx-mb-4","glx-ml-4","glx-mr-4"]},{className:"glx-mt-6",properties:[["margin-top","6px"]]},{className:"glx-mb-6",properties:[["margin-bottom","6px"]]},{className:"glx-mr-6",properties:[["margin-right","6px"]]},{className:"glx-ml-6",properties:[["margin-left","6px"]]},{className:"glx-mx-6",properties:[],extend:["glx-ml-6","glx-mr-6"]},{className:"glx-my-6",properties:[],extend:["glx-mt-6","glx-mb-6"]},{className:"glx-m-6",properties:[],extend:["glx-mt-6","glx-mb-6","glx-ml-6","glx-mr-6"]},{className:"glx-mt-8",properties:[["margin-top","8px"]]},{className:"glx-mb-8",properties:[["margin-bottom","8px"]]},{className:"glx-mr-8",properties:[["margin-right","8px"]]},{className:"glx-ml-8",properties:[["margin-left","8px"]]},{className:"glx-mx-8",properties:[],extend:["glx-ml-8","glx-mr-8"]},{className:"glx-my-8",properties:[],extend:["glx-mt-8","glx-mb-8"]},{className:"glx-m-8",properties:[],extend:["glx-mt-8","glx-mb-8","glx-ml-8","glx-mr-8"]},{className:"glx-mt-10",properties:[["margin-top","10px"]]},{className:"glx-mb-10",properties:[["margin-bottom","10px"]]},{className:"glx-mr-10",properties:[["margin-right","10px"]]},{className:"glx-ml-10",properties:[["margin-left","10px"]]},{className:"glx-mx-10",properties:[],extend:["glx-ml-10","glx-mr-10"]},{className:"glx-my-10",properties:[],extend:["glx-mt-10","glx-mb-10"]},{className:"glx-m-10",properties:[],extend:["glx-mt-10","glx-mb-10","glx-ml-10","glx-mr-10"]},{className:"glx-mt-12",properties:[["margin-top","12px"]]},{className:"glx-mb-12",properties:[["margin-bottom","12px"]]},{className:"glx-mr-12",properties:[["margin-right","12px"]]},{className:"glx-ml-12",properties:[["margin-left","12px"]]},{className:"glx-mx-12",properties:[],extend:["glx-ml-12","glx-mr-12"]},{className:"glx-my-12",properties:[],extend:["glx-mt-12","glx-mb-12"]},{className:"glx-m-12",properties:[],extend:["glx-mt-12","glx-mb-12","glx-ml-12","glx-mr-12"]}],animation:[{className:"glx-animated-background",properties:[["animation-duration","1.25s"],["animation-fill-mode","forwards"],["animation-iteration-count","infinite"],["animation-name","placeHolderShimmer"],["animation-timing-function","linear"],["background","transparent"],["background","linear-gradient(...) 33%)"],["background-size","800px 104px"],["position","relative"]],description:"Animated background - placeholder shimmer"},{className:"glx-animation-fade-in-super-fast",properties:[["animation","fadeIn 0.5s"],["-webkit-animation","fadeIn 0.5s"],["-moz-animation","fadeIn 0.5s"],["-o-animation","fadeIn 0.5s"],["-ms-animation","fadeIn 0.5s"]],description:"Fade in super fast"},{className:"glx-animation-fade-in-fast",properties:[["animation","fadeIn 1s"],["-webkit-animation","fadeIn 1s"],["-moz-animation","fadeIn 1s"],["-o-animation","fadeIn 1s"],["-ms-animation","fadeIn 1s"]],description:"Fade in fast"},{className:"glx-animation-fade-in-slow",properties:[["animation","fadeIn 5s"],["-webkit-animation","fadeIn 5s"],["-moz-animation","fadeIn 5s"],["-o-animation","fadeIn 5s"],["-ms-animation","fadeIn 5s"]],description:"Fade in slow"}]}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);