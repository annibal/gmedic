
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'
import pacientesService from 'sections/pacientes/pacientesService.js'
import atendentesService from 'sections/atendentes/atendentesService.js'
import agendamentosService from 'sections/agendamentos/agendamentosService.js'
import nbToast from 'core/nb/nbToast.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'

const sectionAtendentesVerbose = !!gmedic.SECTION_ATENDENTES_VERBOSE

app.controller('atendentesController',[
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
      name:"atendentesController",
      verbose:sectionAtendentesVerbose
    }).log
    v("Start atendentes controller")

    menu.visible = true;
    title.pageTitle = "Atendentes"

    if ($routeParams.atendenteId != null) {
      $scope.idAtendente = $routeParams.atendenteId;
      v("Obter dados do atendente "+$scope.idAtendente);
    } else {
      v("Obter dados de todos os agendamentos")
    }

  }
])
