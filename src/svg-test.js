
import fs from 'fs'

export function save(path, viewBoxW, viewBoxH, texture) {

  const svg =  `
  <svg viewBox="0 0 ${viewBoxW} ${viewBoxH}">
  <defs>
    <pattern id="pattern1" x="0" y="0" width="${texture.width}" height="${texture.height}" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
    ${texture.tiles}
    </pattern>
  </defs>
  <g stroke="white">
    <rect stroke-width="0" fill="url(#pattern1)" x="0" y="0" width="${viewBoxW}" height="${viewBoxH}" />
  </g>
  </svg>`;

  fs.writeFile(path, svg)
}
