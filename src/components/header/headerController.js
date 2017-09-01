
import app from 'core/main/main.js'
import headerService from 'components/header/headerService.js'
import menuService from 'components/menu/menuService.js'

app.controller("headerController",[
  'headerService',
  'menuService',
  '$scope',
  function(
    header,
    menu,
    $scope
  ) {

    $scope.header = header
    $scope.menu = menu

  }
])
