
import app from 'core/main/main.js'

app.service("headerService",[
  function(
  ) {

    this.items = {
      openMenu:{
        enabled:true,
        order:50
      },
      info:{
        enabled:true,
        order:2
      },
      fullscreen:{
        enabled:true,
        order:3
      },
      chat:{
        enabled:true,
        order:1
      },
      search:{
        enabled:true,
        order:0
      }

    }



  }
])
