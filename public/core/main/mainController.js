app.controller("mainController",[
  'titleService',
  'headerService',
  '$scope',
  function(
    titleService,
    headerService,
    $scope
  ) {

    $scope.title = titleService;
    $scope.header = headerService;
    window.mainScope = $scope;

  }
])
