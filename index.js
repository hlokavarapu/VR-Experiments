require('aframe');
require('aframe-extras');
// require('aframe-teleport-controls');

// AFRAME.registerComponent('log', {
//   schema: {type: 'string'},

//   init: function () {
//     var stringToLog = this.data;
//     console.log(stringToLog);
//   }
// });

var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-window', extendDeep({}, meshMixin, {
  // Preset default components. These components and component properties will be attached to the entity out-of-the-box.
  defaultComponents: {
    geometry: {
    	primitive: 'box',
	    height: '12',
	    width: '9',
	    depth: '0.25',
	    color: "#4CC3D9"
    },
  },

  // Defined mappings from HTML attributes to component properties (using dots as delimiters).
  // If we set `depth="5"` in HTML, then the primitive will automatically set `geometry="depth: 5"`.
  mappings: {
    depth: 'geometry.depth',
    height: 'geometry.height',
    width: 'geometry.width'
  }
}));