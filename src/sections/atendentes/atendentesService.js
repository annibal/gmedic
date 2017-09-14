
import app from 'core/main/main.js'
import nbToast from 'core/nb/nbToast.js'
import nbSession from 'core/nb/nbSession.js'
import nbCommunication from 'core/nb/nbCommunication.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'

const sectionAtendentesVerbose = !!gmedic.SECTION_ATENDENTES_VERBOSE

app.service("atendentesService",[
  'nbVerbose',
  'nbSession',
  'nbCommunication',
  'nbToast',
  function(
    nbVerbose,
    session,
    comm,
    toast
  ) {

    var v = nbVerbose.make({
      name:"atendentesService",
      verbose:sectionAtendentesVerbose
    }).log
    v("Start atendentes Service")



  }
])
