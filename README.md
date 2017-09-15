# gmedic
Calendar for Doctors

# Getting started
* Clone repository ``git clone https://github.com/annibal/gmedic.git``
* cd into the folder ``cd gmedic``
* Run ``npm run help`` to see all registered tasks
* Run ``npm run serve:webpack`` to open a browser with a HMR virtual server

# Deployment
* Clone the repository, enter the folder
* Run ``npm run build:prod`` to compile all assets into and minified bundle
* Run ``npm run serve:pure`` to test if production build is working fine
* Copy **index.html** and **public/** into your server
* **Important:** the whole project is prepared to run under **gmedic/** folder. Check webpack.common.js and gmedic.config.js for configurations

# Contributing
## Structure
The folder structure is divided into 3 main parts, all inside **src/**:
* **Components**, which contains shared things without an specific owner or role
* **Core**, with all the inner workings of the project
* **Sections**, containing each "screen" of the project

## Languages
The HTML files are generated from .pug files. The main pug file is **src/index.pug**.
The JS files have a Babel preprocessor, and webpack parses **import** and **require** to create a dependency tree, compile to ES5, and bundle everything in public/bundle.js. See **src/app.js** for a starting point.
The CSS files are processed from SCSS (begin with **src/style.scss**).

Extra knowledge: webpack processes pug files by reading **src/core/routes.js**. Angular router also reads the same file to route the app.
