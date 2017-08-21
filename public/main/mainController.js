app.controller("mainController",[
  'titleService',
  '$scope',
  function(
    titleService,
    $scope
  ) {

    $scope.title = titleService;

  }
])
