
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import screenSizeService from 'components/screenSize/screenSizeService.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js';

const menuControllerVerbose = gmedic.MENU_CONTROLLER_VERBOSE;

app.controller("menuController",[
  'menuService',
  'screenSizeService',
  'nbVerbose',
  '$timeout',
  '$scope',
  function(
    menu,
    screenSize,
    nbVerbose,
    $timeout,
    $scope
  ) {

    $scope.menu = menu
    $scope.menu.categories[0].visible = true;
    var v = nbVerbose.make({
      name:'menuController',
      verbose:!!menuControllerVerbose
    }).log

    $scope.closeMenu = function() {
      v("forceCloseMenu: "+$scope.menu.forceClosed)

      $scope.menu.opened = false;
      $scope.menu.forceClosed = true;

      // this is gambiarra?
      angular.element("body > menu").removeClass("nb-hover")

      $timeout(function() {
        v("forceCloseMenu: "+$scope.menu.forceClosed)
        $scope.menu.forceClosed = false
        $scope.$apply();
      },600)
    }

    $scope.screenSize = screenSize;

    if (screenSize.isLt('NOTEBOOK')) {
      $scope.menu.opened = false;
    }

  }
])
