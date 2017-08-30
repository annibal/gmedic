
import app from 'core/main/main.js'
import nbToast from 'core/nb/nbToast.js'
import nbSession from 'core/nb/nbSession.js'
import nbCommunication from 'core/nb/nbCommunication.js'

app.service("userService",[
  'nbSession',
  'nbCommunication',
  'nbToast',
  function(
    session,
    comm,
    toast
  ) {



  }
])
