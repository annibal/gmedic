import _ from 'lodash';
import './style.css'
import printMe from './print.js'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerText = "Click me and check the console";
    btn.addEventListener("click",printMe);

    element.appendChild(btn)

    return element;
  }

  document.body.appendChild(component());
