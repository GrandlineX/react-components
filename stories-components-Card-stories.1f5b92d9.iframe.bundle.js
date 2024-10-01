"use strict";(self.webpackChunk_grandlinex_react_components=self.webpackChunk_grandlinex_react_components||[]).push([[9430],{"./src/stories/components/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,Menu:()=>Menu,Skeleton:()=>Skeleton,WithBaseImg:()=>WithBaseImg,WithButton:()=>WithButton,WithDate:()=>WithDate,WithText:()=>WithText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card",component:__webpack_require__("./src/components/index.ts").Zp,tags:["autodocs"],argTypes:{},parameters:{layout:"centered",docs:{source:{code:"disabled"}}}},hover=[{onClick:()=>{},icon:"IOEnterOutline"},{onClick:()=>{},icon:"IOPlayCircleOutline",tooltip:{text:"Play"}},{onClick:()=>{},icon:"IOAddOutline"}],Default={args:{title:"Card Title",icon:"IOLogoYoutube",color:"red",hoverButton:hover,iconCover:!0,badges:[{icon:"IOLogoYoutube",text:"Default Badge"},{icon:"IOBag",text:"Default Badge",color:"red"},{icon:"IOLogoPlaystation",text:"PS",color:"green"},{icon:"IOLogoWindows",text:"WIN",color:"orange"},{icon:"IOLogoXbox",text:"Xbox",color:"yellow"},{text:"Default Badge"},{icon:"IOLogoNodejs",color:"black"}]}},Skeleton={args:{skeleton:!0}},Empty={args:{}},Menu={name:"Card with menu",args:{title:"Card Title",icon:"IOLogoYoutube",color:"red",hoverButton:hover,iconCover:!0,badges:[{icon:"IOLogoYoutube",text:"Default Badge"}],menu:[{key:"ba3",icon:"IOBag",label:"SubMenu",subMenu:[{key:"ba4",icon:"IOBag",label:"Bag"},{key:"ba5",icon:"IOBag",label:"Bag"}]}]}},WithDate={name:"Card with date field",args:{title:"Card Title",icon:"IOLogoYoutube",color:"red",hoverButton:hover,iconCover:!0,date:"- 1 Day ago",badges:[{icon:"IOLogoYoutube",text:"Default Badge"}]}},WithText={name:"Card with text field",args:{title:"Card Title",icon:"IOLogoYoutube",color:"red",hoverButton:hover,iconCover:!0,badges:[{icon:"IOLogoYoutube",text:"Default Badge"}],children:" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n          sed diam voluptua."}},WithButton={name:"Card with button",args:{title:"Card Title",icon:"IOLogoYoutube",color:"red",hoverButton:hover,iconCover:!0,button:{onClick:()=>{},content:"Button"}}},WithBaseImg={name:"Card with base64 Image",args:{title:"Card Title",color:"red",hoverButton:hover,imgBase:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABNCAYAAAArZQNmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKuSURBVHhe7ZzPShxBEMZ7XSF6SzQggYAixEOexntArwl5APMI5gn0qg/lIQGJEBBBE28qKJst2Q5jY2b7S3fXVFfX77IzO9/pR1HMfPtntP3h88QZbCzMXg0mTDgzJpwZE86MCWfGhDNjwpkx4cwkP/gcHey70Wg0O5vPzse92ZE8rn9fuV+XF+7u9ubx/MXSslt5veZevlp9PA9B84RN+JSHh3t3+v3Enf/88VceQcf0Hl2jjAfNdzHhU85Ovz0RF0LXKONB812aF95dCX1QJlwhffh8SPPCn5PyL0g2mg9pXnjMtHooi+ZDbIcz07xwupWLhbJoPqR54X33zCHz7rFDKB/SvHCSEjO1lCHZaD7EdviU9c2tXol0jTIeNN/FhE8Zjxfd5rv37s3bjSci6Zjeo2uU8aD5LuwfIh8ffp0dxZHSvfxP11EalROe0nWURqXwlK6jNOqEp3YdpVEnPLXrKI064THT7UGyuVC5wyWjTnj3vngeSDYX6oSndh2lUSc8tesojcodntJ1lEal8JSuozRVfSFfYjeCUsWES+5GUKoQLrkbQREvXHo3giJeuPRuBEW88Jjp9iDZoahih2tCvPC+B5gQJDsU4oVL70ZQxAuX3o2gVLHDJXcjKFUIl9yNoAzapZToRtDfHO1++uImEz4Fg0y4pm4EZRDhmroRFHbh2roRFHbh2roRFHbhMdPtQbK1MMgObxl24X0PMCFIthbYhWvrRlDYhWvrRlAG2eGauhGUQYRr6kZQsnYpJbqR0nD/30uWCW+5G0HJIrzlbgQlWXjr3QhKsvDWuxGUZOEx0+1BslrJssONeJKF9z3AhCBZrSQLb70bQUkW3no3gpJlh7fcjaBkEd5yN4JS1W98NJBlwo14TDgzJpwZE86MCWfGhDNjwllx7g9atrw2ifxZogAAAABJRU5ErkJggg=="}},__namedExportsOrder=["Default","Skeleton","Empty","Menu","WithDate","WithText","WithButton","WithBaseImg"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Card Title',\n    icon: 'IOLogoYoutube',\n    color: 'red',\n    hoverButton: hover,\n    iconCover: true,\n    badges: [{\n      icon: 'IOLogoYoutube',\n      text: 'Default Badge'\n    }, {\n      icon: 'IOBag',\n      text: 'Default Badge',\n      color: 'red'\n    }, {\n      icon: 'IOLogoPlaystation',\n      text: 'PS',\n      color: 'green'\n    }, {\n      icon: 'IOLogoWindows',\n      text: 'WIN',\n      color: 'orange'\n    }, {\n      icon: 'IOLogoXbox',\n      text: 'Xbox',\n      color: 'yellow'\n    }, {\n      text: 'Default Badge'\n    }, {\n      icon: 'IOLogoNodejs',\n      color: 'black'\n    }]\n  }\n}",...Default.parameters?.docs?.source}}},Skeleton.parameters={...Skeleton.parameters,docs:{...Skeleton.parameters?.docs,source:{originalSource:"{\n  args: {\n    skeleton: true\n  }\n}",...Skeleton.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Empty.parameters?.docs?.source}}},Menu.parameters={...Menu.parameters,docs:{...Menu.parameters?.docs,source:{originalSource:"{\n  name: 'Card with menu',\n  args: {\n    title: 'Card Title',\n    icon: 'IOLogoYoutube',\n    color: 'red',\n    hoverButton: hover,\n    iconCover: true,\n    badges: [{\n      icon: 'IOLogoYoutube',\n      text: 'Default Badge'\n    }],\n    menu: [{\n      key: 'ba3',\n      icon: 'IOBag',\n      label: 'SubMenu',\n      subMenu: [{\n        key: 'ba4',\n        icon: 'IOBag',\n        label: 'Bag'\n      }, {\n        key: 'ba5',\n        icon: 'IOBag',\n        label: 'Bag'\n      }]\n    }]\n  }\n}",...Menu.parameters?.docs?.source}}},WithDate.parameters={...WithDate.parameters,docs:{...WithDate.parameters?.docs,source:{originalSource:"{\n  name: 'Card with date field',\n  args: {\n    title: 'Card Title',\n    icon: 'IOLogoYoutube',\n    color: 'red',\n    hoverButton: hover,\n    iconCover: true,\n    date: '- 1 Day ago',\n    badges: [{\n      icon: 'IOLogoYoutube',\n      text: 'Default Badge'\n    }]\n  }\n}",...WithDate.parameters?.docs?.source}}},WithText.parameters={...WithText.parameters,docs:{...WithText.parameters?.docs,source:{originalSource:"{\n  name: 'Card with text field',\n  args: {\n    title: 'Card Title',\n    icon: 'IOLogoYoutube',\n    color: 'red',\n    hoverButton: hover,\n    iconCover: true,\n    badges: [{\n      icon: 'IOLogoYoutube',\n      text: 'Default Badge'\n    }],\n    children: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n          sed diam voluptua.`\n  }\n}",...WithText.parameters?.docs?.source}}},WithButton.parameters={...WithButton.parameters,docs:{...WithButton.parameters?.docs,source:{originalSource:"{\n  name: 'Card with button',\n  args: {\n    title: 'Card Title',\n    icon: 'IOLogoYoutube',\n    color: 'red',\n    hoverButton: hover,\n    iconCover: true,\n    button: {\n      onClick: () => {},\n      content: 'Button'\n    }\n  }\n}",...WithButton.parameters?.docs?.source}}},WithBaseImg.parameters={...WithBaseImg.parameters,docs:{...WithBaseImg.parameters?.docs,source:{originalSource:"{\n  name: 'Card with base64 Image',\n  args: {\n    title: 'Card Title',\n    color: 'red',\n    hoverButton: hover,\n    imgBase: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABNCAYAAAArZQNmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKuSURBVHhe7ZzPShxBEMZ7XSF6SzQggYAixEOexntArwl5APMI5gn0qg/lIQGJEBBBE28qKJst2Q5jY2b7S3fXVFfX77IzO9/pR1HMfPtntP3h88QZbCzMXg0mTDgzJpwZE86MCWfGhDNjwpkx4cwkP/gcHey70Wg0O5vPzse92ZE8rn9fuV+XF+7u9ubx/MXSslt5veZevlp9PA9B84RN+JSHh3t3+v3Enf/88VceQcf0Hl2jjAfNdzHhU85Ovz0RF0LXKONB812aF95dCX1QJlwhffh8SPPCn5PyL0g2mg9pXnjMtHooi+ZDbIcz07xwupWLhbJoPqR54X33zCHz7rFDKB/SvHCSEjO1lCHZaD7EdviU9c2tXol0jTIeNN/FhE8Zjxfd5rv37s3bjSci6Zjeo2uU8aD5LuwfIh8ffp0dxZHSvfxP11EalROe0nWURqXwlK6jNOqEp3YdpVEnPLXrKI064THT7UGyuVC5wyWjTnj3vngeSDYX6oSndh2lUSc8tesojcodntJ1lEal8JSuozRVfSFfYjeCUsWES+5GUKoQLrkbQREvXHo3giJeuPRuBEW88Jjp9iDZoahih2tCvPC+B5gQJDsU4oVL70ZQxAuX3o2gVLHDJXcjKFUIl9yNoAzapZToRtDfHO1++uImEz4Fg0y4pm4EZRDhmroRFHbh2roRFHbh2roRFHbhMdPtQbK1MMgObxl24X0PMCFIthbYhWvrRlDYhWvrRlAG2eGauhGUQYRr6kZQsnYpJbqR0nD/30uWCW+5G0HJIrzlbgQlWXjr3QhKsvDWuxGUZOEx0+1BslrJssONeJKF9z3AhCBZrSQLb70bQUkW3no3gpJlh7fcjaBkEd5yN4JS1W98NJBlwo14TDgzJpwZE86MCWfGhDNjwllx7g9atrw2ifxZogAAAABJRU5ErkJggg=='\n  }\n}",...WithBaseImg.parameters?.docs?.source}}}}}]);