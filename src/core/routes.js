module.exports = [
  {
    url:'',
    config:{
      controller:'loginController',
      viewPath:'login/login.html'
    }
  },
  {
    url:'login',
    config:{
      controller:'loginController',
      viewPath:'login/login.html'
    }
  },
  {
    url:'forgot-password',
    config:{
      controller:'loginController',
      viewPath:'login/login.html'
    }
  },
  {
    url:'sign-up',
    config:{
      controller:'loginController',
      viewPath:'login/login.html'
    }
  },
  {
    url:'logout',
    config:{
      controller:'logoutController',
      viewPath:'login/logout.html'
    }
  },


  {
    url:'dashboard',
    config:{
      controller:'dashboardController',
      viewPath:'dashboard/dashboard.html'
    }
  },


  {
    url:'atendentes/',
    config:{
      controller:'atendentesController',
      viewPath:'atendentes/atendentesList.html'
    }
  },
  {
    url:'atendente/:atendenteId',
    config:{
      controller:'atendentesController',
      viewPath:'atendentes/atendentesEdit.html'
    }
  },


  {
    url:'pacientes/',
    config:{
      controller:'pacientesController',
      viewPath:'pacientes/pacientesList.html'
    }
  },
  {
    url:'paciente/:pacienteId',
    config:{
      controller:'pacientesController',
      viewPath:'pacientes/pacientesEdit.html'
    }
  },


  {
    url:'agendamentos/',
    config:{
      controller:'agendamentosController',
      viewPath:'agendamentos/agendamentosList.html'
    }
  },
  {
    url:'agendamento/:agendamentoId',
    config:{
      controller:'agendamentosController',
      viewPath:'agendamentos/agendamentosEdit.html'
    }
  },


  {
    url:'notification/:notificationId',
    config:{
      controller:'notificationController',
      viewPath:'notification/notification.html'
    }
  },
  {
    url:'user/',
    config:{
      controller:'userController',
      viewPath:'user/userEdit.html'
    }
  },
]
