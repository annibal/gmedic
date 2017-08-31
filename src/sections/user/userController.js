
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'
import userService from 'sections/user/userService.js'
import nbToast from 'core/nb/nbToast.js'

app.controller('userController',[
  'menuService',
  'titleService',
  'userService',
  'nbToast',
  '$scope',
  function(
    menu,
    title,
    user,
    toast,
    $scope
  ) {

    menu.visible = true;
    title.pageTitle = "Pacientes"

  }
])
