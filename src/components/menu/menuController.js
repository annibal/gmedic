
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import screenSizeService from 'components/screenSize/screenSizeService.js'

app.controller("menuController",[
  'menuService',
  'screenSizeService',
  '$timeout',
  '$scope',
  function(
    menu,
    screenSize,
    $timeout,
    $scope
  ) {

    $scope.menu = menu
    $scope.menu.categories[0].visible = true;

    $scope.closeMenu = function() {
      $scope.menu.opened = false;
      $scope.menu.forceClosed = true;
      console.log("forceCloseMenu: "+$scope.menu.forceClosed)
      $timeout(function() {
        $scope.menu.forceClosed = false
        console.log("forceCloseMenu: "+$scope.menu.forceClosed)
        $scope.$apply();
      },600)
    }

    $scope.screenSize = screenSize;

    if (screenSize.isLt('NOTEBOOK')) {
      $scope.menu.opened = false;
    }

  }
])
