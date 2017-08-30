
import app from 'core/main/main.js'
import nbToast from 'core/nb/nbToast.js'

app.service("nbToast",function() {

  this.toasts = [];
  this.toast = function(data) {
    this.toasts.push(data)
  }

})
