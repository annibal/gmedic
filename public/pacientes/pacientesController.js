app.controller('pacientesController',[
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
    title.pageTitle = "Pacientes"

    if ($routeParams.pacienteId != null) {
      $scope.idPaciente = $routeParams.pacienteId;
      console.log("Obter dados do paciente "+$scope.idPaciente);
    } else {
      console.log("Obter dados de todos os pacientes")
    }

  }
])
