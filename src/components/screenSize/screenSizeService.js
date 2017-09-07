
import app from 'core/main/main.js'

app.service("screenSizeService",[
  '$window',
  '$rootScope',
  '$document',
  '$timeout',
  function(
    $window,
    $rootScope,
    $document,
    $timeout
  ) {
    this.goldenStartSize = -2;
    this.goldenSize = 342;
    this.viewportMetaElement = angular.element("meta[name=viewport]");

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

    this.breakpointOrder = Object.keys(this.BREAKPOINTS).map(breakpointName => {
      return this.BREAKPOINTS[breakpointName];
    }).sort((a,b) => a-b)

    this.width = angular.element(window).width();
    this.height = angular.element(window).height();

    this.getBreakpointIndex = function(breakpointValue) {
      return this.breakpointOrder.findIndex(_breakpointValue => _breakpointValue == breakpointValue);
    }

    this.isAt = function(breakpointName) {
      breakpointName = breakpointName.toUpperCase()
      if (this.BREAKPOINTS[breakpointName] == undefined) {
        throw new Error("Breakpoint \""+breakpointName+"\" does not exist");
        return;
      }

      var breakpointIndex = this.getBreakpointIndex(this.BREAKPOINTS[breakpointName]);

      if (breakpointIndex == null) {
        throw new Error("Breakpoint \""+breakpointName+"\" has no index in breakpointOrder")
      }

      return this.width < this.breakpointOrder[breakpointIndex]
        && this.width >= (breakpointIndex == 0 ? this.breakpointOrder[breakpointIndex-1] : 0)
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
      return Object.keys(this.BREAKPOINTS).find(breakpointName => {
        return this.isAt(breakpointName)
      })
    }

    this.getViewportRatio = function() {
      return ( this.width / this.BREAKPOINTS[this.getBreakpoint()] )
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
      var meta = document.createElement("meta");
      meta.attr("name","viewport")
      document.head.appendChild(meta);
      return meta;
    }

    this.findViewportMetaElement = function() {
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
      var newWidth = angular.element(window)[0].outerWidth;
      var newHeight = angular.element(window)[0].outerHeight;

      if (newWidth == this.width && newHeight == this.height) {
        return;
      }

      this.width = angular.element(window)[0].outerWidth;
      this.height = angular.element(window)[0].outerHeight;

      $rootScope.$apply();

      this.findViewportMetaElement();
      this.viewportMetaElement.attr("content", this.makeViewportContent())
    }.bind(this));

    this.readyResize = function() {
      if (angular == null
        || angular.element(window) == null
        || angular.element(window)[0] == null
        || angular.element(window)[0].outerWidth == 0
        || angular.element(window)[0].outerHeight == 0
      ) {
        return $timeout(this.readyResize.bind(this),150)
      }

      this.width = angular.element(window)[0].outerWidth;
      this.height = angular.element(window)[0].outerHeight;
      $rootScope.$apply();

      this.findViewportMetaElement();
      this.viewportMetaElement.attr("content", this.makeViewportContent())
    }
    $document.ready(() => {
      $timeout(this.readyResize.bind(this),150);
      $timeout(this.readyResize.bind(this),200);
    })
  }
])
