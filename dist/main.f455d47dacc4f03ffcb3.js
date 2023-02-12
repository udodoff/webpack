"use strict";(self.webpackChunkpro=self.webpackChunkpro||[]).push([[927],{169:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,".gallery__title{font-size:24px;color:red}.gallery__items{margin:50px 0;display:flex;flex-wrap:wrap;gap:20px}.gallery-item{text-align:center;background-color:#fff;box-shadow:0 4px 8px rgba(0,0,0,.2) 0 6px 20px 0 rgba(0,0,0,.2)}.gallery-item__image{width:100%;height:250px;object-fit:cover}.gallery-item__title{padding:20px 0}.gallery-item__audio{width:400px;height:250px}.gallery-item__video{width:100%;max-width:330px;height:250px}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);n&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},927:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(379),a=r.n(n),o=r(795),i=r.n(o),c=r(569),s=r.n(c),l=r(565),p=r.n(l),u=r(216),d=r.n(u),f=r(589),h=r.n(f),v=r(169),m={};m.styleTagTransform=h(),m.setAttributes=p(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),a()(v.Z,m);const g=v.Z&&v.Z.locals?v.Z.locals:void 0},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=n.base?s[0]+n.base:s[0],p=o[l]||0,u="".concat(l," ").concat(p);o[l]=p+1;var d=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=a(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=r(o[i]);t[c].references--}for(var s=n(e,a),l=0;l<o.length;l++){var p=r(o[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);