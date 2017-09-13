
import app from 'core/main/main.js'
import nbToast from 'core/nb/nbToast.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'

const toastServiceVerbose = !!gmedic.NB_TOAST_SERVICE_VERBOSE;

app.service("nbToast",[
  'nbVerbose',
  function(
    nbVerbose
  ) {
    var v = nbVerbose.make({
      name:"nbToast",
      verbose:toastServiceVerbose
    }).log


    v("NB Toast Service Initialized")

    this.toasts = [];
    this.toast = function(data) {
      this.toasts.push(data)
    }

  }
])
