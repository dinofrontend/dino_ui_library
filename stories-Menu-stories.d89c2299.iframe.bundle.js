"use strict";(self.webpackChunkdino_ui_tools=self.webpackChunkdino_ui_tools||[]).push([[8190],{"./src/stories/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Menu:()=>Menu,NestedMenu:()=>NestedMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Menu",component:_index__WEBPACK_IMPORTED_MODULE_2__.W1,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}};var items=[{label:"Edit",iconProps:{name:"edit"},handler:function handler(){console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{name:"add-hover"},handler:function handler(){console.log("add")},value:2},{label:"Delete",iconProps:{Component:_index__WEBPACK_IMPORTED_MODULE_2__.Vs,type:"selected"},handler:function handler(){console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:_index__WEBPACK_IMPORTED_MODULE_2__.LX,type:"selected"},handler:function handler(){}}],Template=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState,2),ref=_useState2[0],setRef=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState3,2),open=_useState4[0],setOpen=_useState4[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{position:"relative",width:"fit-content"},ref:setRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.$n,{onClick:function onClick(){return setOpen(!open)},iconProps:{name:"more"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.W1,_objectSpread(_objectSpread({},args),{},{onClose:function onClose(){return setOpen(!1)},parentRef:ref,menuItems:items,isOpen:open}))]})})};Template.displayName="Template";var Menu=Template.bind({});Menu.args={menuItems:[]};var NestedItems=[{title:"People",value:1,iconProps:{Component:_index__WEBPACK_IMPORTED_MODULE_2__.$M,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:_index__WEBPACK_IMPORTED_MODULE_2__.Ni,size:"medium"},handler:function handler(){console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:_index__WEBPACK_IMPORTED_MODULE_2__.Ni,size:"medium"},handler:function handler(){console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:_index__WEBPACK_IMPORTED_MODULE_2__.bq},subItems:[{label:"Libraries",value:1,iconProps:{Component:_index__WEBPACK_IMPORTED_MODULE_2__.Ni,size:"medium"},handler:function handler(){console.log("libraries")}}]}],NestedMenuTemplate=function NestedMenuTemplate(args){var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState6=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState5,2),ref=_useState6[0],setRef=_useState6[1],_useState7=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState8=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState7,2),open=_useState8[0],setOpen=_useState8[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{position:"relative",width:"fit-content"},ref:setRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.$n,{onClick:function onClick(){return setOpen(!open)},iconProps:{Component:_index__WEBPACK_IMPORTED_MODULE_2__.Ni},type:"tertiary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.LJ,_objectSpread(_objectSpread({},args),{},{onClose:function onClose(){return setOpen(!1)},parentRef:ref,menuItems:NestedItems,isOpen:open,position:"bottom-left"}))]})})};NestedMenuTemplate.displayName="NestedMenuTemplate";var NestedMenu=NestedMenuTemplate.bind({});const __namedExportsOrder=["Menu","NestedMenu"]}}]);