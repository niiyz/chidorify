'use strict'

import { TwoTone } from '../twotone'
import { YarnFactory } from '../yarn-factory';
import { WeaveRepeat } from '../weave-repeat';
import { weave } from '../weaver';
import { save } from '../svg-test';

const repeat = new WeaveRepeat();

repeat.design([
  [0, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 1]
]);

const textures = [];

const deepColors  = ['ff1493', '191970', '556b2f', 'cd5c5c'];
const lightColors = ['eee8aa', 'fafad2', 'ffe4e1', 'ffff00'];
const colorSets = new TwoTone(deepColors, lightColors).colorSets();

for (let i = 0;i < colorSets.length;i ++) {
  const deep   = YarnFactory.wide(colorSets[i].deep);
  const light  = YarnFactory.wide(colorSets[i].light);

  repeat.orderWarp(light, 4);
  repeat.orderWarp(deep,  4);

  repeat.orderWeft(light, 4);
  repeat.orderWeft(deep,  4);
  console.log(repeat.data());
  const texture = weave(repeat.data())
  textures.push(texture);

  repeat.resetYarn();
}

save('public/test5.html', textures);
