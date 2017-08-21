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
