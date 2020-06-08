(function(t){function e(e){for(var i,r,l=e[0],s=e[1],c=e[2],v=0,d=[];v<l.length;v++)r=l[v],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],i=!0,l=1;l<o.length;l++){var s=o[l];0!==n[s]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var i={},n={app:0},a=[];function r(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=i,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var i=o("8a23"),n=o.n(i);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("Header"),o("PomodoroButtons"),o("Timer"),o("TimerButtons"),o("Shortcuts"),o("TodoList")],1)},a=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",[o("div",[t._v("Pomodoro Technique")])]),o("v-col",[o("CustomizeSettings")],1),o("v-col",[o("PomodoroTechnique")],1)],1)],1)},l=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-btn",{attrs:{rounded:"",depressed:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v(" About Pomodoro Technique ")]),o("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("Pomodoro Instructions")]),o("v-card-text",[o("v-list",{attrs:{"two-line":"",subheader:""}},t._l(t.items,(function(e){return o("v-list-item",{key:e.title},[o("v-list-item-avatar",[o("v-icon",{class:e.iconClass},[t._v(t._s(e.icon))])],1),o("v-list-item-content",{staticClass:"text-left"},[o("v-list-item-title",{staticClass:"bold"},[t._v(t._s(e.title))]),o("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1)],1)})),1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)},c=[],u={name:"PomodoroTechnique",data:function(){return{dialog:!1,items:[{icon:"mdi-clipboard-list",iconClass:"blue white--text",title:"Step 1",subtitle:"Decide on the task to be done."},{icon:"mdi-timer",iconClass:"blue white--text",title:"Step 2",subtitle:"Set the timer to 25 minutes."},{icon:"mdi-progress-clock",iconClass:"blue white--text",title:"Step 3",subtitle:"Work on the task until the timer rings."},{icon:"mdi-coffee",iconClass:"blue white--text",title:"Step 4",subtitle:"Take a short 5 minutes break."},{icon:"mdi-food-apple",iconClass:"amber white--text",title:"Step 5",subtitle:"Take a 15-30 minute break every 4 cycles."}]}}},v=u,d=o("2877"),m=o("6544"),f=o.n(m),b=o("8336"),p=o("b0af"),h=o("99d9"),_=o("169a"),k=o("132d"),g=o("8860"),T=o("da13"),V=o("8270"),x=o("5d23"),S=o("2fa4"),w=Object(d["a"])(v,s,c,!1,null,null,null),B=w.exports;f()(w,{VBtn:b["a"],VCard:p["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:_["a"],VIcon:k["a"],VList:g["a"],VListItem:T["a"],VListItemAvatar:V["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VSpacer:S["a"]});var C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[o("v-btn",t._g({attrs:{rounded:"",depressed:""}},i),[t._v("Settings")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"red"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1),o("v-toolbar-title",[t._v("Settings")]),o("v-spacer"),o("v-toolbar-items",[o("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1),o("v-list",{staticClass:"text-left",attrs:{"three-line":"",subheader:""}},[o("v-subheader",[t._v("Set Custom Times (in minutes)")]),o("v-list-item",[o("v-list-item-content",[o("v-text-field",{attrs:{label:"Pomodoro Time",value:t.pomodoroTime}})],1)],1),o("v-list-item",[o("v-list-item-content",[o("v-text-field",{attrs:{label:"Short Break",value:t.shortBreakTime}})],1)],1),o("v-list-item",[o("v-list-item-content",[o("v-text-field",{attrs:{label:"Long Break",value:t.longBreakTime}})],1)],1)],1),o("v-divider"),o("v-list",{staticClass:"text-left",attrs:{"three-line":"",subheader:""}},[o("v-subheader",[t._v("General")]),o("v-list-item",[o("v-list-item-action",[o("v-checkbox",{model:{value:t.autoStartPomodoro,callback:function(e){t.autoStartPomodoro=e},expression:"autoStartPomodoro"}})],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Auto Start Pomodoro")]),o("v-list-item-subtitle",[t._v("Auto start the Pomodoro Time without interaction of the user.")])],1)],1),o("v-list-item",[o("v-list-item-action",[o("v-checkbox",{model:{value:t.autoStartBreak,callback:function(e){t.autoStartBreak=e},expression:"autoStartBreak"}})],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Auto Start Breaks")]),o("v-list-item-subtitle",[t._v("Auto start the breaks without interaction of the user.")])],1)],1),o("v-list-item",[o("v-list-item-action",[o("v-checkbox",{model:{value:t.oneMinuteNotification,callback:function(e){t.oneMinuteNotification=e},expression:"oneMinuteNotification"}})],1),o("v-list-item-content",[o("v-list-item-title",[t._v("One minute notification")]),o("v-list-item-subtitle",[t._v("Show a notification when one minute is left from the Pomodoro.")])],1)],1)],1)],1)],1)],1)},P=[],O=o("5530"),y=o("2f62"),j={name:"CustomizeSettings",data:function(){return{dialog:!1,autoStartPomodoro:!1,autoStartBreak:!0,oneMinuteNotification:!1}},computed:Object(O["a"])({},Object(y["c"])(["pomodoroTime","shortBreakTime","longBreakTime"])),methods:Object(O["a"])({},Object(y["b"])(["setPomodoroTime","setShortBreakTime","setLongBreakTime"]))},L=j,I=o("ac7c"),A=o("ce7e"),$=o("1800"),E=o("e0c7"),M=o("8654"),q=o("71d9"),D=o("2a7f"),N=Object(d["a"])(L,C,P,!1,null,null,null),z=N.exports;f()(N,{VBtn:b["a"],VCard:p["a"],VCheckbox:I["a"],VDialog:_["a"],VDivider:A["a"],VIcon:k["a"],VList:g["a"],VListItem:T["a"],VListItemAction:$["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VSpacer:S["a"],VSubheader:E["a"],VTextField:M["a"],VToolbar:q["a"],VToolbarItems:D["a"],VToolbarTitle:D["b"]});var H={name:"Header",components:{PomodoroTechnique:B,CustomizeSettings:z}},R=H,J=o("62ad"),F=o("a523"),G=o("0fd9"),W=Object(d["a"])(R,r,l,!1,null,null,null),K=W.exports;f()(W,{VCol:J["a"],VContainer:F["a"],VRow:G["a"]});var Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",[o("v-btn",{attrs:{rounded:"",depressed:""}},[t._v("Pomodoro")])],1),o("v-col",[o("v-btn",{attrs:{rounded:"",depressed:""}},[t._v("Short Break")])],1),o("v-col",[o("v-btn",{attrs:{rounded:"",depressed:""}},[t._v("Long Break")])],1)],1)],1)},U=[],X={name:"PomodoroButtons"},Y=X,Z=Object(d["a"])(Y,Q,U,!1,null,null,null),tt=Z.exports;f()(Z,{VBtn:b["a"],VCol:J["a"],VContainer:F["a"],VRow:G["a"]});var et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-progress-linear",{attrs:{height:"25",reactive:""},model:{value:t.power,callback:function(e){t.power=e},expression:"power"}})],1)},ot=[],it={name:"Timer",data:function(){return{power:5}}},nt=it,at=o("8e36"),rt=Object(d["a"])(nt,et,ot,!1,null,null,null),lt=rt.exports;f()(rt,{VProgressLinear:at["a"]});var st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-play-circle")])],1)],1),o("v-col",[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-stop-circle")])],1)],1),o("v-col",[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-refresh-circle")])],1)],1)],1)],1)},ct=[],ut={name:"TimerButtons"},vt=ut,dt=Object(d["a"])(vt,st,ct,!1,null,null,null),mt=dt.exports;f()(dt,{VBtn:b["a"],VCol:J["a"],VContainer:F["a"],VIcon:k["a"],VRow:G["a"]});var ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")},bt=[],pt={name:"Shortcuts"},ht=pt,_t=Object(d["a"])(ht,ft,bt,!1,null,null,null),kt=_t.exports,gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")},Tt=[],Vt={name:"TodoList"},xt=Vt,St=Object(d["a"])(xt,gt,Tt,!1,null,null,null),wt=St.exports,Bt={name:"App",components:{Header:K,PomodoroButtons:tt,Timer:lt,TimerButtons:mt,Shortcuts:kt,TodoList:wt}},Ct=Bt,Pt=(o("034f"),o("7496")),Ot=Object(d["a"])(Ct,n,a,!1,null,null,null),yt=Ot.exports;f()(Ot,{VApp:Pt["a"]}),i["a"].use(y["a"]);var jt=new y["a"].Store({state:{pomodoroTime:25,shortBreakTime:5,longBreakTime:15},mutations:{setPomodoroTime:function(t,e){t.pomodoroTime=e},setShortBreakTime:function(t,e){t.shortBreakTime=e},setLongBreakTime:function(t,e){t.longBreakTime=e}},actions:{}}),Lt=o("f309");i["a"].use(Lt["a"]);var It=new Lt["a"]({});i["a"].config.productionTip=!1,new i["a"]({store:jt,vuetify:It,render:function(t){return t(yt)}}).$mount("#app")},"8a23":function(t,e,o){}});
//# sourceMappingURL=app.8394bfbc.js.map