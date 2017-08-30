
import app from 'core/main/main.js'
import headerService from 'components/header/headerService.js'
import titleService from 'components/title/titleService.js'

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
