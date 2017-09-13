
import app from 'core/main/main.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js';

const menuServiceVerbose = !!gmedic.MENU_SERVICE_VERBOSE;

app.service("menuService",[
  'nbVerbose',
  function(
    nbVerbose,
  ) {
    var v = nbVerbose.make({
      name:"Menu Service",
      verbose:menuServiceVerbose
    }).log

    this.categories = [
      {
        text:"Menu",
        items: [
          {
            text:"Dashboard",
            url:"dashboard"
          },
          {
            text:"Pacientes",
            url:"pacientes"
          },
          {
            text:"Atendentes",
            url:"atendentes"
          },
          {
            text:"Agendamentos",
            url:"agendamentos"
          }
        ]
      },
      {
        text:"Notifications",
        items: [
          {text:"Teste notification 1", url:"notification/123", htmlClass:"unread"},
          {text:"Teste notification 2", url:"notification/456"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
          {text:"Teste notification 3", url:"notification/789"},
        ]
      },
      {
        text:"User",
        items: [
          {
            text:"Editar Dados",
            url:"user"
          },
          {
            text:"Logout",
            url:"logout"
          }
        ]
      }
    ]
    v("Initial categories",this.categories);

    this.setCategoryVisible = function(category) {
      v("Set category visible",category)
      this.categories.forEach(function(category) {
        category.visible = false;
      })
      category.visible = true;
    }

    this.visible = true;
    this.opened = true;

    this.toggleMenu = function() {
      v("Toggle menu - this.opened: "+this.opened)
      this.opened = !this.opened;
    }
  }
])
