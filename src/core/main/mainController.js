
import app from 'core/main/main.js'
import titleService from 'components/title/titleService.js'
import headerService from 'components/header/headerService.js'

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
