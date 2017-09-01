
import app from 'core/main/main.js'
import titleService from 'components/title/titleService.js'
import menuService from 'components/menu/menuService.js'
import screenSizeService from 'components/screenSize/screenSizeService.js'

app.controller("mainController",[
  'titleService',
  'menuService',
  'screenSizeService',
  '$location',
  '$scope',
  function(
    titleService,
    menuService,
    screenSize,
    $location,
    $scope
  ) {

    $scope.title = titleService;
    $scope.menu = menuService;
    $scope.screenSize = screenSize;
    $scope.$location = $location;
    window.mainScope = $scope;

  }
])
