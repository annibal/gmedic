app.service("nbToast",function() {

  this.toasts = [];
  this.toast = function(data) {
    this.toasts.push(data)
  }

})
