
import app from 'core/main/main.js'
import headerService from 'components/header/headerService.js'
import titleService from 'components/title/titleService.js'
import userService from 'sections/user/userService.js'
import nbToast from 'core/nb/nbToast.js'

app.controller('userController',[
  'headerService',
  'titleService',
  'userService',
  'nbToast',
  '$scope',
  function(
    header,
    title,
    user,
    toast,
    $scope
  ) {

    header.visible = true;
    title.pageTitle = "Pacientes"

  }
])
