(this["webpackJsonpsimple-timer"]=this["webpackJsonpsimple-timer"]||[]).push([[0],{202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(7),i=a(6),s=a(205),m=a(94),u=a(91),d=a.n(u),p={hours:0,minutes:0,seconds:0},E=function(e,t){for(var a={hours:e.hours+t.hours,minutes:e.minutes+t.minutes,seconds:e.seconds+t.seconds};a.seconds>59;)a.seconds-=60,a.minutes+=1;for(;a.minutes>59;)a.minutes-=60,a.hours+=1;return a},b=function(e){var t=d.a.cloneDeep(e);return t.seconds>0?t.seconds-=1:t.minutes>0?(t.minutes-=1,t.seconds=59):t.hours>0&&(t.hours-=1,t.minutes=59,t.seconds=59),t},h={ding:{url:"https://raw.githubusercontent.com/arkadiuszpasek/simple-timer/master/res/ding.mp3",fullName:"Gentle Bell"},w3:{url:"https://raw.githubusercontent.com/arkadiuszpasek/Online-Youtube-Timer/master/res/w3QuestSound.mp3",fullName:"Witcher Quest Sound"}},v={name:"ding",fullName:h.ding.fullName,sound:new Audio(h.ding.url)},f=Object(i.b)({time:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TIME":return E(e,t.payload);case"TIME_TICK":return b(e);case"RESET_TIME":return Object(m.a)({},p);default:return e}},audio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SOUND_CHANGE":return{name:t.payload,fullName:h[t.payload].fullName,sound:new Audio(h[t.payload].url)};default:return e}},form:s.a}),N=a(23),y=a(24),g=function(){return r.a.createElement("nav",{className:"navbar bg-secondary"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"far fa-clock fa-2x"})))),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{className:"nav-link",to:"/quick-start"},"Quick Start")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{className:"nav-link",to:"/settings"},r.a.createElement("i",{className:"fas fa-cogs fa-lg"})))))},O=a(12),k=a(13),j=a(15),S=a(14),w=a(204),T=a(203),_=function(e){Object(j.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).onFormChange=function(t){(0,e.props.changeSound)(t.target.value)},e.onStore=function(){var t=e.props.audio.name;localStorage.setItem("sound",t)},e.renderOptions=function(){return Object.keys(h).map((function(e){var t=h[e].fullName;return r.a.createElement("option",{key:t,value:e},t)}))},e.renderSoundList=function(){var t=e.props.audio,a=(t.name,t.sound);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Finish sound"),r.a.createElement(w.a,{name:"soundSelect",component:"select",onChange:e.onFormChange,className:"form-control"},e.renderOptions()),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary mt-2",onClick:function(){return a.play()}},"Play sound")),r.a.createElement("label",{className:"mt-5 text-muted text-small"},r.a.createElement("small",null,"Changes are remembered dynamically for the current session, while hitting 'Store' will save them in your browser storage.")),r.a.createElement("div",{className:"form-group text-right"},r.a.createElement("button",{type:"button",className:"btn btn-success mr-3 pt-2 pb-2 pl-5 pr-5",onClick:e.onStore},"Store")))},e.renderModal=function(){return r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Settings")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{onSubmit:e.onSubmit},e.renderSoundList()))))},e}return Object(k.a)(a,[{key:"render",value:function(){return l.a.createPortal(this.renderModal(),document.querySelector("#modal"))}}]),a}(r.a.Component),C=Object(T.a)({form:"settings"})(_),I=Object(o.b)((function(e){return{audio:e.audio,initialValues:{soundSelect:localStorage.getItem("sound")?localStorage.getItem("sound"):e.audio.name}}}),{changeSound:function(e){return{type:"SOUND_CHANGE",payload:e}}})(C),D=function(e){Object(j.a)(a,e);var t=Object(S.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){var e=this.props.time;return r.a.createElement("div",{className:"mt-5 mb-5"},r.a.createElement("h1",null,function(e){var t=e.hours,a=e.minutes,n=e.seconds,r=t.toString(),c=a.toString(),l=n.toString();return t<10&&(r="0".concat(r)),c<10&&(c="0".concat(c)),l<10&&(l="0".concat(l)),"".concat(r,":").concat(c,":").concat(l)}(e)))}}]),a}(r.a.Component),A=Object(o.b)((function(e){return{time:e.time}}))(D),x=function(e){Object(j.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).constructTimeAction=function(){var t=e.props,a=t.time,n={hours:0,minutes:0,seconds:0};switch(t.unit){case"h":n.hours=a;break;case"m":n.minutes=a;break;case"s":n.seconds=a}return n},e}return Object(k.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.time,n=t.unit,c=t.addTime;return r.a.createElement("div",{className:"col-3 ml-auto mr-auto bg-secondary btn",onClick:function(){return c(e.constructTimeAction())}},r.a.createElement("h2",{className:"pt-3 pb-1"},a,n))}}]),a}(r.a.Component),M=Object(o.b)(null,{addTime:function(e){return{type:"ADD_TIME",payload:e}}})(x),U=function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement(A,null),r.a.createElement("div",{className:"col-10 ml-auto mr-auto"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("div",{className:"card-body"},"The timer is stopped on this page, but normally it is always on.",r.a.createElement("br",null),"By clicking time cards you add time to it.",r.a.createElement("br",null),"Try clicking this 10 minute card twice to set the timer for 20 minutes!"))),r.a.createElement(M,{time:10,unit:"m"}),r.a.createElement(N.b,{to:"/"},r.a.createElement("div",{className:"col-8 ml-auto mr-auto mt-5"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("div",{className:"card-body"},"Click here to go to main page and see it going!")))))},R=function(e){Object(j.a)(a,e);var t=Object(S.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mb-5"},r.a.createElement(M,{time:1,unit:"h"}),r.a.createElement(M,{time:30,unit:"m"}),r.a.createElement(M,{time:10,unit:"m"})),r.a.createElement("div",{className:"row mb-5"},r.a.createElement(M,{time:5,unit:"m"}),r.a.createElement(M,{time:2,unit:"m"}),r.a.createElement(M,{time:1,unit:"m"})),r.a.createElement("div",{className:"row mb-5"},r.a.createElement(M,{time:30,unit:"s"}),r.a.createElement(M,{time:10,unit:"s"}),r.a.createElement(M,{time:5,unit:"s"})))}}]),a}(r.a.Component),F=function(e){Object(j.a)(a,e);var t=Object(S.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){var e=this.props.resetTime;return r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{role:"button",tabIndex:"0",className:"col-6 ml-auto btn mr-auto bg-primary",onClick:function(){return e()}},r.a.createElement("h1",{className:"pt-2"},"Reset")))}}]),a}(r.a.Component),L=Object(o.b)(null,{resetTime:function(){return{type:"RESET_TIME"}}})(F),X=function(e){Object(j.a)(a,e);var t=Object(S.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.timeTick;this.interval=setInterval((function(){return e()}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.time,n=t.audio.sound;e.time.hours===a.hours&&e.time.minutes===a.minutes&&e.time.seconds===a.seconds||0===a.hours&&0===a.minutes&&0===a.seconds&&n.play()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement(A,null),r.a.createElement(R,null),r.a.createElement(L,null))}}]),a}(r.a.Component),q=Object(o.b)((function(e){return{time:e.time,audio:e.audio}}),{timeTick:function(){return{type:"TIME_TICK"}}})(X);var B=function(){return r.a.createElement(N.a,{basename:"/"},r.a.createElement(g,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/",exact:!0},r.a.createElement(q,null)),r.a.createElement(y.a,{path:"/settings"},r.a.createElement(I,null)),r.a.createElement(y.a,{path:"/quick-start"},r.a.createElement(U,null))))},G=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Q=Object(i.c)(f,G);l.a.render(r.a.createElement(o.a,{store:Q},r.a.createElement(B,null)),document.getElementById("root"))},96:function(e,t,a){e.exports=a(202)}},[[96,1,2]]]);
//# sourceMappingURL=main.40d821b0.chunk.js.map