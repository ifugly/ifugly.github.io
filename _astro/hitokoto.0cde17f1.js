import{r as l}from"./index.ed373d49.js";var h={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,x=Symbol.for("react.element"),c=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,v=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function p(e,o,r){var t,n={},i=null,m=null;r!==void 0&&(i=""+r),o.key!==void 0&&(i=""+o.key),o.ref!==void 0&&(m=o.ref);for(t in o)_.call(o,t)&&!y.hasOwnProperty(t)&&(n[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps,o)n[t]===void 0&&(n[t]=o[t]);return{$$typeof:x,type:e,key:i,ref:m,props:n,_owner:v.current}}f.Fragment=c;f.jsx=p;f.jsxs=p;h.exports=f;var s=h.exports;function a(){const[e,o]=l.useState({text:"......",from:"",fromWho:""});return l.useEffect(()=>{let r=!1;return fetch("https://v1.hitokoto.cn/").then(t=>t.json()).then(t=>{r||o({...e,text:t.hitokoto,from:t.from?t.from:"",fromWho:t.from_who?t.from_who:""})}),()=>{r=!0}},[]),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx("div",{style:{fontSize:"var(--text-hitokoto)",fontWeight:"bold",marginBottom:"20px"},children:e.text}),s.jsx("div",{style:{fontSize:"var(--text-author)"},children:`「${e.from}」${e.fromWho}`})]})}export{a as default};
