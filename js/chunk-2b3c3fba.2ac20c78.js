(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b3c3fba"],{"0545":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"data-view"}},[n("dv-full-screen-container",{staticClass:"en_bg"},[n("top-header",{attrs:{title:"充电管理系统"}}),n("div",{staticClass:"main-content"},[n("digital-flop"),n("div",{staticClass:"block-left-right-content"},[n("div",{staticClass:"block-top-bottom-content"},[n("div",{staticClass:"block-top-content"},[n("fastList")],1),n("footerChart")],1),n("div",{staticClass:"rightList"},[n("rightList")],1)])],1)],1)],1)},s=[],a=n("1451"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common_flex",attrs:{id:"digital-flop"}},[t._l(t.digitalFlopData,(function(e){return n("div",{key:e.title,staticClass:"digital-flop-item"},[n("div",{staticClass:"digital-flop-title"},[t._v(t._s(e.title))]),n("div",{staticClass:"digital-flop common_flex"},[n("dv-digital-flop",{staticStyle:{width:"100px",height:"50px"},attrs:{config:e.number}}),n("div",{staticClass:"unit"},[t._v(t._s(e.unit))])],1)])})),n("dv-decoration-10")],2)},r=[],l={name:"DigitalFlop",data:function(){return{digitalFlopData:[]}},methods:{createData:function(){var t=this.randomExtend;this.digitalFlopData=[{title:"正在充电",number:{number:[t(10,20)],content:"{nt}",textAlign:"right",style:{fill:"#4d99fc",fontWeight:"bold"}},unit:""},{title:"当前空闲",number:{number:[t(20,50)],content:"{nt}",textAlign:"right",style:{fill:"#f46827",fontWeight:"bold"}},unit:""},{title:"当前故障",number:{number:[t(3,10)],content:"{nt}",textAlign:"right",style:{fill:"#40faee",fontWeight:"bold"}},unit:""},{title:"今日累计电费",number:{number:[t(200,800)],content:"{nt}",textAlign:"right",style:{fill:"#4d99fc",fontWeight:"bold"}},unit:"元"},{title:"当月累计电费",number:{number:[t(2e4,1e5)],content:"{nt}",textAlign:"right",style:{fill:"#40faee",fontWeight:"bold"}},unit:"元"},{title:"年度累积电费",number:{number:[t(5e4,12e4)],content:"{nt}",textAlign:"right",style:{fill:"#f46827",fontWeight:"bold"}},unit:"元"}]},randomExtend:function(t,e){return 1===arguments.length?parseInt(Math.random()*t+1,10):parseInt(Math.random()*(e-t+1)+t,10)}},mounted:function(){var t=this.createData;t(),setInterval(t,3e4)}},u=l,o=n("2877"),d=Object(o["a"])(u,c,r,!1,null,"45502e6d",null),_=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cards chartBox"},t._l(t.cards,(function(e,i){return n("div",{key:i,staticClass:"card-item"},[n("div",{staticClass:"card_title"},[n("span",{staticClass:"type_0"},[t._v("快充")]),t._v(t._s(e.title))]),n("div",{staticClass:"list_item"},[t._m(0,!0),t._m(1,!0),t._m(2,!0),t._m(3,!0),t._m(4,!0),n("div",{staticClass:"status",class:"color_"+i},[t._v(t._s(t.statusText[e.status]))])])])})),0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电量："),n("span",[t._v("30.12KWH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("功率："),n("span",[t._v("40.24KWH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电压："),n("span",[t._v("380V")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电流："),n("span",[t._v("150A")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电压类型："),n("span",[t._v("三相交流")])])}],m={name:"Cards",data:function(){return{statusText:["充电中","空闲","离线","故障"],cards:[{title:"kuaichong001",status:0},{title:"kuaichong001",status:1},{title:"kuaichong001",status:2},{title:"kuaichong001",status:3}]}},methods:{},mounted:function(){}},h=m,g=Object(o["a"])(h,v,f,!1,null,null,null),p=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footerList common_flex chartBox"},[n("div",{staticClass:"cards"},t._l(t.cards,(function(e,i){return n("div",{key:i,staticClass:"card-item"},[n("div",{staticClass:"card_title"},[n("span",{staticClass:"type_1"},[t._v("慢充")]),t._v(t._s(e.title))]),n("div",{staticClass:"list_item"},[t._m(0,!0),t._m(1,!0),t._m(2,!0),t._m(3,!0),t._m(4,!0),n("div",{staticClass:"status",class:"color_"+i%4},[t._v(t._s(t.statusText[e.status]))])])])})),0)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电量："),n("span",[t._v("30.12KWH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("功率："),n("span",[t._v("40.24KWH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电压："),n("span",[t._v("380V")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电流："),n("span",[t._v("150A")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电压类型："),n("span",[t._v("三相交流")])])}],x={name:"footerChart",data:function(){return{statusText:["充电中","空闲","离线","故障"],cards:[{title:"kuaichong001",status:0},{title:"kuaichong001",status:1},{title:"kuaichong001",status:2},{title:"kuaichong001",status:3},{title:"kuaichong001",status:0},{title:"kuaichong001",status:1},{title:"kuaichong001",status:2},{title:"kuaichong001",status:3}]}},methods:{},mounted:function(){}},k=x,E=(n("1c61"),Object(o["a"])(k,b,C,!1,null,"6150eb29",null)),$=E.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cards chartBox"},t._l(t.cards,(function(e,i){return n("div",{key:i,staticClass:"card-item"},[n("div",{staticClass:"card_title"},[n("span",{staticClass:"type_2"},[t._v("电单车")]),t._v(t._s(e.title)+"\n    ")]),n("div",{staticClass:"list_item"},[t._m(0,!0),t._m(1,!0),t._m(2,!0),t._m(3,!0),t._m(4,!0),n("div",{staticClass:"status",class:"color_"+i},[t._v("\n        "+t._s(t.statusText[e.status])+"\n      ")])])])})),0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电量："),n("span",[t._v("30.12KWH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("功率："),n("span",[t._v("40.24KWH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电压："),n("span",[t._v("380V")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电流："),n("span",[t._v("150A")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("电压类型："),n("span",[t._v("三相交流")])])}],W={name:"Cards",data:function(){return{statusText:["充电中","空闲","离线","故障"],cards:[{title:"kuaichong001",status:0},{title:"kuaichong001",status:1},{title:"kuaichong001",status:2}]}},methods:{},mounted:function(){}},w=W,A=(n("44b2"),Object(o["a"])(w,y,T,!1,null,"21c85b27",null)),D=A.exports,H={name:"DataView",components:{topHeader:a["a"],digitalFlop:_,footerChart:$,fastList:p,rightList:D},data:function(){return{}},methods:{}},j=H,F=(n("6c49"),n("7c6c"),Object(o["a"])(j,i,s,!1,null,"bc0cb3e6",null));e["default"]=F.exports},1451:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-header"}},[t._m(0),n("dv-decoration-5",{staticClass:"header-center-decoration"}),n("div",{staticClass:"header-right-decoration currentTime"},[t._v(t._s(t.currentTime)+"，晴，20℃")]),n("div",{staticClass:"center-title"},[t._v(t._s(t.title))])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left-decoration"},[i("img",{staticClass:"logo",attrs:{src:n("9b19")}})])}],a={name:"TopHeader",props:["title"],data:function(){return{currentTime:""}},methods:{getCurrentTime:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),s=t.getHours(),a=t.getMinutes(),c=t.getSeconds();n>=1&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i),s>=0&&s<=9&&(s="0"+s),a>=0&&a<=9&&(a="0"+a),c>=0&&c<=9&&(c="0"+c),this.currentTime=e+"-"+n+"-"+i+" "+s+":"+a+":"+c}},mounted:function(){var t=this;this.getCurrentTime(),setInterval((function(){t.getCurrentTime()}),1e3)}},c=a,r=(n("4aba"),n("2877")),l=Object(r["a"])(c,i,s,!1,null,null,null);e["a"]=l.exports},"1c61":function(t,e,n){"use strict";n("a1f8")},"32ed":function(t,e,n){},"44b2":function(t,e,n){"use strict";n("32ed")},"4aba":function(t,e,n){"use strict";n("ffc8")},"5e2d":function(t,e,n){},"6c49":function(t,e,n){"use strict";n("5e2d")},"7c6c":function(t,e,n){"use strict";n("8064")},8064:function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.c1ebf7d8.svg"},a1f8:function(t,e,n){},ffc8:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2b3c3fba.2ac20c78.js.map