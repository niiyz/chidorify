'use strict'

export function weave(weave, viewBoxW = 400, viewBoxH = 400) {

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

  return `
  <svg viewBox="0 0 ${viewBoxW} ${viewBoxH}">
  <defs>
    <pattern id="pattern1" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
    ${tiles}
    </pattern>
  </defs>
  <g stroke="white">
    <rect stroke-width="0" fill="url(#pattern1)" x="0" y="0" width="${viewBoxW / 2}" height="${viewBoxH / 2}" />
  </g>
  </svg>`;
}
