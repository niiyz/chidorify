'use strict';

import { twoTone } from './twotone';
import { YarnFactory } from './yarn-factory';
import { WeaveRepeat } from './weave-repeat';
import { weave } from './weaver';
import { save } from './svg-test';

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
const colorSets = twoTone(deepColors, lightColors);

let colorSet = colorSets.next();

while (!colorSet.done) {

    const deep   = YarnFactory.wide(colorSet.value.deep);
    const light  = YarnFactory.wide(colorSet.value.light);

    repeat.orderWarp(light, 4);
    repeat.orderWarp(deep,  4);

    repeat.orderWeft(light, 4);
    repeat.orderWeft(deep,  4);

    const texture = weave(repeat.data());
    textures.push(texture);

    repeat.resetYarn();

    colorSet = colorSets.next();

}

document.body.insertAdjacentHTML('beforeend', save(textures, 800, 1600));
