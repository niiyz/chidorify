'use strict'

export function weave(weave) {

  const warp = weave.warp;
  const weft = weave.weft;

  const latLen  = weave.diagram[0].length;
  const longLen = weave.diagram.length;

  let i, j, x, y, w, h;
  let tiles = '';

  y = 0;
  for (i = 0;i < longLen;i ++) {
    x = 0;
    h = weft[i].thickness;// interlacing height is weft width
    for (j = 0; j < latLen; j ++) {
      const warpIsOver = weave.diagram[i][j];
      let interlacingColor;
      if (warpIsOver) {
        interlacingColor = warp[i].color;
      } else {
        interlacingColor = weft[j].color;
      }
      w = warp[j].thickness;// interlacing width is wrap width
      tiles += `<rect x="${x}" y="${y}" width="${w}" height="${h}" stroke="#${interlacingColor}" fill="#${interlacingColor}" />`;
      x += w;
    }
    y += h;
  }

  return {tiles, width: x, height: y}

}
