app.controller('atendentesController',[
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
    title.pageTitle = "Atendentes"

    if ($routeParams.atendenteId != null) {
      $scope.idAtendente = $routeParams.atendenteId;
      console.log("Obter dados do atendente "+$scope.idAtendente);
    } else {
      console.log("Obter dados de todos os agendamentos")
    }

  }
])
