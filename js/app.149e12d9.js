(function(t){function a(a){for(var i,o,r=a[0],d=a[1],l=a[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(e,o)&&e[o]&&p.push(e[o][0]),e[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);c&&c(a);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,a=0;a<s.length;a++){for(var n=s[a],i=!0,r=1;r<n.length;r++){var d=n[r];0!==e[d]&&(i=!1)}i&&(s.splice(a--,1),t=o(o.s=n[0]))}return t}var i={},e={app:0},s=[];function o(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,a,n){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(n,i,function(a){return t[a]}.bind(null,i));return n},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var c=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,a,n){t.exports=n("56d7")},"3a52":function(t,a,n){"use strict";n("4b72")},"4b72":function(t,a,n){},"4d00":function(t,a,n){"use strict";n("5154")},5154:function(t,a,n){},"56d7":function(t,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"todo"}},[n("h2",[t._v("Задачи")]),n("div",{staticClass:"nav"},[n("div",{staticClass:"nav__item"},[n("div",{staticClass:"btn",on:{click:function(a){return t.openModal(null)}}},[t._v("Добавить задачу")]),t.isModal?n("modal"):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputFind,expression:"inputFind"}],staticClass:"input",attrs:{type:"text",placeholder:"поиск"},domProps:{value:t.inputFind},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.find=t.inputFind},input:function(a){a.target.composing||(t.inputFind=a.target.value)}}})],1),n("div",{staticClass:"nav__item"},[n("div",{staticClass:"sort"},[n("div",{staticClass:"sort__btn",class:{sort__btn_active:0===t.active},on:{click:function(a){t.setTasksPull(-1),t.active=0}}},[t._v(" Всего "+t._s(t.tasks.length)+" ")]),n("div",{staticClass:"sort__btn",class:{sort__btn_active:1===t.active},on:{click:function(a){t.setTasksPull(0),t.active=1}}},[t._v(" Новых "+t._s(t.taskFilter(0).length)+" ")]),n("div",{staticClass:"sort__btn",class:{sort__btn_active:2===t.active},on:{click:function(a){t.setTasksPull(1),t.active=2}}},[t._v(" В работе "+t._s(t.taskFilter(1).length)+" ")]),n("div",{staticClass:"sort__btn",class:{sort__btn_active:3===t.active},on:{click:function(a){t.setTasksPull(2),t.active=3}}},[t._v(" Завершено "+t._s(t.taskFilter(2).length)+" ")])])])]),n("table",{staticClass:"table"},[t._m(0),t._l(t.tasksFind(t.find),(function(t){return n("task",{key:t.id,attrs:{id:t.id}})}))],2)])])},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("th",[t._v("Описание")]),n("th",[t._v("Статус")]),n("th",[t._v("Приоритет")]),n("th",[t._v("Плановая дата окончания")]),n("th",[t._v("Фактическая дата окончания")]),n("th",[t._v("Действие")])])}],o=n("5530"),r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",{staticClass:"task",on:{dblclick:function(a){return t.openModal(t.id)}}},[n("td",{staticClass:"task__long"},[t._v(t._s(t.task.description))]),n("td",[t._v(t._s(t.status(t.task.status)))]),n("td",[t._v(t._s(t.priority(t.task.priority)))]),n("td",[t._v(t._s(t.task.plannedEnd))]),n("td",[t._v(t._s(t.task.actualEnd))]),n("td",{staticClass:"task__delete",on:{click:function(a){return t.delTask(t.id)}}},[t._v("Удалить")])])},d=[],l=n("2f62"),c={props:["id"],computed:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["taskId"])),{},{task:function(){return this.taskId(this.id)}}),methods:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["delTask","openModal"])),{},{edit:function(){this.$emit("edit",this.id)},status:function(t){return t?1===t?"В работе":"Завершено":"Новый"},priority:function(t){return t?1===t?"Средний":"Высокий":"Низкий"}})},u=c,p=(n("4d00"),n("2877")),f=Object(p["a"])(u,r,d,!1,null,"6516e1fa",null),_=f.exports,v=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("form",{staticClass:"modal"},[n("div",{staticClass:"modal__inner"},[n("div",{staticClass:"modal__elem"},[n("div",{staticClass:"modal__title"},[t._v(" Создание/редактирование задачи ")]),n("div",{staticClass:"modal__exit",on:{click:t.closeModal}})]),n("div",{staticClass:"modal__elem"},[n("div",{staticClass:"modal__item modal__item_row"},[n("label",{staticClass:"modal__label modal__label_mb",attrs:{for:"description"}},[t._v("Описание:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"modal__input",attrs:{type:"text"},domProps:{value:t.description},on:{input:function(a){a.target.composing||(t.description=a.target.value)}}})])]),n("div",{staticClass:"modal__elem"},[n("div",{staticClass:"modal__item"},[n("label",{staticClass:"modal__label",attrs:{for:"priority"}},[t._v("Приоритет:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.priority,expression:"priority"}],staticClass:"modal__input",on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.priority=a.target.multiple?n:n[0]}}},[n("option",[t._v("Низкий")]),n("option",[t._v("Средний")]),n("option",[t._v("Высокий")])])]),n("div",{staticClass:"modal__item"},[n("label",{staticClass:"modal__label",attrs:{for:"status"}},[t._v("Статус:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"modal__input",on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.status=a.target.multiple?n:n[0]}}},[n("option",[t._v("Новый")]),n("option",[t._v("В работе")]),n("option",[t._v("Завершено")])])])]),n("div",{staticClass:"modal__elem"},[n("div",{staticClass:"modal__item modal__item_row"},[n("label",{staticClass:"modal__label modal__label_mb",attrs:{for:"plannedEnd"}},[t._v("Крайний срок:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.plannedEnd,expression:"plannedEnd"}],staticClass:"modal__input",attrs:{type:"text"},domProps:{value:t.plannedEnd},on:{input:function(a){a.target.composing||(t.plannedEnd=a.target.value)}}})])]),n("div",{staticClass:"btn modal__btn",on:{click:function(a){t.editId?t.change(t.editId):t.add()}}},[t._v(" Сохранить ")])])])},m=[],k=(n("a4d3"),n("e01a"),{created:function(){if(this.editId){var t=this.taskId(this.editId);console.log(t+"adsasdasda"),this.description=t.description,this.priority=this.unformatPriority(t.priority),this.status=this.unformatStatus(t.status),this.plannedEnd=t.plannedEnd,this.description=t.description}},data:function(){return{create:!0,description:"Описание задачи",priority:"Низкий",status:"Новый",plannedEnd:(new Date).toLocaleDateString(),actualEnd:""}},computed:Object(o["a"])({},Object(l["b"])(["taskId","editId"])),methods:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["closeModal","addTask","changeTask"])),{},{add:function(){this.addTask({id:Math.random(),description:this.description,priority:this.formatPriority(this.priority),status:this.formatStatus(this.status),plannedEnd:this.plannedEnd,actualEnd:null}),this.closeModal()},change:function(){this.changeTask({id:this.editId,description:this.description,priority:this.formatPriority(this.priority),status:this.formatStatus(this.status),plannedEnd:this.plannedEnd,actualEnd:null}),this.closeModal()},formatStatus:function(t){return"Новый"===t?0:"В работе"===t?1:2},formatPriority:function(t){return"Низкий"===t?0:"Средний"===t?1:2},unformatStatus:function(t){return t?1===t?"В работе":"Завершено":"Новый"},unformatPriority:function(t){return t?1===t?"Средний":"Высокий":"Низкий"}})}),b=k,h=(n("3a52"),Object(p["a"])(b,v,m,!1,null,"de7aa7ea",null)),y=h.exports,E={name:"app",data:function(){return{modal:!1,inputFind:"",find:"",active:0}},components:{task:_,modal:y},computed:Object(o["a"])({},Object(l["b"])(["tasks","isModal","taskFilter","tasksFind"])),methods:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["openModal","setTasksPull"])),{},{sort:function(t){console.log(t)}})},g=E,C=(n("5c0b"),Object(p["a"])(g,e,s,!1,null,null,null)),O=C.exports;n("4de4"),n("7db0"),n("a434");i["a"].use(l["a"]);var j=new l["a"].Store({state:{isModal:!1,editId:null,tasks:[{id:"0",description:"Задача 1",status:2,priority:3,plannedEnd:"02.09.2019",actualEnd:"02.09.2020"},{id:"1",description:"Задача 2",status:0,priority:2,plannedEnd:"02.12.2019",actualEnd:"02.01.2020"},{id:"2",description:"Задача 3",status:0,priority:3,plannedEnd:"03.09.2020",actualEnd:"02.09.2020"},{id:"3",description:"Задача 4",status:1,priority:0,plannedEnd:"02.09.2019",actualEnd:"02.09.2019"},{id:"4",description:"Задача 5",status:2,priority:1,plannedEnd:"02.09.2019",actualEnd:"02.09.2019"},{id:"5",description:"Задача 6",status:0,priority:1,plannedEnd:"02.09.2019",actualEnd:"02.09.2019"}],tasksPull:[{id:"0",description:"Задача 1",status:2,priority:3,plannedEnd:"02.09.2019",actualEnd:"02.09.2020"},{id:"1",description:"Задача 2",status:0,priority:2,plannedEnd:"02.12.2019",actualEnd:"02.01.2020"},{id:"2",description:"Задача 3",status:0,priority:3,plannedEnd:"03.09.2020",actualEnd:"02.09.2020"},{id:"3",description:"Задача 4",status:1,priority:0,plannedEnd:"02.09.2019",actualEnd:"02.09.2019"},{id:"4",description:"Задача 5",status:2,priority:1,plannedEnd:"02.09.2019",actualEnd:"02.09.2019"},{id:"5",description:"Задача 6",status:0,priority:1,plannedEnd:"02.09.2019",actualEnd:"02.09.2019"}]},getters:{isModal:function(t){return t.isModal},editId:function(t){return t.editId},tasks:function(t){return t.tasks},taskFilter:function(t){return function(a){return t.tasks.filter((function(t){return t.status===a}))}},taskId:function(t){return function(a){return t.tasks.find((function(t){return t.id===a}))}},tasksFind:function(t){return function(a){return t.tasksPull.filter((function(t){return-1!==t.description.indexOf(a)}))}}},mutations:{setTasksPull:function(t,a){t.tasksPull=-1!==a?t.tasks.filter((function(t){return t.status===a})):t.tasks},openModal:function(t,a){t.editId=a,t.isModal=!0},closeModal:function(t){t.isModal=!1},addTask:function(t,a){t.tasks.push(a)},changeTask:function(t,a){var n=t.tasks.indexOf(t.tasks.find((function(a){return a.id===t.editId})));t.tasks[n]=a,t.tasks=t.tasks.sort()},delTask:function(t,a){var n=t.tasks.indexOf(t.tasks.find((function(t){return t.id===a})));t.tasks.splice(n,1)}},actions:{},modules:{}}),P=n("59ca"),x=n.n(P);n("66ce"),n("588e");i["a"].config.productionTip=!1,new i["a"]({store:j,created:function(){var t={apiKey:"AIzaSyBJLRpOsZWvR5Cui24Hs4oHocoqqKmlx6k",authDomain:"task-list-36bda.firebaseapp.com",databaseURL:"https://task-list-36bda.firebaseio.com",projectId:"task-list-36bda",storageBucket:"task-list-36bda.appspot.com",messagingSenderId:"460225703659",appId:"1:460225703659:web:abad589b5eff10835dd8ae"};x.a.initializeApp(t)},render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,a,n){"use strict";n("9c0c")},"9c0c":function(t,a,n){}});
//# sourceMappingURL=app.149e12d9.js.map