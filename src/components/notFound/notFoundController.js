
import app from 'core/main/main.js'
import titleService from 'components/title/titleService.js'
import menuService from 'components/menu/menuService.js'

app.controller("notFoundController",[
  'menuService',
  'titleService',
  function(
    menu, title
  ) {
    menu.visible = false;
    title.pageTitle = '404 Not Found';
  }
])
