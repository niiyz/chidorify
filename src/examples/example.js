'use strict'

import fs from 'fs'
import data from '../../data/weaver4-1.json';
import { weave } from '../weaver';

const texure = weave(data);

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
