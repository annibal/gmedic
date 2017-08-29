app.controller('agendamentosController',[
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
    title.pageTitle = "Agendamentos"

    if ($routeParams.agendamentoId != null) {
      $scope.idAgendamento = $routeParams.agendamentoId;
      console.log("Obter dados do agendamento "+$scope.idAgendamento);
    } else {
      console.log("Obter dados de todos os agendamentos")
    }


  }
])
