

import './style.scss';

if (process.env.NODE_ENV == 'production') {

  console.log('PRODUCTION MODE aka Dist');

} else {

  console.log('DEVELOPMENT MODE aka Dev');

  if (module.hot) {
    module.hot.accept('./index.pug',function() {
      location.reload();
    });
  }
  import('./index.pug');

}
