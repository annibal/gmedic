
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import screenSizeService from 'components/screenSize/screenSizeService.js'

app.controller("menuController",[
  'menuService',
  'screenSizeService',
  '$scope',
  function(
    menu,
    screenSize,
    $scope
  ) {

    $scope.menu = menu
    $scope.menu.categories[0].visible = true;

    $scope.screenSize = screenSize;

    if (screenSize.isLt('NOTEBOOK')) {
      $scope.menu.opened = false;
    }

  }
])
