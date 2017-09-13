
import app from 'core/main/main.js'

app.directive('nbPseudoHover', function () {
  return {
    restrict: 'A',
    link: function ($scope, element, attrs) {
      element.on('mousedown', function () {
        element.addClass('nb-active')
      });
      element.on('mouseup', function () {
        element.removeClass('nb-active')
      });
      element.on('mouseenter', function () {
        element.addClass('nb-hover')
      });
      element.on('mouseleave', function () {
        element.removeClass('nb-hover')
      });
      element.on('touchstart', function () {
        element.addClass('nb-active')
        element.addClass('nb-active-touch')
      });
      element.on('touchend', function () {
        element.removeClass('nb-active')
        element.removeClass('nb-active-touch')
      });
      element.on('touchcancel', function () {
        element.removeClass('nb-active')
        element.removeClass('nb-active-touch')
      });
    }
  };
});
