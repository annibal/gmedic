
import app from 'core/main/main.js'
import menuService from 'components/menu/menuService.js'
import titleService from 'components/title/titleService.js'

app.controller("loginController",[
  'menuService',
  'titleService',
  '$location',
  '$scope',
  function(
    menu,
    title,
    $location,
    $scope
  ) {

    menu.visible = false;
    title.pageTitle = ''

    $scope.state = 'login';
    $scope.setState = function(state) {
      $scope.state = state;
    }

    $scope.login = {
      username:null, password:null
    }
    $scope.forgot = {
      username:null
    }
    $scope.signup = {
      username:null, password:null, password2:null
    }

    $scope.dologin = function() {
      $location.path('dashboard');
    }
    $scope.resetpwd = function() {
      $location.path('wtf');
    }
    $scope.createaccount = function() {
      $location.path('');
    }

  }
])
