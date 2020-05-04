var AFRAME = require('aframe-core');
var NoClickLookControls = require('aframe-no-click-look-controls');
AFRAME.registerComponent('no-click-look-controls', NoClickLookControls);

AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: { default: 'red' }
    },

    init: function () {
      var data = this.data;
      var el = this.el; 
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });