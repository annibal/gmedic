var routes = [
  {
    url:'/',
    config:{
      controller:'loginController',
      templateUrl:'/public/login/login.html'
    }
  },
  {
    url:'/login',
    config:{
      controller:'loginController',
      templateUrl:'public/login/login.html'
    }
  },
  {
    url:'/forgot-password',
    config:{
      controller:'loginController',
      templateUrl:'public/login/login.html'
    }
  },
  {
    url:'/sign-up',
    config:{
      controller:'loginController',
      templateUrl:'public/login/login.html'
    }
  },
  {
    url:'/logout',
    config:{
      controller:'logoutController',
      templateUrl:'public/login/logout.html'
    }
  },


  {
    url:'/dashboard',
    config:{
      controller:'dashboardController',
      templateUrl:'/public/dashboard/dashboard.html'
    }
  },


  {
    url:'/atendentes/',
    config:{
      controller:'atendentesController',
      templateUrl:'/public/atendentes/atendentesList.html'
    }
  },
  {
    url:'/atendente/:atendenteId',
    config:{
      controller:'atendentesController',
      templateUrl:'/public/atendentes/atendentesEdit.html'
    }
  },


  {
    url:'/pacientes/',
    config:{
      controller:'pacientesController',
      templateUrl:'/public/pacientes/pacientesList.html'
    }
  },
  {
    url:'/paciente/:pacienteId',
    config:{
      controller:'pacientesController',
      templateUrl:'/public/pacientes/pacientesEdit.html'
    }
  },


  {
    url:'/agendamentos/',
    config:{
      controller:'agendamentosController',
      templateUrl:'/public/agendamentos/agendamentosList.html'
    }
  },
  {
    url:'/agendamento/:agendamentoId',
    config:{
      controller:'agendamentosController',
      templateUrl:'/public/agendamentos/agendamentosEdit.html'
    }
  },


  {
    url:'/notification/:notificationId',
    config:{
      controller:'notificationController',
      templateUrl:'/public/notification/notification.html'
    }
  },
  {
    url:'/user/',
    config:{
      controller:'userController',
      templateUrl:'/public/user/userEdit.html'
    }
  },
]
