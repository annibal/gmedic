app.controller('userController',[
  'headerService',
  'titleService',
  'userService',
  'nbToast',
  '$scope',
  function(
    header,
    title,
    user,
    toast,
    $scope
  ) {

    header.visible = true;
    title.pageTitle = "Pacientes"

  }
])
