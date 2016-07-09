'use strict'

import { YarnFactory } from '../yarn-factory';
import { WeaveRepeat } from '../weave-repeat';
import { weave } from '../weaver';
import { save } from '../svg-test';

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

const textures = [];

const deepColors  = ['ff1493', '191970', '556b2f', 'cd5c5c'];
const lightColors = ['eee8aa', 'fafad2', 'ffe4e1', 'ffff00'];
const colorSets = [];
for (let i = 0;i < lightColors.length;i ++) {
  const lightColor = lightColors[i];
  for (let j = 0;j < deepColors.length;j ++) {
    const deepColor = deepColors[j];
    colorSets.push([deepColor, lightColor]);
  }
}


for (let i = 0;i < colorSets.length;i ++) {
  const deep   = YarnFactory.wide(colorSets[i][0]);
  const light  = YarnFactory.wide(colorSets[i][1]);
  repeat.orderWeft(light);
  repeat.orderWarp(deep);

  const texture = weave(repeat.data())
  textures.push(texture);

  repeat.resetYarn();
}

save('public/test3.html', textures);
