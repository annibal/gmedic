
import app from 'core/main/main.js'
import titleService from 'components/title/titleService.js'
import headerService from 'components/header/headerService.js'

app.controller("notFoundController",[
  'headerService',
  'titleService',
  function(
    header, title
  ) {
    header.visible = false;
    title.pageTitle = '404 Not Found';
  }
])
