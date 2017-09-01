
import app from 'core/main/main.js'

app.service("headerService",[
  function(
  ) {

    this.items = {
      openMenu:{
        enabled:true,
        order:1
      },
      info:{
        enabled:true,
        order:3
      },
      fullscreen:{
        enabled:true,
        order:5
      },
      chat:{
        enabled:true,
        order:4
      },
      search:{
        enabled:true,
        order:2
      }

    }



  }
])
