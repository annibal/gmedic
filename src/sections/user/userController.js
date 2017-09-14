
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'
import userService from 'sections/user/userService.js'
import nbToast from 'core/nb/nbToast.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'

const sectionUserVerbose = !!gmedic.SECTION_USER_VERBOSE

app.controller('userController',[
  'nbVerbose',
  'menuService',
  'titleService',
  'userService',
  'nbToast',
  '$scope',
  function(
    nbVerbose,
    menu,
    title,
    user,
    toast,
    $scope
  ) {

    var v = nbVerbose.make({
      name:"pacientesController",
      verbose:sectionUserVerbose
    }).log
    v("Start user Controller")

    menu.visible = true;
    title.pageTitle = "Pacientes"

  }
])
