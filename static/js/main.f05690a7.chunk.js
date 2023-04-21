(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(5),r=c(2),l=c(3),i=c.n(l),o=c(1),d=(c(13),c(14),c(4)),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.selectedTodo,a=e.setSelectedTodo;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.title,s=e.id,n=e.completed,r=(null===c||void 0===c?void 0:c.id)===e.id;return Object(u.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":r}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:s}),Object(u.jsx)("td",{className:"is-vcentered",children:n&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-success":n,"has-text-danger":!n}),children:t})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"fa-eye-slash":r,"fa-eye":!c})})})})})]},s)}))})]})},h={All:"all",Active:"active",Completed:"completed"},m=function(e){var t=e.searchValue,c=e.setFilterType,a=e.setSearchValue;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsx)("select",{"data-cy":"statusSelect",onChange:function(e){var t=e.target.value;c(t)},children:Object.keys(h).map((function(e){return Object(u.jsx)("option",{value:h[e],children:e},e)}))})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){var t=e.target.value;a(t)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(u.jsx)("button",{"aria-label":"reset query","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function O(e){return fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api/"+e+".json").then((function(e){var t;return e.ok?null!==(t=e.headers.get("content-type"))&&void 0!==t&&t.includes("application/json")?e.json():Promise.reject(new Error("Requested file not found")):Promise.reject(new Error("Server don`t response"))}))}var x=function(e){return O("/users/".concat(e))},f=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.todo,c=e.setSelectedTodo,a=t.id,s=t.title,l=t.userId,d=t.completed,b=Object(o.useState)(null),h=Object(r.a)(b,2),m=h[0],O=h[1],p=Object(o.useState)(!0),v=Object(r.a)(p,2),N=v[0],y=v[1],g=Object(o.useState)(""),S=Object(r.a)(g,2),k=S[0],w=S[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(l);case 3:t=e.sent,O(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w("User not found");case 10:return e.prev=10,y(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),N?Object(u.jsx)(f,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(u.jsx)("button",{"aria-label":"Close modal",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),k?Object(u.jsx)("p",{children:k}):Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(u.jsx)("strong",{className:j()({"has-text-danger":!d,"has-text-success":d}),children:t.completed?"Done":"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===m||void 0===m?void 0:m.email),children:null===m||void 0===m?void 0:m.name})]})]})]})]})};var v=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(null),l=Object(r.a)(s,2),d=l[0],j=l[1],h=Object(o.useState)("all"),x=Object(r.a)(h,2),v=x[0],N=x[1],y=Object(o.useState)(""),g=Object(r.a)(y,2),S=g[0],k=g[1],w=Object(o.useState)(""),T=Object(r.a)(w,2),C=T[0],E=T[1],_=Object(o.useState)(!1),L=Object(r.a)(_,2),V=L[0],B=L[1],F=function(e,t,c){var a=c.trim().toLowerCase();return e.filter((function(e){switch(t){case"active":return!e.completed;case"completed":return e.completed;default:return e}})).filter((function(e){return e.title.toLowerCase().includes(a)}))}(c,v,S),I=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,O("/todos");case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),E((c=e.t0)instanceof Error?c.message:String(c));case 11:return e.prev=11,B(!1),e.finish(11);case 14:case"end":return e.stop()}var c}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){I()}),[]);var P;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(m,{searchValue:S,setFilterType:N,setSearchValue:k})}),Object(u.jsx)("div",{className:"block",children:V?Object(u.jsx)(f,{}):(P=F.length,P?Object(u.jsx)(b,{todos:F,selectedTodo:d,setSelectedTodo:j}):Object(u.jsx)("p",{children:C}))})]})})}),d&&Object(u.jsx)(p,{todo:d,setSelectedTodo:j})]})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f05690a7.chunk.js.map