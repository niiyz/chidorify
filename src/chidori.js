'use strict'

import fs from 'fs'
import weave from '../weaver.json'

const warp = weave.warp;
const weft = weave.weft;

const latLen  = weave.diagram[0].length;
const longLen = weave.diagram.length;

let i, j, x, y, w, h;
let tiles = '';

y = 0;
for (i = 0;i < longLen;i ++) {
  x = 0;
  h = weft[i].thickness * 10;// interlacing height is weft width
  for (j = 0; j < latLen; j ++) {
    const warpIsOver = weave.diagram[i][j];
    let interlacingColor;
    if (warpIsOver) {
      interlacingColor = warp[i].color;
    } else {
      interlacingColor = weft[j].color;
    }
    w = warp[j].thickness * 10;// interlacing width is wrap width
    tiles += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#${interlacingColor}" />`
    x += w
  }
  y += h
}

const svg = `<svg viewBox="0 0 80 80">${tiles}</svg>`

fs.writeFile(svg, 'index.html', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});
