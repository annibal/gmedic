
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'

app.controller("loginController",[
  'menuService',
  'titleService',
  '$scope',
  function(
    menu,
    title,
    $scope
  ) {

    menu.visible = false;
    title.pageTitle = ''

  }
])
