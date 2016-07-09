'use strict'

import { TwoTone } from '../twotone'
import { YarnFactory } from '../yarn-factory';
import { WeaveRepeat } from '../weave-repeat';
import { weave } from '../weaver';
import { save } from '../svg-test';

const repeat = new WeaveRepeat();

const diagramList = [];
diagramList.push(
[
  [0, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1, 1]
]);
diagramList.push(
[
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

for (let i = 0;i < diagramList.length;i ++) {

  repeat.design(diagramList[i]);

  for (let j = 0;j < colorSets.length;j ++) {
    const deep   = YarnFactory.wide(colorSets[j].deep);
    const light  = YarnFactory.wide(colorSets[j].light);

    repeat.twoTone(deep, light);
    repeat.threadOne();

    const texture = weave(repeat.data())
    textures.push(texture);

    repeat.resetYarn();
  }

  repeat.resetAll();
}

save('public/test6.html', textures, 800, 1600);
