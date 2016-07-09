'use strict'

import { TwoTone } from '../twotone'
import { YarnFactory } from '../yarn-factory';
import { WeaveRepeat } from '../weave-repeat';
import { weave } from '../weaver';
import { save } from '../svg-test';

const repeat = new WeaveRepeat();

repeat.design([
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1]
]);

const textures = [];

const deepColors  = ['ff1493', '191970', '556b2f', 'cd5c5c'];
const lightColors = ['eee8aa', 'fafad2', 'ffe4e1', 'ffff00'];
const colorSets = new TwoTone(deepColors, lightColors).colorSets();

for (let i = 0;i < colorSets.length;i ++) {
  const deep   = YarnFactory.wide(colorSets[i].deep);
  const light  = YarnFactory.wide(colorSets[i].light);

  repeat.orderWarp(light, 2);
  repeat.orderWarp(deep,  2);
  repeat.orderWarp(light, 2);
  repeat.orderWarp(deep,  2);

  repeat.orderWeft(light, 2);
  repeat.orderWeft(deep,  2);
  repeat.orderWeft(light, 2);
  repeat.orderWeft(deep,  2);

  const texture = weave(repeat.data())
  textures.push(texture);

  repeat.resetYarn();
}

save('public/test4.html', textures);
