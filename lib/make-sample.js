'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSample = makeSample;
function makeSample(textures) {
  var viewBoxW = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
  var viewBoxH = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 800;


  var pattern = '',
      rect = '';
  var x = 0,
      y = 0;
  var textureNum = textures.length;
  var width = 200;
  var height = 200;

  for (var i = 0; i < textureNum; i++) {

    var texture = textures[i];

    if (x >= viewBoxW) {
      x = 0;
      y += height;
    }

    pattern += '<pattern id="pattern' + (i + 1) + '" x="0" y="0" width="' + texture.width + '" height="' + texture.height + '" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">\n    ' + texture.tiles + '\n    </pattern>';

    rect += '<rect stroke-width="0" fill="url(#pattern' + (i + 1) + ')" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" />';

    x += width;
  }

  return '\n  <svg viewBox="0 0 ' + viewBoxW + ' ' + viewBoxH + '">\n  <defs>\n    ' + pattern + '\n  </defs>\n  <g stroke="white">\n    ' + rect + '\n  </g>\n  </svg>';
}