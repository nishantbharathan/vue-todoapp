(function(t){function e(e){for(var n,a,i=e[0],u=e[1],d=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);s&&s(e);while(f.length)f.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},c=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"49755b5e"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(l);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,o[1](d)}r[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=d;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"17a0":function(t,e,o){},"289e":function(t,e,o){"use strict";o("5947")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},c=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},i=[],u={name:"TodoList"},d=u,l=(o("cac5"),o("2877")),s=Object(l["a"])(d,a,i,!1,null,"0c5a4a99",null),f=s.exports,p={name:"App",components:{Header:f}},m=p,h=(o("034f"),Object(l["a"])(m,r,c,!1,null,null,null)),v=h.exports,b=(o("d3b7"),o("8c4f")),y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},_=[],g=(o("99af"),o("4de4"),o("2909")),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},j=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("X")])])])},w=[],x={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},k=x,P=(o("289e"),Object(l["a"])(k,O,w,!1,null,"2f9bcdde",null)),$=P.exports,E={name:"Todos",components:{TodoItem:$},props:["todos"]},A=E,C=Object(l["a"])(A,T,j,!1,null,"6ba10f99",null),S=C.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},L=[],M={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(){var t={title:this.title,completed:!1};this.$emit("add-todo",t)}}},I=M,J=(o("bff3"),Object(l["a"])(I,H,L,!1,null,"374d75a4",null)),q=J.exports,D=o("bc3a"),N=o.n(D),X={name:"Home",components:{Todos:S,AddTodo:q},methods:{deleteTodo:function(t){var e=this;N.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(){e.todos=e.todos.filter((function(e){return e.id!==t}))})).catch((function(t){return console.log(t)}))},addTodo:function(t){var e=this;N.a.post("https://jsonplaceholder.typicode.com/todos",{title:t.title,completed:t.completed}).then((function(t){e.todos=[].concat(Object(g["a"])(e.todos),[t.data])})).catch((function(t){return console.log(t)}))}},data:function(){return{todos:[]}},created:function(){var t=this;N.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){t.todos=e.data})).catch((function(t){return console.log(t)}))}},z=X,B=(o("cccb"),Object(l["a"])(z,y,_,!1,null,null,null)),F=B.exports;n["a"].use(b["a"]);var G=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],K=new b["a"]({routes:G}),Q=K;n["a"].config.productionTip=!1,new n["a"]({router:Q,render:function(t){return t(v)}}).$mount("#app")},5947:function(t,e,o){},"5ced":function(t,e,o){},"642b":function(t,e,o){},"85ec":function(t,e,o){},bff3:function(t,e,o){"use strict";o("17a0")},cac5:function(t,e,o){"use strict";o("642b")},cccb:function(t,e,o){"use strict";o("5ced")}});
//# sourceMappingURL=app.04cfc64f.js.map