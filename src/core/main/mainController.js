
import app from 'core/main/main.js'
import titleService from 'components/title/titleService.js'
import menuService from 'components/menu/menuService.js'
import screenSizeService from 'components/screenSize/screenSizeService.js'
import nbBackground from 'core/nb/nbBackground.js'

app.controller("mainController",[
  'titleService',
  'menuService',
  'screenSizeService',
  'nbBackground',
  '$location',
  '$scope',
  function(
    titleService,
    menuService,
    screenSize,
    nbBackground,
    $location,
    $scope
  ) {

    $scope.title = titleService;
    $scope.menu = menuService;
    $scope.screenSize = screenSize;
    $scope.$location = $location;
    $scope.nbBackground = nbBackground;
    window.mainScope = $scope;

    nbBackground.init();

    setTimeout(function() {
      mainScope.$apply()
    },230)


  }
])
