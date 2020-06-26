(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{103:function(e,t,n){e.exports=n(214)},171:function(e,t,n){},173:function(e,t,n){},211:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),c=n.n(o),l=n(7),i=n(6),u=n(217),m=n(101),s=n(94),d=n.n(s),h={hours:0,minutes:0,seconds:0},f=function(e,t){for(var n={hours:e.hours+t.hours,minutes:e.minutes+t.minutes,seconds:e.seconds+t.seconds};n.seconds>59;)n.seconds-=60,n.minutes+=1;for(;n.minutes>59;)n.minutes-=60,n.hours+=1;return n},b=function(e){var t=d.a.cloneDeep(e);return t.seconds>0?t.seconds-=1:t.minutes>0?(t.minutes-=1,t.seconds=59):t.hours>0&&(t.hours-=1,t.minutes=59,t.seconds=59),t},E={ding:{url:"https://raw.githubusercontent.com/arkadiuszpasek/simple-timer/master/res/ding.mp3",fullName:"Gentle Bell"},w3:{url:"https://raw.githubusercontent.com/arkadiuszpasek/Online-Youtube-Timer/master/res/w3QuestSound.mp3",fullName:"Witcher 3 Quest Sound"}},p={name:"ding",fullName:E.ding.fullName,sound:new Audio(E.ding.url)},g=function(e){return{name:e,sound:new Audio(E[e].url),fullName:E[e].fullName}},v="light",y="dark",k=Object(i.b)({time:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TIME":return f(e,t.payload);case"TIME_TICK":return b(e);case"RESET_TIME":return Object(m.a)({},h);default:return e}},audio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SOUND_CHANGE":return g(t.payload);default:return e}},form:u.a,theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"THEME_CHANGE":return t.payload;case"THEME_TOGGLE":return e===v?y:v;default:return e}}}),O=n(24),T=n(25),N=n(49),j=(n(171),function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(O.b,{to:"/"},r.a.createElement("i",{className:"far fa-clock"})))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(O.b,{to:"/quick-start"},"Quick Start")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/settings"},r.a.createElement("i",{className:"fas fa-cogs"})))))}),C=n(12),S=n(13),w=n(15),_=n(14),I=n(216),D=n(215),A=function(e){return{type:"SOUND_CHANGE",payload:e}},M="sound",x={key:"theme",light:"light",dark:"dark"},G=(n(173),function(e){Object(w.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).onSoundSelectChange=function(t){(0,e.props.changeSound)(t.target.value)},e.onToggleThemeClick=function(){(0,e.props.toggleTheme)()},e.onStore=function(){var t=e.props,n=t.audio.name,a=t.theme;localStorage.setItem(M,n),localStorage.setItem(x.key,a)},e.renderOptions=function(){return Object.keys(E).map((function(e){var t=E[e].fullName;return r.a.createElement("option",{key:e,value:e},t)}))},e.renderSoundList=function(){var t=e.props.audio.sound;return r.a.createElement("div",null,r.a.createElement("p",{className:"form-control form-label"},"Finish sound"),r.a.createElement(I.a,{name:"soundSelect",component:"select",onChange:e.onSoundSelectChange,className:"form-control select"},e.renderOptions()),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary form-control",onClick:function(){return t.play()}},"Play sound")))},e.renderModal=function(){return r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{onSubmit:e.onSubmit},e.renderSoundList(),e.renderToggleThemeButton(),e.renderSaving()))))},e}return Object(S.a)(n,[{key:"renderToggleThemeButton",value:function(){var e=this.props.theme===x.dark;return r.a.createElement("div",{className:"form-control"},r.a.createElement("p",null,"Use dark theme"),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:e,readOnly:!0}),r.a.createElement("span",{role:"button",tabIndex:0,className:"slider",onClick:this.onToggleThemeClick,onKeyDown:this.onToggleThemeClick})))}},{key:"renderSaving",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"form-control"},r.a.createElement("small",null,"Changes are remembered dynamically for the current session, while hitting 'Store' will save them in your browser storage.")),r.a.createElement("div",{className:"form-group text-right"},r.a.createElement("button",{type:"button",className:"btn btn-dark form-control",onClick:this.onStore},"Store")))}},{key:"render",value:function(){return c.a.createPortal(this.renderModal(),document.querySelector("#modal"))}}]),n}(r.a.Component)),H=Object(D.a)({form:"settings"})(G),U=Object(l.b)((function(e){var t=localStorage.getItem(M);return{audio:e.audio,theme:e.theme,initialValues:{soundSelect:t||e.audio.name}}}),{changeSound:A,toggleTheme:function(){return{type:"THEME_TOGGLE"}}})(H),L=(n(92),function(e){Object(w.a)(n,e);var t=Object(_.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){var e=this.props.time;return r.a.createElement("div",{className:"time-display"},r.a.createElement("h1",null,function(e){var t=e.hours,n=e.minutes,a=e.seconds,r=t.toString(),o=n.toString(),c=a.toString();return t<10&&(r="0".concat(r)),n<10&&(o="0".concat(o)),a<10&&(c="0".concat(c)),"".concat(r,":").concat(o,":").concat(c)}(e)))}}]),n}(r.a.Component)),B=Object(l.b)((function(e){return{time:e.time}}))(L),K=function(e){Object(w.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).constructTimeAction=function(){var t=e.props,n=t.time,a={hours:0,minutes:0,seconds:0};switch(t.unit){case"h":a.hours=n;break;case"m":a.minutes=n;break;case"s":a.seconds=n}return a},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.time,a=t.unit,o=t.addTime;return r.a.createElement("div",{className:"card btn",onClick:function(){return o(e.constructTimeAction())},onKeyDown:function(){return o(e.constructTimeAction())},tabIndex:"0",role:"button"},r.a.createElement("h2",null,n,a))}}]),n}(r.a.Component),R=Object(l.b)(null,{addTime:function(e){return{type:"ADD_TIME",payload:e}}})(K),q=(n(211),function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement(B,null),r.a.createElement("div",{className:"quickstart-flex mt mb"},r.a.createElement("p",null,"The timer is stopped on this page, but normally it is always on.",r.a.createElement("br",null),"By clicking time cards you add time to it.",r.a.createElement("br",null),"Try clicking this 10 minute card twice to set the timer for 20 minutes!"),r.a.createElement(R,{time:10,unit:"m"})),r.a.createElement(O.b,{to:"/"},r.a.createElement("div",{className:"btn btn-secondary wide-btn mt-big"},"Go back to the main page and see it going!")))}),X=function(e){Object(w.a)(n,e);var t=Object(_.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid mt mb"},r.a.createElement(R,{time:5,unit:"h"}),r.a.createElement(R,{time:2,unit:"h"}),r.a.createElement(R,{time:1,unit:"h"}),r.a.createElement(R,{time:30,unit:"m"}),r.a.createElement(R,{time:15,unit:"m"}),r.a.createElement(R,{time:10,unit:"m"}),r.a.createElement(R,{time:5,unit:"m"}),r.a.createElement(R,{time:2,unit:"m"}),r.a.createElement(R,{time:1,unit:"m"}),r.a.createElement(R,{time:30,unit:"s"}),r.a.createElement(R,{time:10,unit:"s"}),r.a.createElement(R,{time:5,unit:"s"}))}}]),n}(r.a.Component),Q=function(e){Object(w.a)(n,e);var t=Object(_.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){var e=this.props.resetTime;return r.a.createElement("div",{role:"button",tabIndex:"0",className:"btn btn-secondary wide-btn",onClick:function(){return e()},onKeyDown:function(){return e()}},r.a.createElement("h1",{className:"pt-2"},"Reset"))}}]),n}(r.a.Component),V=Object(l.b)(null,{resetTime:function(){return{type:"RESET_TIME"}}})(Q),z=function(e){Object(w.a)(n,e);var t=Object(_.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.timeTick;this.interval=setInterval((function(){return e()}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.time,a=t.audio.sound;e.time.hours===n.hours&&e.time.minutes===n.minutes&&e.time.seconds===n.seconds||0===n.hours&&0===n.minutes&&0===n.seconds&&a.play()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement(B,null),r.a.createElement(X,null),r.a.createElement(V,null))}}]),n}(r.a.Component),J=Object(l.b)((function(e){return{time:e.time,audio:e.audio}}),{timeTick:function(){return{type:"TIME_TICK"}}})(z),P=n(97);function W(){var e=Object(P.a)(["\n  *,\n  body,\n  html {\n    color: ",";\n  }\n  body::before {\n    background-color: ",";\n  }\n\n  .card {\n    background-color: ",";\n  }\n  .nav::after{\n    background-color: ",";\n  }\n  .nav {\n    ul {\n      li {\n        *:hover {\n          color: ",";\n        }\n      }\n    }\n  }\n\n  .time-display {\n    background-color: ",";\n  }\n\n  .modal-dialog::before {\n    background-color: ",";\n  }\n\n  .form-label {\n    color: ",";\n  }\n\n  .btn-primary {\n    background-color: ",";\n  }\n  \n  .btn-secondary {\n    background-color: ",";\n  }\n  \n  .btn-dark {\n    background-color: ",";\n  }  \n"]);return W=function(){return e},e}var F={color:"black",primaryColor:"#128a6c",secondaryColor:"#31d6ad",thirdColor:"#043d2f",background:"#f3f3f3",hoverColor:"#128a6c",navigationColor:"#31d6ad"},Y={color:"white",primaryColor:"#043d2f",secondaryColor:"#128a6c",thirdColor:"#31d6ad",background:"#3f3f3f",hoverColor:"#31d6ad",navigationColor:"#128a6c"},Z=Object(N.b)(W(),(function(e){return e.theme.color}),(function(e){return e.theme.background}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.background}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.color}),"#128a6c",(function(e){return e.theme.secondaryColor}),"#043d2f"),$=(n(213),function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.theme}));return Object(a.useEffect)((function(){var t=localStorage.getItem(M),n=localStorage.getItem(x.key);n&&e(function(e){return{type:"THEME_CHANGE",payload:e}}(n)),t&&e(A(t))}),[e]),r.a.createElement(N.a,{theme:t===x.light?F:Y},r.a.createElement(Z,null),r.a.createElement(O.a,{basename:"/"},r.a.createElement(j,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",exact:!0},r.a.createElement(J,null)),r.a.createElement(T.a,{path:"/settings"},r.a.createElement(U,null)),r.a.createElement(T.a,{path:"/quick-start"},r.a.createElement(q,null)))))}),ee=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),te=Object(i.c)(k,ee);c.a.render(r.a.createElement(l.a,{store:te},r.a.createElement($,null)),document.getElementById("root"))},92:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.65390e6f.chunk.js.map