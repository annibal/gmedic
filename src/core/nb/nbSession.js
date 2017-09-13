
import app from 'core/main/main.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'

const sessionServiceVerbose = !!gmedic.NB_SESSION_SERVICE_VERBOSE;

app.service("nbSession",[
  'nbVerbose',
  function(
    nbVerbose
  ) {
    var v = nbVerbose.make({
      name:"nbSession",
      verbose:sessionServiceVerbose
    }).log

    v("NB Session Service Initialized")

    this.data = {}
  }
])
