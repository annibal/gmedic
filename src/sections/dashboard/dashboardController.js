
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'
import screenSizeService from 'components/screenSize/screenSizeService.js'
import pacientesService from 'sections/pacientes/pacientesService.js'
import atendentesService from 'sections/atendentes/atendentesService.js'
import agendamentosService from 'sections/agendamentos/agendamentosService.js'
import nbToast from 'core/nb/nbToast.js'

app.controller('dashboardController',[
  'menuService',
  'titleService',
  'screenSizeService',
  'pacientesService',
  'atendentesService',
  'agendamentosService',
  'nbToast',
  '$scope',
  '$routeParams',
  function(
    menu,
    title,
    screenSize,
    pacientes,
    atendentes,
    agendamentos,
    toast,
    $scope,
    $routeParams
  ) {

    menu.visible = true;
    title.pageTitle = "Dashboard"

    $scope.menu = menu;
    $scope.screenSize = screenSize;

  }
])
