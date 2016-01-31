!function(){"use strict";angular.module("formioAppTodo",["ngSanitize","ui.router","ui.bootstrap","formio","ngFormioHelper","bgf.paginateAnything","ngMap"])}(),function(){"use strict";angular.module("formioAppTodo").run(["$rootScope","AppConfig","FormioAuth","$state",function(o,t,r,e){r.init(),angular.forEach(t.forms,function(t,r){o[r]=t}),o.isActive=function(o){return-1!==e.current.name.indexOf(o)}}])}(),function(){"use strict";function o(o,t,r,e,i,n){i.setBaseUrl(n.apiUrl),e.register("login","user"),e.register("register","user"),o.state("home",{url:"/",templateUrl:"views/main.html",controller:["$scope","$state","$rootScope",function(o,t,r){o.todos=[],o.todosUrl=r.todoForm+"/submission",o.getStatus=function(o){switch(o.data.status){case"notstarted":return"danger";case"started":return"info";case"done":return"success"}return""}}]}),r.register("todo",n.forms.todoForm,{defaultValue:{data:{status:"notstarted"}},templates:{view:"views/todo/view.html"}}),t.otherwise("/")}angular.module("formioAppTodo").config(o),o.$inject=["$stateProvider","$urlRouterProvider","FormioResourceProvider","FormioAuthProvider","FormioProvider","AppConfig"]}(),function(){"use strict";angular.module("formioAppTodo").constant("moment",moment)}();