/*! For license information please see stories-Introduction-mdx.b053ba7f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[799],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Introduction.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Introduction}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),package_namespaceObject={i8:"0.1.0"};function _createMdxContent(props){const _components=Object.assign({p:"p",ul:"ul",li:"li",a:"a",ol:"ol",code:"code",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Introduction"}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 700;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "}),"\n",(0,jsx_runtime.jsxs)("h1",{children:[" GrandLineX React-Components ",(0,jsx_runtime.jsx)("span",{children:package_namespaceObject.i8})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is a collection of React components used by GrandLineX."}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"This package includes:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"GlX-Styled-SCSS-Framework"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"GlX-Styled-React-Components"}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Icon Pack (",(0,jsx_runtime.jsx)(_components.a,{href:"https://ionic.io/ionicons",target:"_blank",rel:"nofollow noopener noreferrer",children:"Ionicons v5"}),")"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Configure"}),"\n",(0,jsx_runtime.jsxs)(_components.ol,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"npm install @grandlinex/react-components"})}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Include style file in your main render file (CSS or SCSS)","\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"// CSS\nimport '@grandlinex/react-components/css/style.css';\n// OR SCSS\nimport '@grandlinex/react-components/style/style.scss';\n"})}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["By default, the dark theme is enabled, to use the light theme add the following class ",(0,jsx_runtime.jsx)(_components.code,{children:"glx-theme-light"})," to your main container."]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Done 🎉"}),"\n"]})]})}var Introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);