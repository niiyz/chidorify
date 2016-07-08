'use strict'

import { Yean } from '../yean'
import { WeaveRepeat } from '../weave-repeat'
import { weave } from '../weaver';
import fs from 'fs'

const repeat = new WeaveRepeat();

repeat.design([
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0, 1, 0]
]);

const green = new Yean('66FF00')
const gray  = new Yean('CCCCCC')

repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)

repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)

const texure = weave(repeat.data())

const viewBoxW = 800;
const viewBoxH = 800;

const svg =  `
<svg viewBox="0 0 ${viewBoxW} ${viewBoxH}">
<defs>
  <pattern id="pattern1" x="0" y="0" width="${texure.width}" height="${texure.height}" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
  ${texure.tiles}
  </pattern>
</defs>
<g stroke="white">
  <rect stroke-width="0" fill="url(#pattern1)" x="0" y="0" width="${viewBoxW}" height="${viewBoxH}" />
</g>
</svg>`;

fs.writeFile('public/index.html', svg)
