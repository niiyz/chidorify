'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weave = weave;
function weave(weave) {

  var warp = weave.warp;
  var weft = weave.weft;

  var latLen = weave.diagram[0].length;
  var longLen = weave.diagram.length;

  var i = void 0,
      j = void 0,
      x = void 0,
      y = void 0,
      w = void 0,
      h = void 0;
  var tiles = '';

  y = 0;
  for (i = 0; i < longLen; i++) {
    x = 0;
    h = weft[i].thickness; // interlacing height is weft width
    for (j = 0; j < latLen; j++) {
      var warpIsOver = weave.diagram[i][j];
      var interlacingColor = void 0;
      if (warpIsOver) {
        interlacingColor = warp[i].color;
      } else {
        interlacingColor = weft[j].color;
      }
      w = warp[j].thickness; // interlacing width is wrap width
      tiles += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" stroke="#' + interlacingColor + '" fill="#' + interlacingColor + '" />';
      x += w;
    }
    y += h;
  }

  return { tiles: tiles, width: x, height: y };
}