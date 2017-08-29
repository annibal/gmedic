app.controller("logoutController",[
  'headerService',
  'titleService',
  '$scope',
  function(
    header,
    title,
    $scope
  ) {

    header.visible = false;
    title.pageTitle = 'Saindo...'

  }
])
