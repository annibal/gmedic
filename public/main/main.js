var app = angular.module("gmedic", [
  "ngRoute"
]);

var base = '/'

app.config(function($routeProvider) {
  routes.forEach(function(route) {
    $routeProvider.when(base+route.url, route.config);
  })

  $routeProvider.otherwise({
    templateUrl:base+"public/main/404.html",
    controller:"notFoundController"
  })
})
