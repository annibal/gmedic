
import app from 'core/main/main.js'

app.service("menuService",[
  function(
  ) {

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

    this.setCategoryVisible = function(category) {
      this.categories.forEach(function(category) {
        category.visible = false;
      })
      category.visible = true;
    }

    this.visible = true;
    this.opened = true;

    this.toggleMenu = function() {
      this.opened = !this.opened;
    }
  }
])
