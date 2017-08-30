
import routes from 'core/routes.js'

var app = angular.module("gmedic", [
  "ngRoute"
]);

var base = '/'
var viewPath = '/gmedic/public/views/';

app.config(function($routeProvider) {
  routes.forEach(function(route) {
    $routeProvider.when(
      base+route.url,
      {
        controller: route.config.controller,
        templateUrl: viewPath + route.config.viewPath + ".html"
      });
  })

  $routeProvider.otherwise({
    templateUrl:base+"public/main/404.html",
    controller:"notFoundController"
  })
})

module.exports = app;
