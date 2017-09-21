
import app from 'core/main/main.js'
import nbSession from 'core/nb/nbSession.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'
import firebase from 'firebase/app.js'

const communicationServiceVerbose = !!gmedic.NB_COMMUNICATION_SERVICE_VERBOSE;

app.service("nbCommunication",[
  'nbVerbose',
  'nbSession',
  '$http',
  '$firebaseObject',
  function(
    nbVerbose,
    nbSession,
    $http,
    $firebaseObject,
  ) {
    var v = nbVerbose.make({
      name:"nbCommunication",
      verbose:communicationServiceVerbose
    }).log

    v("NB Communication Service Initialized")

    this.get = function() {}
    this.post = function() {}
    this.delete = function() {}
    this.put = function() {}
    this.request = function() {}
  }
])
