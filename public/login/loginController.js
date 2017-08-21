app.controller("loginController",[
  'headerService',
  'titleService',
  '$scope',
  function(
    header,
    title,
    $scope
  ) {

    header.visible = false;
    title.pageTitle = ''

  }
])
