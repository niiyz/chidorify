
import fs from 'fs';

export function save(path, textures, viewBoxW = 800, viewBoxH = 800) {

  let pattern = '', rect = '';
  let x = 0, y = 0;
  const textureNum = textures.length;
  const width      = 200;
  const height     = 200;

  for (let i = 0;i < textureNum;i ++) {

    const texture = textures[i];

    if (x >= viewBoxW) {
      x = 0;
      y += height;
    }

    pattern += `<pattern id="pattern${i+1}" x="0" y="0" width="${texture.width}" height="${texture.height}" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
    ${texture.tiles}
    </pattern>`;

    rect += `<rect stroke-width="0" fill="url(#pattern${i+1})" x="${x}" y="${y}" width="${width}" height="${height}" />`;

    x += width;

  }

  const svg =  `
  <svg viewBox="0 0 ${viewBoxW} ${viewBoxH}">
  <defs>
    ${pattern}
  </defs>
  <g stroke="white">
    ${rect}
  </g>
  </svg>`;

  fs.writeFile(path, svg);
}
