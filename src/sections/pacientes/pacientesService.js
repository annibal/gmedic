
import app from 'core/main/main.js'
import nbToast from 'core/nb/nbToast.js'
import nbSession from 'core/nb/nbSession.js'
import nbCommunication from 'core/nb/nbCommunication.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'
import faker from 'faker/index.js'

const sectionPacientesVerbose = !!gmedic.SECTION_PACIENTES_VERBOSE

app.service("pacientesService",[
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
      name:"pacientesService",
      verbose:sectionPacientesVerbose
    }).log
    v("Start pacientes Service")
    window.faker = faker;

    var pacientesPath = 'pacientes'

    this.get = function(id) {
      id = id || "";

      return new Promise(function(resolve, reject) {resolve(
        Array(faker.random.number({ min:30, max:70})).fill().map(x => {
          return {
            nome:faker.name.findName(),
            consultas:Array(faker.random.number({ min:1, max:12})).fill().map(y => {
              return {
                data:faker.date.recent(260),
                realizada:faker.random.boolean()
              }
            }),
            seguro:
              faker.random.boolean()
              ? {
                nome:faker.lorem.word(1)
              }
              : null,
            anoNascimento:faker.random.number({min:1900, max:2016})
          }
        })
      )})

      return comm.get(pacientesPath+'/'+id)
    }
    this.save = function(data,id) {
      if (!id && data.id) {
        id = data.id;
        delete data.id;
      }
      if (id) {
        return comm.put(pacientesPath+"/"+id, data)
      } else {
        return comm.post(pacientesPath+"/", data)
      }
    }


  }
])
