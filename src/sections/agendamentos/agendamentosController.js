
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'
import pacientesService from 'sections/pacientes/pacientesService.js'
import atendentesService from 'sections/atendentes/atendentesService.js'
import agendamentosService from 'sections/agendamentos/agendamentosService.js'
import nbToast from 'core/nb/nbToast.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'

const sectionAgendamentosVerbose = !!gmedic.SECTION_AGENDAMENTOS_VERBOSE

app.controller('agendamentosController',[
  'nbVerbose',
  'menuService',
  'titleService',
  'pacientesService',
  'atendentesService',
  'agendamentosService',
  'nbToast',
  '$scope',
  '$routeParams',
  function(
    nbVerbose,
    menu,
    title,
    pacientes,
    atendentes,
    agendamentos,
    toast,
    $scope,
    $routeParams
  ) {

    var v = nbVerbose.make({
      name:"agendamentosController",
      verbose:sectionAgendamentosVerbose
    }).log
    v("Start agendamentos controller")

    menu.visible = true;
    title.pageTitle = "Agendamentos"

    if ($routeParams.agendamentoId != null) {
      $scope.idAgendamento = $routeParams.agendamentoId;
      v("Obter dados do agendamento "+$scope.idAgendamento);
    } else {
      v("Obter dados de todos os agendamentos")
    }


  }
])
