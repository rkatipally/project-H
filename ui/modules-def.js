angular.module("common", []);
angular.module("commonDirectives",[])
angular.module("registration", ["commonDirectives", "common"]);
angular.module("mainapp", ['ui.router', "registration", "common"]);



//app.js
//var routerApp = angular.module('mainapp', ['ui.router', "registration"]);

