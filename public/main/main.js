var app = angular.module("gmedic", [
  "ngRoute"
]);

app.config(function($routeProvider) {
  routes.forEach(function(route) {
    $routeProvider.when(route.url, route.config);
  })

  $routeProvider.otherwise({
    templateUrl:"/public/main/404.html",
    controller:"notFoundController"
  })
})
