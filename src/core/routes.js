module.exports = [
  {
    url:'',
    config:{
      controller:'loginController',
      viewPath:'login/login'
    }
  },
  {
    url:'login',
    config:{
      controller:'loginController',
      viewPath:'login/login'
    }
  },
  {
    url:'forgot-password',
    config:{
      controller:'loginController',
      viewPath:'login/login'
    }
  },
  {
    url:'sign-up',
    config:{
      controller:'loginController',
      viewPath:'login/login'
    }
  },
  {
    url:'logout',
    config:{
      controller:'logoutController',
      viewPath:'login/logout'
    }
  },


  {
    url:'dashboard',
    config:{
      controller:'dashboardController',
      viewPath:'dashboard/dashboard'
    }
  },


  {
    url:'atendentes/',
    config:{
      controller:'atendentesController',
      viewPath:'atendentes/atendentesList'
    }
  },
  {
    url:'atendente/:atendenteId',
    config:{
      controller:'atendentesController',
      viewPath:'atendentes/atendentesEdit'
    }
  },


  {
    url:'pacientes/',
    config:{
      controller:'pacientesController',
      viewPath:'pacientes/pacientesList'
    }
  },
  {
    url:'paciente/:pacienteId',
    config:{
      controller:'pacientesController',
      viewPath:'pacientes/pacientesEdit'
    }
  },


  {
    url:'agendamentos/',
    config:{
      controller:'agendamentosController',
      viewPath:'agendamentos/agendamentosList'
    }
  },
  {
    url:'agendamento/:agendamentoId',
    config:{
      controller:'agendamentosController',
      viewPath:'agendamentos/agendamentosEdit'
    }
  },


  {
    url:'notification/:notificationId',
    config:{
      controller:'notificationController',
      viewPath:'notification/notification'
    }
  },
  {
    url:'user/',
    config:{
      controller:'userController',
      viewPath:'user/userEdit'
    }
  },
]
