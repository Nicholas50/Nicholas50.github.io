(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ed67885"],{1451:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-header"}},[t._m(0),n("dv-decoration-5",{staticClass:"header-center-decoration"}),n("div",{staticClass:"header-right-decoration currentTime"},[t._v(t._s(t.currentTime)+"，晴，20℃")]),n("div",{staticClass:"center-title"},[t._v(t._s(t.title))])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left-decoration"},[i("img",{staticClass:"logo",attrs:{src:n("9b19")}})])}],c={name:"TopHeader",props:["title"],data:function(){return{currentTime:""}},methods:{getCurrentTime:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),a=t.getHours(),c=t.getMinutes(),o=t.getSeconds();n>=1&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i),a>=0&&a<=9&&(a="0"+a),c>=0&&c<=9&&(c="0"+c),o>=0&&o<=9&&(o="0"+o),this.currentTime=e+"-"+n+"-"+i+" "+a+":"+c+":"+o}},mounted:function(){var t=this;this.getCurrentTime(),setInterval((function(){t.getCurrentTime()}),1e3)}},o=c,s=(n("4aba"),n("2877")),r=Object(s["a"])(o,i,a,!1,null,null,null);e["a"]=r.exports},4973:function(t,e,n){"use strict";n("e4a6")},"4aba":function(t,e,n){"use strict";n("ffc8")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.c1ebf7d8.svg"},abcd:function(t,e,n){"use strict";n("facc")},de26:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"data-view"}},[n("dv-full-screen-container",{staticClass:"pv_bg"},[n("top-header",{attrs:{title:"重点用能设备管理"}}),n("div",{staticClass:"main-content"},[n("div",{staticClass:"block-left-right-content"},[n("div",{staticClass:"block-top-bottom-content"},[n("div",{staticClass:"topRow common_flex"},[n("topLine")],1),n("div",{staticClass:"footerRow common_flex"},[n("bottomLine")],1)])])])],1)],1)},a=[],c=n("1451"),o={name:"DataView",components:{topHeader:c["a"],topLine:function(){return n.e("chunk-479f4786").then(n.bind(null,"53cf"))},bottomLine:function(){return n.e("chunk-fc911fee").then(n.bind(null,"af86"))}},data:function(){return{}},methods:{}},s=o,r=(n("4973"),n("abcd"),n("2877")),u=Object(r["a"])(s,i,a,!1,null,"3123fa91",null);e["default"]=u.exports},e4a6:function(t,e,n){},facc:function(t,e,n){},ffc8:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1ed67885.81c277ed.js.map