
import routes from 'core/routes.js'
import gmedic from '../../../gmedic.config.js'
import firebase from 'firebase/app';
import 'angularfire';

firebase.initializeApp(gmedic.FIREBASE);
window.firebase = firebase

var app = angular.module("gmedic", [
  "ngRoute",
   "firebase"
]);

var base = '/'
var viewPath = '/gmedic/public/views/';

app.config([
  '$routeProvider',
  function(
    $routeProvider
  ) {
    routes.forEach(function(route) {
      $routeProvider.when(
        base+route.url,
        {
          controller: route.config.controller,
          templateUrl: viewPath + route.config.viewPath + ".html"
        });
    })

    $routeProvider.otherwise({
      templateUrl:viewPath+"main/404.html",
      controller:"notFoundController"
    })
  }
]);
module.exports = app;
