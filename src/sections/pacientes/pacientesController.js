
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'
import pacientesService from 'sections/pacientes/pacientesService.js'
import atendentesService from 'sections/atendentes/atendentesService.js'
import agendamentosService from 'sections/agendamentos/agendamentosService.js'
import nbToast from 'core/nb/nbToast.js'

app.controller('pacientesController',[
  'menuService',
  'titleService',
  'pacientesService',
  'atendentesService',
  'agendamentosService',
  'nbToast',
  '$scope',
  '$routeParams',
  function(
    menu,
    title,
    pacientes,
    atendentes,
    agendamentos,
    toast,
    $scope,
    $routeParams
  ) {

    menu.visible = true;
    title.pageTitle = "Pacientes"

    if ($routeParams.pacienteId != null) {
      $scope.idPaciente = $routeParams.pacienteId;
      console.log("Obter dados do paciente "+$scope.idPaciente);
    } else {
      console.log("Obter dados de todos os pacientes")
    }

  }
])
