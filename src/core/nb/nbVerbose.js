
import app from 'core/main/main.js'
import gmedic from '../../../gmedic.config.js';

app.service("nbVerbose",[

  function(

  ) {

    this.make = function(config) {

      config = config || {};

      var defaultConfig = {
        name:"verbose",
        active:false
      }

      Object.keys(config).forEach(function(key) {
        defaultConfig[key] = config[key]
      })

      return {
        log : function() {
          if (console
              && console.log
              && (
                defaultConfig.verbose === true
                || gmedic.VERBOSE_ALL === true
              )
          ) {
            console.log("<<< "+defaultConfig.name+" >>>", ...arguments);
          }
        }
      }
    }

  }
])
