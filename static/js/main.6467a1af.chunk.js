(this["webpackJsonptodo-mine"]=this["webpackJsonptodo-mine"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(4),r=n.n(c),a=(n(12),n(0));var s=function(){return Object(a.jsx)("header",{children:Object(a.jsxs)("h1",{children:["TODO ",Object(a.jsx)("span",{children:"MINE"})]})})};n(14);var i=function(e){var t=e.totalTodos,n=e.completedTodos,o=e.user,c=e.loading;return Object(a.jsxs)("h2",{className:"Counter ".concat(c&&"Counter--disabled"),children:["\xa1Hola ",o,"! ",Object(a.jsx)("br",{}),"Hoy has completado ",n," de ",t," ToDo's"]})};n(15);var d=function(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return Object(a.jsx)("input",{className:"Search",type:"text",placeholder:"Buscar tarea",value:t,onChange:function(e){n(e.target.value)},disabled:o})};n(16);var l=function(e){return Object(a.jsxs)(a.Fragment,{children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResults(),Object(a.jsx)("ul",{children:!e.loading&&!e.error&&e.searchedTodos.map((function(t){return e.render(t)}))})]})};n(17);var u=function(e){var t=e.text,n=e.completed,o=e.onComplete,c=e.onDelete;return Object(a.jsxs)("li",{className:"TodoItem",children:[Object(a.jsx)("span",{className:"Icon Icon-check ".concat(n&&"Icon-check--active"),onClick:o,children:"\u113c"}),Object(a.jsx)("p",{className:"TodoItem-p ".concat(n&&"TodoItem-p--complete"),children:t}),Object(a.jsx)("span",{className:"Icon Icon-delete",onClick:c,children:"X"})]})};n(18);var j=function(e){var t=e.setOpenModal;return Object(a.jsx)("button",{onClick:function(){t(!0)},className:"CreateTodoButton",children:"+"})};n(19);var b=function(e){var t=e.children;return r.a.createPortal(Object(a.jsx)("div",{className:"modal",children:t}),document.getElementById("modal"))},O=n(2);n(20);var m=function(e){var t=e.setOpenModal,n=e.addTodo,c=Object(o.useState)(""),r=Object(O.a)(c,2),s=r[0],i=r[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.length>0&&n(s),t(!1)},className:"TodoForm",children:[Object(a.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(a.jsx)("textarea",{placeholder:"Tu tarea",maxLength:"55",onChange:function(e){i(e.target.value)},value:s}),Object(a.jsxs)("div",{className:"TodoForm__buttonContainer",children:[Object(a.jsx)("button",{className:"TodoForm__button TodoForm__button--cancel",type:"button",onClick:function(){t(!1)},children:"Cancelar"}),Object(a.jsx)("button",{className:"TodoForm__button TodoForm__button--add",type:"submit",children:"A\xf1adir"})]})]})};n(21);var h=function(e){var t=e.setOpenModal,n=e.addUser,c=Object(o.useState)(""),r=Object(O.a)(c,2),s=r[0],i=r[1];return Object(a.jsxs)("form",{className:"UserForm",onSubmit:function(e){e.preventDefault(),console.log("Hola ".concat(s)),s.length>0&&(n(s),t(!1))},children:[Object(a.jsxs)("h2",{children:["\xa1Hola! ",Object(a.jsx)("br",{})," Bienvenido a Todo Mine"]}),Object(a.jsx)("p",{children:"Tu app para organizar tus tareas del d\xeda a d\xeda"}),Object(a.jsx)("label",{children:"\xbfComo te llamas?"}),Object(a.jsx)("input",{type:"text",placeholder:"Tu nombre",maxLength:"13",value:s,onChange:function(e){i(e.target.value)}}),Object(a.jsx)("button",{className:"UserForm__button",type:"submit",children:"\xa1Empecemos!"})]})};var f=function(){return Object(a.jsx)("p",{children:"Hubo un error..."})};n(22);var p=function(){return Object(a.jsxs)("div",{className:"LoadingTodo-container",children:[Object(a.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(a.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs"}),Object(a.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})};var x=function(){return Object(a.jsx)("p",{style:{fontSize:"1.5rem"},children:"\xa1Crea tu primer TODO!"})};var v=function(e){var t=e.searchText;return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{style:{fontSize:"1.5rem"},children:["No hay resultados para ",Object(a.jsxs)("span",{style:{color:"white"},children:[t," "]})]})})};var T=function(e){var t=Object(o.useState)(!1),n=Object(O.a)(t,2),c=n[0],r=n[1];return Object(o.useEffect)((function(){var e=function(e){"TODOS_V1"===e.key&&r(!0)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[]),{show:c,toggleShow:function(){e(),r(!1)}}};n(23);var g=function(e){var t=e.sincronize,n=T(t),o=n.show,c=n.toggleShow;return o?Object(a.jsx)("div",{className:"ChangeAlert-bg",children:Object(a.jsxs)("div",{className:"ChangeAlert",children:[Object(a.jsx)("p",{children:"Parece que cambiaste tus ToDo's en otra pesta\xf1a o ventana del navegador."}),Object(a.jsx)("p",{children:"\xbfQuieres sincronizar tus ToDo's?"}),Object(a.jsx)("button",{onClick:c,children:"Volver a cargar la informaci\xf3n"})]})}):null},S=n(6);var N=function(e,t){var n=Object(o.useState)(!0),c=Object(O.a)(n,2),r=c[0],a=c[1],s=Object(o.useState)(!1),i=Object(O.a)(s,2),d=i[0],l=i[1],u=Object(o.useState)(!0),j=Object(O.a)(u,2),b=j[0],m=j[1],h=Object(o.useState)(t),f=Object(O.a)(h,2),p=f[0],x=f[1];return Object(o.useEffect)((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),x(n),m(!1),a(!0)}catch(d){l(d)}}),1e3)}),[r]),{item:p,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),x(t)}catch(d){l(d)}},loading:b,error:d,sincronizeItem:function(){m(!0),a(!1)}}};var I=function(){var e=N("TODOS_V1",[]),t=e.item,n=e.saveItem,c=e.sincronizeItem,r=e.loading,a=e.error,s=N("USER_V1",""),i=s.item,d=s.saveItem,l=s.loading,u=Object(o.useState)(""),j=Object(O.a)(u,2),b=j[0],m=j[1],h=Object(o.useState)(!1),f=Object(O.a)(h,2),p=f[0],x=f[1],v=t.length,T=t.filter((function(e){return e.completed})).length,g=t.filter((function(e){return e.text.toLowerCase().includes(b.toLocaleLowerCase())}));return Object(o.useEffect)((function(){return!l&&!i&&x(!0)}),[]),{error:a,loading:r,totalTodos:v,completedTodos:T,searchValue:b,setSearchValue:m,searchedTodos:g,openModal:p,setOpenModal:x,addTodo:function(e){var o=Object(S.a)(t);o.push({completed:!1,text:e,id:Math.random().toString(35).substr(2,13)}),n(o)},completeTodo:function(e){var o=t.findIndex((function(t){return t.id===e})),c=Object(S.a)(t);c[o].completed=!c[o].completed,n(c)},deleteTodo:function(e){var o=t.findIndex((function(t){return t.id===e})),c=Object(S.a)(t);c.splice(o,1),n(c)},user:i,addUser:function(e){d(e)},sincronizeTodos:c}};var C=function(){var e=I(),t=e.error,n=e.loading,o=e.totalTodos,c=e.completedTodos,r=e.searchValue,O=e.setSearchValue,T=e.searchedTodos,S=e.completeTodo,N=e.deleteTodo,C=e.openModal,y=e.setOpenModal,E=e.user,_=e.addUser,w=e.addTodo,D=e.sincronizeTodos;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(s,{}),Object(a.jsx)(i,{totalTodos:o,completedTodos:c,user:E,loading:n}),Object(a.jsx)(d,{searchValue:r,setSearchValue:O,loading:n}),Object(a.jsx)(l,{error:t,loading:n,totalTodos:o,searchedTodos:T,onError:function(){return Object(a.jsx)(f,{})},onLoading:function(){return Object(a.jsx)(p,{})},onEmptyTodos:function(){return Object(a.jsx)(x,{})},onEmptySearchResults:function(){return Object(a.jsx)(v,{searchText:r})},render:function(e){return Object(a.jsx)(u,{text:e.text,completed:e.completed,onComplete:function(){return S(e.id)},onDelete:function(){return N(e.id)}},e.id)}}),Object(a.jsx)(j,{setOpenModal:y}),!n&&!E&&C&&Object(a.jsx)(b,{children:Object(a.jsx)(h,{setOpenModal:y,addUser:_})}),E&&C&&Object(a.jsx)(b,{children:Object(a.jsx)(m,{setOpenModal:y,addTodo:w})}),Object(a.jsx)(g,{sincronize:D})]})};n(24);r.a.render(Object(a.jsx)(C,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.6467a1af.chunk.js.map