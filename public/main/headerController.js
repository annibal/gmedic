app.controller("headerController",[
  'headerService',
  '$scope',
  function(
    header,
    $scope
  ) {

    $scope.header = header
    $scope.header.categories[0].visible = true;

    $scope.$watch('header',function() {
      console.log($scope.header.visible)
    })

  }
])
