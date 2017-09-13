
import app from 'core/main/main.js'
import nbVerbose from 'core/nb/nbVerbose.js'
import gmedic from '../../../gmedic.config.js'

const screenSizeVerbose = gmedic.SCREEN_SIZE_VERBOSE;

app.service("screenSizeService",[
  'nbVerbose',
  '$window',
  '$rootScope',
  '$document',
  '$timeout',
  function(
    nbVerbose,
    $window,
    $rootScope,
    $document,
    $timeout
  ) {
    var v = nbVerbose.make({
      name:"screenSize",
      verbose:screenSizeVerbose
    }).log;

    this.goldenStartSize = -2;
    this.goldenSize = 342;
    this.viewportMetaElement = angular.element("meta[name=viewport]");
    v("Starting...", "Golden Start Size: "+this.goldenStartSize, "Golden Size: "+this.goldenSize);

    this.calcBreakpoint = function(n) {
      return this.goldenSize * n + this.goldenStartSize
    }
    this.BREAKPOINTS = {}
    this.BREAKPOINTS.NONE = this.calcBreakpoint(0);
    // this.BREAKPOINTS.MOBILE_PORTRAIT_NANO = this.calcBreakpoint(1)-150;
    // this.BREAKPOINTS.MOBILE_PORTRAIT_MICRO = this.calcBreakpoint(1)-75;
    this.BREAKPOINTS.MOBILE_PORTRAIT_EXTRA_SMALL = this.calcBreakpoint(1);
    this.BREAKPOINTS.MOBILE_PORTRAIT_SMALL = this.calcBreakpoint(1)+75;
    this.BREAKPOINTS.MOBILE_PORTRAIT = this.calcBreakpoint(1)+150;
    this.BREAKPOINTS.MOBILE_LANDSCAPE = this.calcBreakpoint(2);
    this.BREAKPOINTS.TABLET = this.calcBreakpoint(3);
    this.BREAKPOINTS.MONITOR = this.calcBreakpoint(4);
    this.BREAKPOINTS.NOTEBOOK = this.calcBreakpoint(5);
    this.BREAKPOINTS.WIDESCREEN = this.calcBreakpoint(6);
    this.BREAKPOINTS.LARGER = this.calcBreakpoint(7);
    this.BREAKPOINTS.INFINITE = this.calcBreakpoint(100);
    v("breakpoints",this.BREAKPOINTS);

    this.breakpointOrder = Object.keys(this.BREAKPOINTS).map(breakpointName => {
      return this.BREAKPOINTS[breakpointName];
    }).sort((a,b) => a-b)

    this.width = angular.element(window).width();
    this.height = angular.element(window).height();
    v("width: "+this.width,"height: "+this.height);

    this.getBreakpointIndex = function(breakpointValue) {
      return this.breakpointOrder.findIndex(_breakpointValue => _breakpointValue == breakpointValue);
    }

    this.isAt = function(breakpointName) {
      // v("Checking if is at "+breakpointName);

      breakpointName = breakpointName.toUpperCase()
      if (this.BREAKPOINTS[breakpointName] == undefined) {
        throw new Error("Breakpoint \""+breakpointName+"\" does not exist");
        return;
      }

      var breakpointIndex = this.getBreakpointIndex(this.BREAKPOINTS[breakpointName]);
      // v("Index in list of breakpoints: "+breakpointIndex);

      if (breakpointIndex == null) {
        throw new Error("Breakpoint \""+breakpointName+"\" has no index in breakpointOrder")
      }

      var boolIsAt = this.width < this.breakpointOrder[breakpointIndex]
        && this.width >= (breakpointIndex == 0 ? this.breakpointOrder[breakpointIndex-1] : 0)

      // v(boolIsAt ? ("Yes, is at breakpoint "+breakpointName+".") : ("No, not at breakpoint "+breakpointName+"."))

      return boolIsAt;
    }
    this.isGt = function(breakpointName) {
      breakpointName = breakpointName.toUpperCase()
      if (this.BREAKPOINTS[breakpointName] == undefined) {
        throw new Error("Breakpoint \""+breakpointName+"\" does not exist");
        return;
      }
      return this.width > this.BREAKPOINTS[breakpointName]
    }
    this.isLt = function(breakpointName) {
      breakpointName = breakpointName.toUpperCase()
      if (this.BREAKPOINTS[breakpointName] == undefined) {
        throw new Error("Breakpoint \""+breakpointName+"\" does not exist");
        return;
      }
      return this.width < this.BREAKPOINTS[breakpointName]
    }
    this.isGte = function(breakpointName) {
      breakpointName = breakpointName.toUpperCase()
      if (this.BREAKPOINTS[breakpointName] == undefined) {
        throw new Error("Breakpoint \""+breakpointName+"\" does not exist");
        return;
      }
      return this.width >= this.BREAKPOINTS[breakpointName]
    }
    this.isLte = function(breakpointName) {
      breakpointName = breakpointName.toUpperCase()
      if (this.BREAKPOINTS[breakpointName] == undefined) {
        throw new Error("Breakpoint \""+breakpointName+"\" does not exist");
        return;
      }
      return this.width <= this.BREAKPOINTS[breakpointName]
    }

    this.getBreakpoint = function() {
      var bkpn = Object.keys(this.BREAKPOINTS).find(breakpointName => {
        return this.isAt(breakpointName)
      })
      v("Found current breakpoint: "+bkpn);
      return bkpn;
    }

    this.getViewportRatio = function() {
      var vpr = ( this.width / this.BREAKPOINTS[this.getBreakpoint()] )
      v("Obtaining viewport ratio: "+vpr);
      return vpr;
    }

    this.makeViewportContent = function() {
      return [
        ["width","device-width"].join("="),
        ["initial-scale",this.getViewportRatio()].join("="),
        ["user-scalable","yes"].join("="),
        ["minimum-scale",this.getViewportRatio()].join("="),
        ["maximum-scale",this.getViewportRatio()*2].join("="),
      ].join(",")
    }

    this.makeViewportMetaElement = function() {
      v("Creating viewport meta element")
      var meta = document.createElement("meta");
      meta.attr("name","viewport")
      document.head.appendChild(meta);
      return meta;
    }

    this.findViewportMetaElement = function() {
      v("Obtainig viewport meta element")
      if (this.viewportMetaElement == null) {
        this.viewportMetaElement = angular.element("meta[name=viewport]");
      }
      if (this.viewportMetaElement == null) {
        console.error("Viewport meta not found, creating one");
        this.makeViewportMetaElement();
        this.viewportMetaElement = angular.element("meta[name=viewport]");
      }
      if (this.viewportMetaElement == null) {
        throw new Error("Meta viewport not found");
        return;
      }
    }

    angular.element(window).resize(function() {
      v("Window Resize event");

      var newWidth = angular.element(window)[0].outerWidth;
      var newHeight = angular.element(window)[0].outerHeight;
      v("newWidth: "+newWidth,"newHeight: "+newHeight);

      if (newWidth == this.width && newHeight == this.height) {
        v("No change in width/height");
        return;
      }

      this.width = angular.element(window)[0].outerWidth;
      this.height = angular.element(window)[0].outerHeight;

      v("executing rootScope.apply");
      $rootScope.$apply();

      this.findViewportMetaElement();
      this.viewportMetaElement.attr("content", this.makeViewportContent())
    }.bind(this));

    this.readyResize = function() {
      v("Ready Resize event")
      if (angular == null
        || angular.element(window) == null
        || angular.element(window)[0] == null
        || angular.element(window)[0].outerWidth == 0
        || angular.element(window)[0].outerHeight == 0
      ) {
        v("Did not found window width/height, will try again in 150ms");
        return $timeout(this.readyResize.bind(this),150)
      }

      this.width = angular.element(window)[0].outerWidth;
      this.height = angular.element(window)[0].outerHeight;
      v("width: "+this.width, "height: "+this.height);
      $rootScope.$apply();

      this.findViewportMetaElement();
      this.viewportMetaElement.attr("content", this.makeViewportContent())
    }
    this.init = function() {
      v("Initializing, will run readyResize twice at 150ms and 200ms");
      $timeout(this.readyResize.bind(this),150);
      $timeout(this.readyResize.bind(this),200);
    }.bind(this)

    this.init()
  }
])
