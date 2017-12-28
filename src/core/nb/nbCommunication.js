
import app from 'core/main/main.js'
import nbSession from 'core/nb/nbSession.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'
// import firebase from 'firebase/app.js'
import faker from 'faker/index.js'

const communicationServiceVerbose = !!gmedic.NB_COMMUNICATION_SERVICE_VERBOSE;
//TODO: allow to choose provider

app.service("nbCommunication",[
  'nbVerbose',
  'nbSession',
  '$http',
  '$rootScope',
  '$firebaseObject',
  '$firebaseArray',
  function(
    nbVerbose,
    nbSession,
    $http,
    $rootScope,
    $firebaseObject,
    $firebaseArray,
  ) {
    var v = nbVerbose.make({
      name:"nbCommunication",
      verbose:communicationServiceVerbose
    }).log

    v("NB Communication Service Initialized")

    /**
     * Returns 2 objects, one that contains data and another that contains errors. Both trigger events when they change.
     * Can be called as:
     *   create("endpoint/url")
     *   create("endpoint/url", nbValidator)
     *   create("endpoint/url", nbValidator, nbTransformator)
     *   create({endpoint:{url:"",method:"PUT"}})
     *   create({endpoint:{url:"",method:"PUT"}}, nbValidator, nbTransformator)
     *   create({endpoint:{url:"",method:"PUT"},validate:nbValidator.validate})
     *   create({endpoint:{url:"",method:"PUT"},validate:nbValidator.validate}, nbTransformator)
     *   create({endpoint:{url:"",method:"PUT"},validate:nbValidator.validate,transform:{in:function, out:function}})
     *
     * validate = function(dataToBeSent, previousData, {url, method})
     * return === true means ok
     * return == {} or false means error, therefore doesnt send and return object with validation errors
     *
     * transform.in = function(dataFromServer, {url, method})
     * all data returned gets passed to service
     *
     * transform.out = function(dataFromService. {url, method})
     * all data returned gets sent to server
     */
    this.create = function(config) {
      if (!config || (((config||{}).endpoint||{}).url||"").length == 0 ) {
        throw Error("Invalid configuration on creating communication object")
      }
      if (typeof config == "string") {
        config = {endpoint: {url:config}}
      }
      var nbValidatorObj = arguments[1]
      if (!!nbValidatorObj && nbValidatorObj.isNbValidator) {
        config.validate = nbValidatorObj.validate
      }

      var defaultConfig = {
        endpoint:{
          url: null,
          method: "GET",
        },
        methodEndpoints:{
          create:{ url:"", method:"POST", },
          read:{ url:"", method:"GET", },
          update:{ url:"", method:"PUT", },
          delete:{ url:"", method:"DELETE", },
        },
        validate:function() { return true; },
        transform:{
          in:function(data) { return data; },
          out:function(data) { return data; }
        }
      }

      Object.keys(config).forEach(function(key) {
        defaultConfig[key] = config[key]
      })

      v("Creating communication link with configuration: ",defaultConfig);

      return this._makeCommObj(defaultConfig)
    }

    this.reference = {};

    this._makeCommObj = function(config) {
      var portal = {};
      var errors = {};
      var refId = faker.random.uuid();
      // this.reference(refId) =d portal;

      var fRef = firebase.database().ref().child(config.endpoint.url);


      $rootScope.$watch(
        function() { return this.reference(refId) },
        function(newValue, oldValue) {



        },
        true
      )

    }
  }
])
