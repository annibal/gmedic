
if (process.env.NODE_ENV == 'production') {

  // console.log('PRODUCTION MODE aka Dist');

} else {

  console.log('DEVELOPMENT MODE aka Dev');

  if (module.hot) {
    module.hot.accept('./index.pug',function() {
      location.reload();
    });
  }

  // gambs for HMR in Index
  import('./index.pug');

}

// SASS
import './style.scss';

// Libs
import 'jquery/src/jquery.js';
import 'angular/angular.js';
import 'angular-i18n/pt-br.js';
import 'angular-route/angular-route.js';

// Main
import 'core/main/mainController.js'
import 'components/menu/menuController.js'
import 'components/notFound/notFoundController.js'

// Section Controllers
import 'sections/agendamentos/agendamentosController.js'
import 'sections/atendentes/atendentesController.js'
import 'sections/dashboard/dashboardController.js'
import 'sections/login/loginController.js'
import 'sections/login/logoutController.js'
import 'sections/notification/notificationController.js'
import 'sections/pacientes/pacientesController.js'
import 'sections/user/userController.js'
