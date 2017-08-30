
import app from 'core/main/main.js'
import headerService from 'components/header/headerService.js'
import titleService from 'components/title/titleService.js'
import pacientesService from 'sections/pacientes/pacientesService.js'
import atendentesService from 'sections/atendentes/atendentesService.js'
import agendamentosService from 'sections/agendamentos/agendamentosService.js'
import nbToast from 'core/nb/nbToast.js'

app.controller('notificationController',[
  'headerService',
  'titleService',
  'pacientesService',
  'atendentesService',
  'agendamentosService',
  'nbToast',
  '$scope',
  '$routeParams',
  function(
    header,
    title,
    pacientes,
    atendentes,
    agendamentos,
    toast,
    $scope,
    $routeParams
  ) {

    header.visible = true;
    title.pageTitle = "";

    $scope.idNotification = $routeParams.notificationId;

  }
])
