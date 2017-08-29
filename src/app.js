

import './style.scss';

if (module.hot) {module.hot.accept();}

if (process.env.NODE_ENV == 'production') {
  console.log('PRODUCTION MODE aka Dist');
} else {
  console.log('DEVELOPMENT MODE aka Dev');
}

async function getComponent() {
  var element = document.createElement("div");
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello")

  return element;
};

getComponent().then(component => {
  document.body.appendChild(component)
})
