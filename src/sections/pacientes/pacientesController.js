
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'
import pacientesService from 'sections/pacientes/pacientesService.js'
import atendentesService from 'sections/atendentes/atendentesService.js'
import agendamentosService from 'sections/agendamentos/agendamentosService.js'
import nbToast from 'core/nb/nbToast.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'

const sectionPacientesVerbose = !!gmedic.SECTION_PACIENTES_VERBOSE

app.controller('pacientesController',[
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
      name:"pacientesController",
      verbose:sectionPacientesVerbose
    }).log
    v("Start pacientes controller")

    if (sectionPacientesVerbose) {
      window.pacientesScope = $scope;
      $scope.pacientesService = pacientesService
    }

    menu.visible = true;
    title.pageTitle = "Pacientes"
    $scope.anoAtual = new Date().getFullYear();

    pacientes.get().then(pacientes => {
      $scope.pacientes = pacientes
      setTimeout(x => $scope.$apply(),1)
    })

    if ($routeParams.pacienteId != null) {
      $scope.idPaciente = $routeParams.pacienteId;
      v("Obter dados do paciente "+$scope.idPaciente);
    } else {
      v("Obter dados de todos os pacientes")
    }

  }
])
