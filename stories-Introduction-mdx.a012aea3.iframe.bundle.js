(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[861],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const package_namespaceObject={rE:"0.9.1"};function _createMdxContent(props){const _components={a:"a",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Introduction"}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n      .subheading {\n        --mediumdark: '#999999';\n        font-weight: 700;\n        font-size: 13px;\n        color: #999;\n        letter-spacing: 6px;\n        line-height: 24px;\n        text-transform: uppercase;\n        margin-bottom: 12px;\n        margin-top: 40px;\n      }\n\n\n      .tip {\n        display: inline-block;\n        border-radius: 1em;\n        font-size: 11px;\n        line-height: 12px;\n        font-weight: 700;\n        background: #E7FDD8;\n        color: #66BF3C;\n        padding: 4px 12px;\n        margin-right: 10px;\n        vertical-align: top;\n      }\n\n      .tip-wrapper {\n        font-size: 13px;\n        line-height: 20px;\n        margin-top: 40px;\n        margin-bottom: 40px;\n      }\n\n      .tip-wrapper code {\n        font-size: 12px;\n        display: inline-block;\n      }\n    "}),"\n",(0,jsx_runtime.jsxs)("h1",{children:[" GrandLineX React-Components ",(0,jsx_runtime.jsx)("span",{children:package_namespaceObject.rE})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is a collection of React components used by GrandLineX."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"React 19 Ready 🎉"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"This package includes:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"GlX-Styled-SCSS-Framework"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"GlX-Styled-React-Components"}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Icon Pack (",(0,jsx_runtime.jsx)(_components.a,{href:"https://ionic.io/ionicons",rel:"nofollow",children:"Ionicons v5"}),")"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Configure"}),"\n",(0,jsx_runtime.jsxs)(_components.ol,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"npm i @grandlinex/react-components"})}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Include style file in your main render file (CSS or SCSS)","\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"// CSS\nimport '@grandlinex/react-components/css/style.css';\n// OR SCSS\nimport '@grandlinex/react-components/style/style.scss';\n"})}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["By default, the dark theme is enabled, to use the light theme add the following class ",(0,jsx_runtime.jsx)(_components.code,{children:"glx-theme-light"})," to your main container."]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Done 🎉"}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);